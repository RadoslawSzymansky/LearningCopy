const header = (<div>Andrzej</div>)
var ania = "ania"
const Player = function (props) {
  return <li>{props.name}</li>
}
class App extends React.Component {
  state = {
    counter: 0,
    value: "",
    tekst: "react dzialam",
    showMsg: false,
    api: [],
    count: this.props.count
  }
  countUp = () => {
    this.setState({
      counter: this.state.counter += 1
    })
  }
  showValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  resetValue() {
    this.setState({
      value: ""
    })
  }
  handleTekstButton = () => {
    this.setState({
      showMsg: !this.state.showMsg
    })
  }
  handleButtonApi() {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    fetch(url).then(res => res.json()).then(e => this.setState({
      api: e
    }))
  }
  handleMatchClick = function (type, number = 1) {

    if (type === "+") {
      this.setState((prevState) => ({
        count: prevState.count += number
      }))
    } if (type === "-") {
      this.setState((prevState) => ({
        count: prevState.count - number
      }))
    }
  }
  render() {
    return (
      <div className={ania}>
        {header}
        <Player name="Robert"></Player>
        <button onClick={this.countUp}>{this.state.counter}</button>
        <h1>Hello!</h1>
        <input onChange={this.showValue} value={this.state.value} type="text" />
        <div className="result">{this.state.value.toUpperCase()}</div>
        <button onClick={this.resetValue.bind(this)}>Reset</button>
        <button className="showTekst" onClick={this.handleTekstButton}>{this.state.showMsg ? "Ukryj" : "Pokaż"}</button>
        {this.state.showMsg && <p>{this.state.tekst}</p>}
        <button onClick={this.handleButtonApi.bind(this)}>Show api wiki</button>
        {this.state.api.map(e => <li>{e}</li>)}
        <div className="counter">
          <h1>counter</h1>
          <button onClick={this.handleMatchClick.bind(this, "+", 1)}>+</button>
          {/* {drugi  sposob przekazywania parametrow, pierw anonimowa a pozniej wywolwanie funckji w srodku} */}
          <button onClick={() => this.handleMatchClick("-", 1)}>-</button>
          <button>reset</button>
          <p className="result">Liczba klikniec <span>{this.state.count}</span></p>
          <MathButton click={this.handleMatchClick.bind(this)} number={5} type="+" ></MathButton>

        </div>
      </div>
    );
  }
}
const MathButton = (props) => {
  return (
    <button onClick={props.click.bind(null, props.type, props.number)}>{props.type}</button>
  )
}


ReactDOM.render(<App count={0} />, document.getElementById('root'))