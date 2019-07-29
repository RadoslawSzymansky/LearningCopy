// // komponent funckyjny, bezstanowy
// const Section = () => {
//   return (
//     <div>
//       <p>Chuj CI w pysk</p>
//     </div>
//   );
// };

// //komponent klasowy stanowy
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Section />
//         <header>
//           <div className="ok">Czrsc ttu Header</div>
//         </header>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

class App extends React.Component {
  state = {
    age: "ok",
    name: "ssij"
  };
  render() {
    return (
      <>
        <ul>{this.state.age}</ul>
        <ul>
          <ItemsContent name="ok" />
        </ul>
      </>
    );
  }
}

// 1sposob przekazanie do propsa
// const ItemsContent = props => {
//   return <li>{props.name}</li>;
// };
//

// drugi sposob za pomoca class roznica z this

class ItemsContent extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
