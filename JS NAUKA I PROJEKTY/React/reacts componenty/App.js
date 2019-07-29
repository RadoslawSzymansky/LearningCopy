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

/// dodawanie tekstu po liknici ::

// class NewProject extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       txt: "ok"
//     };
//   }
// // ta funkcja nizej moze byc nizej jezeli bd arrow function to wtedy wywolac zdarzenie bez bind
//   clickingFunction() {
//     this.setState(() => ({
//       txt: this.state.txt + "dodaje"
//     }));
//   }
//   render() {
//     return (
//       <>
//         <button onClick={this.clickingFunction.bind(this)}>Nowa</button>
//         <div>{this.state.txt}</div>
//       </>
//     );
//   }
// }

// ReactDOM.render(<NewProject />, document.getElementById("root"));

// Wsytswieltanie tekstu z inputa  w innym miejscu :D, pamietaj ze set state renderuje bo inaczej moze nie byc widac zmian

// class App extends React.Component {
//   state = {
//     value: ""
//   };
//   changeInput = e => {
//     console.log(e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//   };
//   handleClick = () => {
//     console.log("czyszcze");

//     this.setState({
//       value: ""
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           onChange={this.changeInput}
//           value={this.state.value}
//         />
//         <button onClick={this.handleClick}>Resetuj</button>
//         <h1> {this.state.value}</h1>
//       </div>
//     );
//   }
// }

//  teraz aplikacja message ktory sie wyswietla lub znika po kliknieciu  w button, ale p jest albo go nie ma

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checkState: false
//     };
//     this.changeState = this.changeState.bind(this)
//   }
//   // w setstate tak jak bysmy byli juz w state
//   changeState() {
//     this.setState({
//       checkState: this.checkState = !this.checkState
//     })
//   }
//   render() {
//     console.log(this.state.checkState)
//     const tekst = 'Tekst Wyswietlony dzieki true'
//     return (
//       <>
//         <button onClick={this.changeState}>{this.checkState ? 'Schowaj' : 'Pokaz'}</button>
//         {/* pierwszt warunek  - trojlogiczny */}
//         <p>{this.state.checkState ? tekst : 'false teraz'}</p>
//         {/* warunek operator logiczny */}
//         <p>{this.state.checkState && 'jest true, drugi operator logiczny ktory jak false to nic nie ma'}</p>
//         {/* 3 warunek z istnietjacym lub nie p bo poprzednie maja caly czas p w DOM */}
//         {this.checkState && <p>tekst wyswietlony dzieki temu ze p powstalo w wyniku tego ze checktate jest true</p>}
//         {this.checkState ? null : <p>Ok jestem, w tym przypadku tu jest true</p>}

//       </>
//     )
//   }
//   ;
// }

// ReactDOM.render(< App />, document.getElementById("root"));

/// aplikacja counter zwiekszajaca lub zmiejszajaca wyninik  w h1 (wszystko ladnie smiga bo bindowane jest , bind tez zapobiega wywolaniu odrazu)
// i w bindzie mozna podac jako nastepne wlasnie dane przypisane do fuckji handleckicl. czyli 1 this 2 type 3 number a
// prevState to tak jkaby aktulana wartosc

// class Counter extends React.Component {
//   state = {
//     count: 0,
//     value: 0
//   };
//   handleClick = (type, number) => {
//     if (type === "dodaj") {
//       // debugger;
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         value: prevState.value + number
//       }));
//     } else if (type === "reset") {
//       // debugger;
//       this.setState({
//         value: (this.value = 0)
//       });
//     } else if (type === "minus") {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         value: prevState.value - number
//       }));
//     }
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={this.handleClick.bind(this, "dodaj", 1)}>+1</button>
//         <button onClick={this.handleClick.bind(this, "dodaj", 3)}>+3</button>
//         <button onClick={this.handleClick.bind(this, "reset")}>Reset</button>
//         <button onClick={this.handleClick.bind(this, "minus", 1)}>-1</button>
//         {/* teraz el wstawiony za pomoc propsa ktory ustalamy ponizej moze byc ich wiele  */}
//         <H1Const show={this.state.count} />
//         {/* teraz inny przyklad np button */}
//         <BtnNew name="+25" funkcja={this.handleClick.bind(this, "dodaj", 25)} />
//         <BtnNew name="+50" funkcja={this.handleClick.bind(this, "dodaj", 50)} />

//         <h1> Liczba klikniec to: {this.state.count}</h1>
//         <h1>Wartosc to: {this.state.value}</h1>
//       </React.Fragment>
//     );
//   }
// }

// const H1Const = props => {
//   //odwolanie do props
//   return <h1>Liczba klikniec za pomoca props to {props.show}</h1>;
// };

// // teraz button z ustaleniem co ma robic , czyli mozna tworzyc rozne zmieniajac tylko dane

// const BtnNew = props => {
//   return <button onClick={props.funkcja}>{props.name}</button>;
// };

// ReactDOM.render(<Counter />, document.getElementById("root"));
// //

// /// element ktory po wisnieciu przycsiki i zaznaczeniu inputa wpisuje inny tekst .
// const CanItext = props => {
//   return props.text;
// };
// class Checkage extends React.Component {
//   state = {
//     check: true,
//     btnText: <p>Kup Bilet!</p>
//   };
//   //destrukturyzacja czyli wydzielanie el do zmiennej z obiektu np
//   changeCheck = () => {
//     this.setState({
//       check: (this.check = !this.check)
//     });
//   };
//   ShowMsg = () => {
//     if (this.state.check == true) {
//       return <p>Ok mozesz kupic</p>;
//     } else if (!this.state.check) {
//       return <p>NIestety nie mozesz kupic</p>;
//     }
//   };
//   handleClick = e => {
//     e.preventDefault();
//     if (this.state.check) {
//       this.setState({
//         btnText: "Gratulacje bd mogl kupic"
//       });
//     } else {
//       this.setState({
//         btnText: "Odznaczyles wiek"
//       });
//     }
//   };
//   render() {
//     /// destrukturyzaCJA, WYDZ ELE ZA POMOCA PONIZEJ:  A POZNIEJ ODWOLYWAC SIE DO CHECK, DZIALA WEWNATRZ RENDERA NAPEWNO
//     const { check } = this.state;

//     return (
//       <>
//         <div>
//           Jeżeli masz przynajmniej 16 lat to możesz kupić bilet na ten koncert
//         </div>
//         <form action="submit" id="check">
//           <input
//             onClick={this.changeCheck}
//             type="checkbox"
//             id
//             checked={check}
//           />
//           <label htmlFor="#check"> Czy masz 16 lat?</label>
//           <p>
//             <this.ShowMsg />
//             <button onClick={this.handleClick}>Kup</button>
//           </p>
//         </form>
//         <CanItext text={this.state.btnText} />
//       </>
//     );
//   }
// }

// ReactDOM.render(<Checkage />, document.getElementById("root"));

// //// dodac button i to co kazal Samuraj zeby cofalo do zerA JEZELI ODZNACZYMY. ZABRAC PREVdEAFULT ORAZ DESRUKTURYZACJA ZROBIC

// class App extends React.Component {
//   state = { magazine: 5, order: 0 };
//   changeValueUp = () => {
//     this.setState({
//       order: this.state.order + 1
//     });
//   };
//   changeValueDown = () => {
//     this.setState({
//       order: this.state.order - 1
//     });
//   };
//   handleBuy = () => {
//     this.setState({
//       magazine: this.state.magazine - this.state.order,
//       order: (this.state.order = 0)
//     });
//   };
//   render() {
//     const { magazine, order } = this.state;
//     return (
//       <>
//         {/* //button ktory jest aktywny lub nie dzieki disabled i operator loginy// */}
//         <button onClick={this.changeValueDown} disabled={order ? false : true}>
//           -
//         </button>
//         {/* style w reacts liniowe obiekt w obiekcie! po lewej jako order false */}
//         <span style={order ? {} : { opacity: 0.4 }}>{order}</span>
//         <button
//           onClick={this.changeValueUp}
//           // btn ktory jest aktywny gdy stan zamowienie jest rowne badz mniejsze ood magazynu
//           disabled={order < magazine ? false : true}
//         >
//           +
//         </button>
//         {/* teraz button ktory jest powstaje tylko gdy order jest wieksze niz 0  dzieki odpowiedniemu operatrowi logicznemu*/}
//         {order > 0 && <button onClick={this.handleBuy}>Kup Teraz</button>}
//       </>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById("root"));

// najprosztesze dodawanie ele do tablicy, key to atrybut jako informacja wymagana przez react, tylko on nie jest widoczny w DOM
// class Firstarray extends React.Component {
//   state = {
//     fruits: ["jablko", "banan", "gruszka"]
//   };
//   render() {
//     return (
//       <ul>
//         {this.state.fruits.map(fruit => (
//           <li key={fruit}>{fruit}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ReactDOM.render(<Firstarray />, document.getElementById("root"));

// const data = {
//   users: [
//     { name: "radek", age: 19, sex: "male", id: 1 },
//     { name: "arek", age: 49, sex: "male", id: 3 },
//     { name: "Maria", age: 29, sex: "female", id: 2 }
//   ]
// };

// const Item = props => {
//   return (
//     <div>
//       <h1>Imie uzytkownika: {props.user.name}</h1>
//       <h2>Wiek uzytkownika: {props.user.age}</h2>
//       <h2>Plec uzytkownika: {props.user.sex}</h2>
//     </div>
//   );
// };
// class Firstarray extends React.Component {
//   state = {
//     fruits: ["jablko", "banan", "gruszka"]
//   };
//   render() {
//     let users = this.props.data.users;
//     users = users.filter(item => item.sex === "male");
//     const items = users.map(user => <Item user={user} />);
//     return <>{items}</>;
//   }
// }

// ReactDOM.render(<Firstarray data={data} />, document.getElementById("root"));

// Losowanie wrozby oraz dodawanie do tablicy w react (moj sposob) lepiej dodac do tablicy za pomoca metody concat


// USUWANIE ELEMNTOW Z LISTY MOJ SPOSOB! foreach nie dziala dlaczego?
const LiItems = props => {
  let i = -1;

  return (
    <ul>
      {props.lista.map(elem => {
        ++i;

        return (
          <li>
            {elem}
            <button className={i} onClick={props.delete}>
              Usuń
            </button>
          </li>
        );
      })}
    </ul>
  );
};
class Lista extends React.Component {
  state = {
    listNow: ["Jan", "Maria", "Andrzej"]
  };
  deleteLi = e => {
    const listNow1 = this.state.listNow;
    listNow1.splice(e.target.className, 1);
    console.log(listNow1);
    this.setState({});
  };
  render() {
    return (
      <>
        <LiItems lista={this.state.listNow} delete={this.deleteLi} />
      </>
    );
  }
}

ReactDOM.render(<Lista />, document.getElementById("root"));
