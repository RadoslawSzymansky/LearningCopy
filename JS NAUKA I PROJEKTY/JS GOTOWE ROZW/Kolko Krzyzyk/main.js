const boxes = [...document.querySelectorAll("div>div")];
const PLAYER1 = "fa-circle";
const PLAYER2 = "fa-times";
let round = 1;
boxes.forEach(e => {
    e.addEventListener("click", play);
});
const BOARD = [["", "", ""], ["", "", ""], ["", "", ""]];
/// combinations of finish of game
const COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];

function play(event) {
    const { row, column } = event.target.dataset;
    /// checking the player if player is odd is 2 // if even is 1;
    turn = round % 2 === 0 ? PLAYER1 : PLAYER2;
    // checking if the board is already clicked. if yes return
    if (BOARD[row][column] !== "") return alert("zajete");
    event.target.classList.add(turn);
    // setting move(click) to board
    BOARD[row][column] = turn;
    round++;
    checkResult();
}
const checkResult = () => {
    let winner = null;
    // result will be new array // so making new array without nested arrays// total is the previous element callback, and row is current
    const result = BOARD.reduce((total, row) => total.concat(row));
    let moves = {
        "fa-circle": [],
        "fa-times": []
    };
    //  if the field in result is not "". push index  to moves to see his moves in one array of the player
    result.forEach((box, index) =>
        moves[box] ? moves[box].push(index) : null
    );
    // checking if the array of the is the like in combinations
    COMBINATIONS.forEach(combination => {
        if (combination.every(index => moves[PLAYER1].indexOf(index) > -1)) {
            winner = "wygral1";
        }
        if (combination.every(index => moves[PLAYER2].indexOf(index) > -1)) {
            winner = "wygral player2";
        }
    });
    console.log(winner);
    return winner;
};
