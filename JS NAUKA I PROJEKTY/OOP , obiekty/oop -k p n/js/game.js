var Game = function () {
    this.btnPlay = document.querySelector('.start')
    this.resultSpans = document.querySelectorAll(".panel-right p span");
    this.gameSpans = document.querySelectorAll('.panel-left span');
    this.choice = new Choice();
    this.stats = new Stats()
    this.btnPlay.addEventListener('click', function () {
        this.playRound()
    }.bind(this))
    document.querySelectorAll('img').forEach(e => {
        e.addEventListener('click', function (e) {
            document.querySelectorAll('img').forEach(e => e.style.boxShadow = "none")
            this.choice.setPlayerChoice(e.target.getAttribute('src'));
            e.target.style.boxShadow = "0px 0px 2px 2px yellow";
        }.bind(this))
    })
    this.updateInterface = function (leftSide, rightSide) {
        this.resultSpans.forEach((e, i) => e.textContent = rightSide[i])
        this.gameSpans.forEach((e, i) => {
            if (i < 2) e.textContent = this.choice.options[leftSide[i]].src.replace(".jpg", "");

            if (leftSide[i] === "draw") e.textContent = "REMIS"
            if (leftSide[i] === "win") e.textContent = "GRACZ"
            if (leftSide[i] === "loose") e.textContent = "KOMPUTER"
        })
    };
    this.playRound = function () {
        if (this.choice.playerChoice === null) return alert('wybierz')
        this.choice.drawAiChoice();
        var result = Result.chechResult(this.choice.playerChoice, this.choice.aiChoice);
        this.stats.addGameToStats(result);
        this.updateInterface([this.choice.playerChoice, this.choice.aiChoice, this.stats.stats[this.stats.stats.length - 1]], this.stats.getResults())
    }
}


///

function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments).filter(e => typeof e !== "object")
    var newArr = []
    console.log(args, arr)
    args.forEach(e => {
        if (arr.indexOf(e) === -1) newArr.push(e)
    });
    console.log(newArr)

    arr.forEach(e => {
        if (args.indexOf(e) === -1) {
            newArr.push(e);
            console.log('wbijam', e)
        }
    })
    console.log(newArr)
    return newArr;
}

destroyer(["tree", "hamburger", 53], "tree", 53);



