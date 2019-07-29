class Form extends React.Component {
  state = {
    wrozby: ["ania", "hania", "jania"],
    draw: "",
    text: "",
    value: ""
  }
  drawWrozba = () => {
    let index = Math.floor(Math.random() * this.state.wrozby.length);
    this.setState({
      draw: this.state.wrozby[index]
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.text) {
      let wrozby = this.state.wrozby.map(e => e)
      wrozby.push(this.state.text)
      console.log(wrozby)
      this.setState({
        wrozby,
        text: ""
      })
    }
  }
  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (

      <React.Fragment>
        <button onClick={this.drawWrozba}>Zobacz</button>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} value={this.state.text} type="text" />
          <button>Dodaj wrożbę</button>

        </form>
        <p>{this.state.draw}</p>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'))
