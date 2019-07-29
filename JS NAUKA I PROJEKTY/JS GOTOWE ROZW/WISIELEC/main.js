const DIV_PASSWORD = document.querySelector(".password");
const LETTERS = document.querySelectorAll(".keyboard div");
const BTN_NEW_PASS = document.querySelector(".newPassword");
const MOVES_COUNT = document.querySelector(".movesNumber");
const BTN_BEGIN = document.querySelector(".begin");
const PASSWORDS = ["Maja ma raka", "Raz dwa trzy", "Szukasz ty"];
let MOVES = 5;
let index = -1;
let counter = 0;
// unclock the game, when first starting
const beginGame = e => {
    e.target.parentNode.classList.add("start");
};
function checkResult() {}
/// checking if the passwords contain the letter
const checkIfContains = e => {
    let password = PASSWORDS[index];

    //
    if (MOVES <= 1) {
        BTN_BEGIN.classList.remove("start");
        return alert("Koniec gry");
    }
    checkResult();
    MOVES--;
    MOVES_COUNT.textContent = MOVES;
    let letter = e.target.textContent;
    for (let i = 0; i < password.length; i++) {
        let pass = password[i].toLowerCase();
        if (letter == pass) {
            DIV_PASSWORD.childNodes[i].classList.add("succes");
        }
    }
    e.target.classList.add("off");
    e.target.removeEventListener("click", checkIfContains);

    [...DIV_PASSWORD.children].forEach(e => {
        e.classList.contains("succes") ? counter++ : null;
    });
    let spaces = 0;
    for (let i = 0; i < password.length; i++) {
        password[i] == " " ? spaces++ : null;
    }
    console.log(counter);
    let letterAmount = password.length - spaces;

    if (counter >= letterAmount) return alert("wygrana");
    counter = 0;
};
// drawing password from PASSWORDS ARRAY
function drawPassword() {
    draw = Math.floor(Math.random() * PASSWORDS.length);
    index = draw;
    password = PASSWORDS[draw];
    return password;
}
// staring new Game
const newGame = () => {
    rounds = prompt(
        "Wpisz ilość typów w grze.  Proponowane: Łatwy: 8,     Średni: 6,     Trudny: 4"
    );
    rounds = parseInt(rounds);
    if (isNaN(rounds)) return alert("Wpisz poprawną wartość!");
    MOVES = rounds;
    MOVES_COUNT.textContent = MOVES;
    let password = drawPassword();
    DIV_PASSWORD.innerHTML = "";
    console.log(password);
    // adding letter to the div.password
    for (let i = 0; i < password.length; i++) {
        console.log("petla");
        DIV_PASSWORD.innerHTML +=
            password[i] === " "
                ? `<div  data-key=${i} class="empty">.</div>`
                : `<div data-key=${i} >${password[i]}</div>`;
    }
    LETTERS.forEach(e => e.addEventListener("click", checkIfContains));
};
// events
BTN_NEW_PASS.addEventListener("click", newGame);
BTN_BEGIN.addEventListener("click", beginGame);
