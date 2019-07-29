import React from 'react';
import '../styles/App.scss';
import '../styles/ViewSelect.scss';
import Header from './Header';
import Form from './Form';
import FinanceList from './FinanceList';
import MonthForm from './MonthForm';
import CurrencySelect from './CurrencySelect'
var userKey = "97ca053c6b3a46de84ca665d1a00b404"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMonth: 0,
      currentCurrency: "PLN",
      currentView: "all",
      wallet: {
        expPercent: "0",
        expsValue: 0,
        incsValue: 0,
        cash: 0,
      },
      currenciesToPLN: {
        EUR: 1,
        USD: 1,
        GBP: 1,
        PLN: 1
      },
      incomes: [{
        id: 0,
        name: '1',
        type: "inc",
        value: 200,
        currency: "PLN",
        date: "13.08.2019"
      }],

      expenses: [{
        id: 0,
        name: 'Aha',
        type: "exp",
        value: 100,
        currency: "EUR",
        date: "10.05.2018"
      },]
    }
  }
  componentDidUpdate = () => {
    this.calcWallet()
  }
  componentWillMount = () => {
    const date = new Date();
    this.setState({
      currentMonth: date.getMonth()
    })
    this.currenciesUpdater();
    this.updateRef = setInterval(() => this.currenciesUpdater(), 60000)
  }
  componentWillUnmount = () => {
    clearInterval(this.updateRef)
  }
  currenciesUpdater = () => {
    fetch(`http://data.fixer.io/api/latest?access_key=${userKey}`)
      .then(e => e.json()).then(e => {
        var EUR = ((e.rates[`PLN`]) / (e.rates["EUR"])).toFixed(2)
        var GBP = ((e.rates[`PLN`]) / (e.rates["GBP"])).toFixed(2)
        var USD = ((e.rates[`PLN`]) / (e.rates["USD"])).toFixed(2);
        this.setState({
          currenciesToPLN: {
            EUR,
            GBP,
            USD,
            PLN: 1
          }
        })
      })
  }
  changeView = (month) => {
    this.setState({
      currentView: month
    })
  }
  calcWallet = () => {
    let expsValue = 0;
    let incsValue = 0;
    this.state.expenses.forEach(e => expsValue += this.calcCurrency(e.value, e.currency, "PLN"))
    this.state.incomes.forEach(e => incsValue += this.calcCurrency(e.value, e.currency, "PLN"))
    expsValue = parseFloat(expsValue.toFixed(2))
    incsValue = parseFloat(incsValue.toFixed(2))
    let cash = parseFloat((incsValue - expsValue).toFixed(2))
    let expPercent = !incsValue ? 100 : ((expsValue / (expsValue + incsValue)) * 100).toFixed();
    const wallet = {
      expsValue,
      incsValue,
      cash,
      expPercent,
    }
    if (this.state.wallet.cash !== cash) {
      this.setState({
        wallet
      })
    }
  }
  calcCurrency = (value, from, to) => {
    const resr = value * (this.state.currenciesToPLN[from]) / (this.state.currenciesToPLN[to])
    return parseFloat(resr.toFixed(2))
  }

  addTransaction = (type, name, value, currency) => {
    const id = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10);
    const date = new Date().toLocaleDateString();
    const transaction = {
      type,
      name,
      value,
      id,
      date,
      currency
    }
    if (type === "inc") {
      const incomes = this.state.incomes.slice(0)
      incomes.push(transaction)
      this.setState({
        incomes
      })
    }
    if (type === "exp") {
      const expenses = this.state.expenses.slice(0)
      expenses.push(transaction)
      this.setState({
        expenses
      })
    }
  }
  removeTransaction = (type, id) => {
    console.log(type, id)
    if (type === "exp") {
      const index = this.state.expenses.findIndex(e => e.id === id)
      const expenses = [...this.state.expenses]
      expenses.splice(index, 1)
      this.setState({
        expenses
      })
    }
    if (type === "inc") {
      const index = this.state.incomes.findIndex(e => e.id === id)
      const incomes = [...this.state.incomes]
      incomes.splice(index, 1)
      this.setState({
        incomes
      })
    }
  }
  setCurrency = (e) => {
    this.setState({
      currentCurrency: e.target.value
    })
  }
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  render() {
    const {
      wallet,
      incomes,
      expenses,
      currentCurrency,
      currentMonth,
      currentView
    } = this.state;
    const incList = incomes.map(e => {
      return {
        ...e,
        value: this.calcCurrency(e.value, e.currency, currentCurrency)
      }
    }).filter(e => {
      if (currentView === "all" || parseInt(e.date.substr(3, 2)) - 1 === parseInt(currentView)) return true
      return false
    })
    const expList = expenses.map(e => {
      return {
        ...e,
        value: this.calcCurrency(e.value, e.currency, currentCurrency)
      }
    }).filter(e => {
      if (currentView === "all" || parseInt(e.date.substr(3, 2)) - 1 === parseInt(currentView)) return true
      return false
    })

    return (
      <div className="main" >
        <Header expPercent={wallet.expPercent}
          inc={this.calcCurrency(wallet.incsValue, "PLN", currentCurrency)}
          exp={this.calcCurrency(wallet.expsValue, "PLN", currentCurrency)}
          cash={this.calcCurrency(wallet.cash, "PLN", currentCurrency)}
          cur={currentCurrency} month={
            this.months[currentMonth]} />
        <Form add={this.addTransaction} />
        <div className="viewControl" >
          <CurrencySelect setCurrency={this.setCurrency} value={currentCurrency} />
          <MonthForm change={this.changeView} months={this.months} />
        </div >
        <div className="container" >
          <FinanceList cur={currentCurrency}
            delete={this.removeTransaction}
            type="inc"
            list={incList}
          />
          <FinanceList cur={currentCurrency}
            delete={this.removeTransaction}
            type="exp"
            expValue={wallet.expsValue}
            list={expList}
          />
        </div >
      </div>
    );
  }
}

export default App;