const btn = document.querySelector('button');
const li = document.querySelectorAll('li');



btn.addEventListener('click',
    function () {
        console.log('btn')
    })

let counter = 0;


let fontSizeChange = 10;

function showLi() {
    fontSizeChange += 1

    li.forEach(function (liItems) {
        liItems.style.display = 'block';
        liItems.style.fontSize = fontSizeChange + 'px';
    })
    

}






btn.addEventListener('click', showLi)