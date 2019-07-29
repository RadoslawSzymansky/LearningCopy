class Result {
    static chechResult = function (p, a) {
        if (p === a) return "draw"
        if (p === 0 && a === 2 || p === 1 && a === 0 || p === 2 && a === 1) return "win"
        return "loose"
    }
}