class Game {
    constructor() {
        this.stats = new Stats()
        this.wallet = new Wallet(150)
        document.getElementById('start').addEventListener('click', this.startGame.bind(this))
        this.spanSrodki = document.querySelector('.panel .wallet')
        this.spanBidLoss = document.querySelector('.score .result')
        this.spanGames = document.querySelector('.score .number')
        this.spanWon = document.querySelector('.score .win')
        this.spanLoss = document.querySelector('.score .loss')
        this.boards = document.querySelectorAll('.game .color')
        this.bidInput = document.getElementById('bid')
        this.render()
    }
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.showWalletValue(), stats = [0, 0, 0], result = '', wonMoney, bid) {
        console.log('siema gramy')
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index]

        })
        this.spanSrodki.textContent = money + 'zł';
        this.spanGames.textContent = stats[0]
        this.spanWon.textContent = stats[2]
        this.spanLoss.textContent = stats[1]
        if (result) {
            result = `Wygrałes ${wonMoney}zł`
        } else if (!result && result !== '') {
            result = `Przegales szmato ${bid}zł`
        }
        this.spanBidLoss.textContent = result
    }
    startGame() {
        if (this.bidInput.value <= 0 || typeof this.bidInput.value !== typeof 'number') {
            alert('Wpisales za mala kwote')
        }
        const bid = Math.floor(this.bidInput.value)
        if (!this.wallet.checkCanPlay(bid)) return alert('za malo kaski masz')
        if (this.wallet.checkCanPlay(bid)) {
            console.log('Mozes grac kurla')
        } else(console.log('masz za malo srodkow'))
        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkIfWin(colors)
        const winmoney = Result.moneyWIninGame(win, bid)
        this.wallet.changeWallet(winmoney)
        this.stats.addStatToGame(win, bid)
        this.render(colors, this.wallet.showWalletValue(), this.stats.showgameStats(), win, winmoney, bid)
        this.bidInput.value = ''
    }
}
const game = new Game()