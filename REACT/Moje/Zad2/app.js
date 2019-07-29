const Children = (props) => {
  return props.list.map(((e, i) => (<li key={i}><span>{e}</span> <button data-name=
    {e} onClick={props.remove}>usun</button></li>)))
}
class Parent extends React.Component {
  state = {
    imiona: ["ania", "hania", "jania", "robert"],
  }
  remove = (e) => {
    let name = e.target.dataset.name
    var index = this.state.imiona.findIndex(e => e === name);
    let imiona = [...this.state.imiona]
    imiona.splice(index, 1)
    this.setState({
      imiona
    })
  }

  render() {
    return (

      <React.Fragment >
        <Children list={this.state.imiona} remove={this.remove}></Children>
      </React.Fragment>
    )
  }
}


ReactDOM.render(< Parent />, document.getElementById('root'))