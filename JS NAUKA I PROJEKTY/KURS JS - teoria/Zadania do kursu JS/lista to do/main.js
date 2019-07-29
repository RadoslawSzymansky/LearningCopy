// ZMIENNE
const btnAdd = document.querySelector('.google');
let listToDo = [];
const input = document.querySelector('input');
const form = document.querySelector('[action = search]');
const ul = document.querySelector('ul');
const divNumbers = document.querySelector('.container p');
const btnSearch = document.querySelector('.serach');


divNumbers.textContent = ''

let newArray = []
//
// wyszkuwarka dzialanie fajne odrazu, mozna ustawic na klik. trzeba zaminiv wszystkonna czas dzialania na male i wyszukiwac male wtedy nie bede mialy znaczenia duze i male litery
const browser = () => {

    ul.innerHTML = ''

    let arraySmall = listToDo.map((e) => e.toLowerCase())
    let txt = input.value.toLowerCase()
    newArray = arraySmall.filter((element, index) => element.includes(txt))
    console.log(arraySmall, 'small')
    console.log(newArray, 'newray')
    newArray.forEach((listElement, index) => {
        let newLi = document.createElement('li');
        newLi.dataset.key = index;
        ul.appendChild(newLi)
        newLi.innerHTML = listElement + `<button class = '${index}'>Usuń</button>`;
        ul.querySelector(`[data-key = '${index}'] button`).addEventListener('click', removeLi)
    })


}
input.addEventListener('input', browser)
// FUCNKCJE

// fuckja ktora aktualizauje liste
const showElementLi = (i) => {
    listToDo.forEach((listElement, index) => {
        let newLi = document.createElement('li');
        newLi.dataset.key = index;
        ul.appendChild(newLi)
        newLi.innerHTML = listElement + `<button class = '${index}'>Usuń</button>`;
        ul.querySelector(`[data-key = '${index}'] button`).addEventListener('click', removeLi)
    })
}

//
const removeLi = (e) => {
    const index = e.target.parentNode.dataset.key;

    listToDo.splice(index, 1);

    e.target.parentNode.remove();
    console.log(index, 'Usuwam', listToDo);
    ul.innerHTML = ''
    showElementLi()
    divNumbers.textContent = `Lista elementów to: ${listToDo.length}`

}

// funckja na formie submit do dodanie elementow /$/
const addElement = (e) => {
    e.preventDefault();
    // reszta funckcji
    //
    if (input.value !== '') {
        let inputTXT = input.value;
        listToDo.push(inputTXT);
        console.log('wyslales tekst');
        input.value = '';
        ul.innerHTML = ''
        showElementLi()
        if (listToDo.length == 1) {
            let created = document.createElement('button')
            let happy = document.body.appendChild(created)
            happy.textContent = 'Wyczyść listę';
            happy.setAttribute('data-dupa', 'sikam');
            happy.addElement
            let reset = document.querySelector('[data-dupa="sikam"]');
            reset.addEventListener('click', resetList);
        }
        divNumbers.textContent = `Lista elementów to: ${listToDo.length}`
    }
}

const resetList = (e) => {
    console.log('reset');
    listToDo.length = 0;
    ul.innerHTML = ''
    e.target.remove()
    divNumbers.textContent = ''
}
// el1.addEventListener('click', addElement)
// NASLUCHIWANIE
form.addEventListener('submit', addElement);



// input.addEventListener('click', inputContain)
////


/*
1. dodac liczbe dodan;
2. dodac przycik usun i ustawic nasluchiwanie. Po nasluchiwanie usunac dany elemnt (tworzyc od nowa liste
    )
3. wyszkiwarka;
4; porownanie z samurajem kurla

*/