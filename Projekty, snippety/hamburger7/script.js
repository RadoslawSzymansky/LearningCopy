console.log('działa')
const button = document.querySelectorAll('.arrow');

const button2 = document.querySelectorAll('.yes');

button.addEventListener('click', function () {
    button2.classList.toggle('on');


})