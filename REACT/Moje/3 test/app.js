class Child extends React.Component {
  componentDidMount() {
    console.log('montaz dziecka z buttoonem')
  }
  componentDidUpdate() {
    console.log('update dziecka z buttoonem')
  }
  render() {
    return (
      <button onClick={this.props.handleFlag}>s</button>
    )
  }
}
class Child2 extends React.Component {
  componentWillUnmount() {
    console.log('usuwam dziecko dwa, znika z glownego app')
  }
  render() {
    return (
      <p>Jestem child2</p>
    )
  }
}
class Form extends React.Component {
  constructor(props) {
    super(props)
    console.log('wywoluje komponent')
    this.state = {
      flag: true
    }
  }
  componentDidMount() {
    console.log('pierwsze wywolanie render')
  }
  componentDidUpdate() {
    console.log('update rodzica glownego, czyli po redner?')
  }

  handleFlag = () => {
    console.log(this)
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (

      <React.Fragment>
        <Child handleFlag={this.handleFlag}></Child>
        {this.state.flag && <Child2></Child2>}
      </React.Fragment>
    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'))
