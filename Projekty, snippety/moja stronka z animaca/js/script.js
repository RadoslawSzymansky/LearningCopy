console.log('Hello world')
const btn = document.querySelector('.aleft a');
const burger = document.querySelector('.fas.fa-bars');
const menuBurger = document.querySelector('div.menu');
const span1 = document.querySelector('span.counter');
btn.addEventListener('click', function () {

    btn.classList.toggle('active')
})
// window.addEventListener('scroll', function () {

//     console.log('pozycja skrola to ' + window.scrollY.toFixed() + ' px')

// })
burger.addEventListener('click', function () {

    menuBurger.classList.toggle('active')
    burger.classList.toggle('active')

})

window.addEventListener('scroll', function () {
    const counter = window.scrollY.toFixed();

    span1.textContent = 'Pozycja skrola to ' + counter + ' px'

})