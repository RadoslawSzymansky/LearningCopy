class Playit {
    constructor() {
        this.input = document.querySelector('.input');
        this.form = document.querySelector('form')
        this.form.addEventListener('submit', this.addElement.bind(this))
        this.tablica = new Todoarray()
        this.result();
        this.ul = document.querySelector('ul')
        this.btnReset = document.querySelector('.delete').addEventListener('click', this.resetList.bind(this))
    }
    result() {

        const span = document.querySelector('.span');
        const dlugosc = this.tablica.showlist();
        stattics.showListTims(span, dlugosc)
    }
    //
    resetList() {
        this.tablica.todothings.length = 0
        this.result();
        this.ul.textContent = ''


    }
    //
    addElement(e) {
        e.preventDefault();
        if (this.input.value.length == 0) return alert('wpisz wartosc');
        this.tablica.addElementToList(this.input.value);
        let newtablica = this.tablica.todothings.filter(() => true)
        this.ul.textContent = ''

        newtablica.forEach((e, index) => {

            let newEl = document.createElement('li');
            newEl.innerHTML = `<li>${e}<button class= 'a${index}'>Usun</button></li>`
            this.ul.appendChild(newEl)
            this.input.value = '';
            this.ul.querySelector(`button.a${index}`).addEventListener('click', (element) => {
                console.log('okok');


            })


        })
        console.log('przycisk')
        console.log(newtablica)

        this.result();

    }
}
const play = new Playit()

// //// zrobic przyciski usun tak zeby ilosc zadan sie aktualizowala;

// const showElementLi = (i) => {
//     listToDo.forEach((listElement, index) => {
//         let newLi = document.createElement('li');
//         newLi.dataset.key = index;
//         ul.appendChild(newLi)
//         newLi.innerHTML = listElement + `<button class = '${index}'>Usuń</button>`;
//         ul.querySelector(`[data-key = '${index}'] button`).addEventListener('click', removeLi)
//     })
// }