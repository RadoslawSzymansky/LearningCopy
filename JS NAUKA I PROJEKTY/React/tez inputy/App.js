// // dla kazdego prawie typu inaczej
// class App extends React.Component {
//   state = {
//     input: "",
//     areaText: "",
//     check: "on"
//   };
//   handleChangeInput = e => {
//     this.setState({
//       input: e.target.value
//     });
//   };
//   handleChangeArea = e => {
//     this.setState({
//       areaText: e.target.value
//     });
//   };
//   handleChangeCheckbox = e => {
//     this.setState({
//       check: e.target.checked
//     });
//   };
//   render() {
//     return (
//       <>
//         <form action="">
//           <label>
//             Miaasto{" "}
//             <input
//               type="text"
//               value={this.state.input}
//               onChange={this.handleChangeInput}
//             />
//           </label>
//           <br />
//           <label>
//             Co ci sie podoba
//             <textarea onChange={this.handleChangeArea} cols="30" rows="10" />
//           </label>
//           <br />
//           <label htmlFor="">Czy posiadasz u nas konto?</label>
//           <input
//             onClick={this.handleChangeCheckbox}
//             type="checkbox"
//             name=""
//             id=""
//           />
//         </form>
//       </>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById("root"));

//
// jedna funckja dla wszystkich
//
class App extends React.Component {
  state = {
    city: "",
    textarea: "",
    check: ""
  };
  handleChange = e => {
    if (e.target.name === "check") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    return (
      <>
        <form action="">
          <label>
            Miaasto{" "}
            <input
              name="city"
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Co ci sie podoba
            <textarea
              name="textarea"
              onChange={this.handleChange}
              cols="30"
              rows="10"
            />
          </label>
          <br />
          <label htmlFor="">Czy posiadasz u nas konto?</label>
          <input
            onClick={this.handleChange}
            type="checkbox"
            name="check"
            id=""
          />
        </form>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
