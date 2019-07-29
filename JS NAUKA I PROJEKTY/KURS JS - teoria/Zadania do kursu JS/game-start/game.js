let counterGame = 1;
let counterLoss = 0;
let counterDraw = 0;
let counterWin = 0;
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,

}
const game = {
    playerHand: '',
    aiHand: '',
    playerHandHtml: '',

}
// funckje
const handSelect = function () {
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0px 0px 0px 5px red'
    hands.forEach(hand => game.playerHand = this.dataset.option);

}

function gameResult(player, ai) {
    console.log(player, ai)
    if (player === ai) {
        console.log('remis')

        return 'draw'
    } else if ((player == 'papier' && ai == 'kamień') || (player == 'kamień' && ai == 'nożyczki') || (player == 'nożyczki' && ai == 'papier')) {
        console.log('wygrales');

        return 'won'
    } else {
        console.log('komp wygral')

        return 'loss'
    }
}

function publishResult() {
    document.querySelector('[data-summary=your-choice]').textContent = game.playerHand;
    document.querySelector('[data-summary=ai-choice]').textContent = game.aiHand;
    if (gameResult(game.playerHand, game.aiHand) == 'draw') {
        document.querySelector('[data-summary=who-win]').textContent = 'REMIS!';
        counterDraw++
    } else if (gameResult(game.playerHand, game.aiHand) == 'won') {
        document.querySelector('[data-summary=who-win]').textContent = 'WYGRAŁEŚ!!!';
        counterWin++
    } else if (gameResult(game.playerHand, game.aiHand) == 'loss') {
        document.querySelector('[data-summary=who-win]').textContent = 'NIESTETY PRZEGRAŁEŚ';
        counterLoss++
    }
    document.querySelector('.numbers span').textContent = counterGame;
    document.querySelector('.wins span').textContent = counterWin;
    document.querySelector('.losses span').textContent = counterLoss;
    document.querySelector('.draws span').textContent = counterDraw;

}




function startPlay(playerHand, aiHand) {
    if (!game.playerHand) return alert('Wybierz dłoń!');
    game.aiHand = compChoice();
    gameResult(game.playerHand, game.aiHand);
    publishResult();
    counterGame++;
    hands.forEach(hand => hand.style.boxShadow = '')
    game.playerHand = ''
}

function compChoice() {
    let index = Math.floor((Math.random() * hands.length))
    return hands[index].dataset.option

}
//
const hands = document.querySelectorAll('.select img')
const play = document.querySelector('.start')
// wywolanie funckji za pomoca zdrazenia
hands.forEach(hand => hand.addEventListener('click', handSelect))
play.addEventListener('click', startPlay)