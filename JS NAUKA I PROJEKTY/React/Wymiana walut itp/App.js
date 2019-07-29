const Form = props => {
  return (
    <form>
      <label>
        Wybierz produkt:{" "}
        <select onChange={props.selectChange}>
          <option value="Prąd" name="1">
            Prąd
          </option>
          <option value="Woda" name="2">
            Woda
          </option>
          <option value="Gaz" name="3">
            Gaz
          </option>
        </select>
        <br />
      </label>
      <input type="number" onChange={props.handleChange} value={props.change} />
      <label> Cena za :{props.suffix}</label>
    </form>
  );
};
const Currency = props => {
  return props.data.map(item => {
    return (
      <p>
        Wartość w {item.name}:{" "}
        {props.input <= 0
          ? ""
          : (props.input * props.good * item.ratio).toFixed(2)}
      </p>
    );
  });
};
class App extends React.Component {
  state = {
    good: 0.85,
    input: 1,
    suffix: " kwH",
    data: [
      {
        id: 4,
        name: "Złoty",
        ratio: 1
      },
      {
        id: 1,
        name: "Dollar",
        ratio: 3.6
      },
      {
        id: 2,
        name: "Euro",
        ratio: 4.25
      },
      {
        id: 1,
        name: "NOK(Norway)",
        ratio: 0.47
      }
    ]
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  selectChange = e => {
    if (e.target.value === "Prąd") {
      this.setState({
        good: 0.85,
        suffix: "kwH"
      });
    } else if (e.target.value === "Woda") {
      this.setState({
        good: 6.85,
        suffix: `1 kubik`
      });
    } else {
      this.setState({
        good: 2.55,
        suffix: `1 litr`
      });
    }
    this.state.input = "";
  };
  render() {
    const { input, data, good, suffix } = this.state;
    return (
      <>
        <Form
          handleChange={this.handleChange}
          change={input}
          selectChange={this.selectChange}
          suffix={suffix}
        />
        <Currency data={data} input={input} good={good} />
        {this.state.data[0].name}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
