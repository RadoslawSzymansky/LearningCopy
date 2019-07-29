class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue']
        this.getDrawResult = () => _result
        let _result = this.drawResult()

    }
    drawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)
            colors.push(this.options[index])
        }


        return colors;
    }
}
// const draw = new Draw()