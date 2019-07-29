const Choice = function () {
    this.options = [{
            id: 0,
            src: "kamien.jpg"
        },
        {
            id: 1,
            src: "papier.jpg"
        },
        {
            id: 2,
            src: "nozyczki.jpg"
        }
    ];
    this.playerChoice = null;
    this.aiChoice = null;
    this.drawAiChoice = function () {
        var index = Math.floor(Math.random() * this.options.length);
        this.aiChoice = this.options[index].id
    }
    this.setPlayerChoice = function (src) {
        this.options.forEach(e => {
            if (e.src === src) this.playerChoice = e.id
        })
    }
}