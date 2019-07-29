const Button = (props) => (
  <button onClick={props.click}>{props.flag ? "Wyłącz" : "Włącz"}</button>
)
class Clock extends React.Component {
  state = {
    time: this.getDate()
  }
  referenceForSetTimeout = ""
  getDate() {
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var seconds = date.getSeconds()
    return {
      minutes, hours, seconds
    }
  }
  componentDidMount() {
    this.referenceForSetTimeout = setInterval(() => {
      this.setState({
        time: this.getDate()
      })
    }, 1000)
  }
  componentWillUnmount() {
    console.log('oinstalowyje')
    clearTimeout(this.referenceForSetTimeout)
  }
  render() {
    const { minutes, hours, seconds } = this.state.time;
    return (
      <>
        <p>{hours} : {minutes} : {seconds}</p>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    clockActive: true
  }
  handleClick() {
    this.setState(prev => ({
      clockActive: !prev.clockActive
    }))
  }
  render() {
    return (
      <React.Fragment >
        <Button click={this.handleClick.bind(this)} flag={this.state.clockActive}></Button>
        <br />
        {this.state.clockActive ? <Clock /> : null}
      </React.Fragment>
    )
  }
}


ReactDOM.render(< App />, document.getElementById('root'))