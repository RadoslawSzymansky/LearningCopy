class Stats {
    constructor() {
        this.gameResults = []
    }
    addStatToGame(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        this.gameResults.push(gameResult)
    }
    showgameStats() {

        let LiczbaGier = this.gameResults.length;
        let przegrane = this.gameResults.filter(e => e.win === false);
        let wygrane = this.gameResults.filter(e => e.win === true);
        console.log('pokaz', LiczbaGier, przegrane, wygrane)
        return [LiczbaGier, przegrane.length, wygrane.length];


    }
}

const stats = new Stats()