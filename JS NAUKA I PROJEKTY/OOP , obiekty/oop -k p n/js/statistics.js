var Stats = function () {
    this.stats = [];
    this.addGameToStats = function (result) {
        this.stats.push(result)
    };
    this.getResults = function () {
        var wonGames = this.stats.filter(e => e === "win").length
        var drawGames = this.stats.filter(e => e === "draw").length
        var looseGames = this.stats.filter(e => e === "loose").length
        return [this.stats.length, wonGames, drawGames, looseGames]
    }
}