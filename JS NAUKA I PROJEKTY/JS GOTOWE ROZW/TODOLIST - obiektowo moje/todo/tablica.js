class Todoarray {
    constructor() {
        this.todothings = [];
        this.addElementToList = function (input) {
            let element = input;
            this.todothings.push(element)
            console.log('todoarray add elemtn dzialam');
        }

    }
    showlist() {
        return this.todothings.length
    }
    clearlist() {
        this.todothings = [];

    }
}
const okok = new Todoarray('ok')