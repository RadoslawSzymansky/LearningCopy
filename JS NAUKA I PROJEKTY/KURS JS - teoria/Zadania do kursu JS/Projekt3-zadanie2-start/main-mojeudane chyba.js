let size = 10;
let orderElement = 1;

const init = () => {
    let btn = document.createElement('button');
    let btnNew = document.body.appendChild(btn);
    btnNew.textContent = ('Dodaj 10 elemtów listy');
    //
    let ul = document.createElement('ul');
    let ulNew = document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements)
}

const createLiElements = () => {
    let ulNew = document.querySelector('ul')
    let liList = document.querySelectorAll('li').length
    for (i = 0; i <= 9; i++) {
        liList++
        let li = document.createElement('li');
        let liNew = ulNew.appendChild(li);
        liNew.textContent = 'element nr:' + liList
        liNew.style.fontSize = liList + 10 + 'px'
    }





}

init()