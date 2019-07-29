class Result {
    static moneyWIninGame(result, bid) {
        if (result) {
            return bid * 3
        } else {
            return 0
        }
    }
    static checkIfWin(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2]) return true;
        else return false


    }

}