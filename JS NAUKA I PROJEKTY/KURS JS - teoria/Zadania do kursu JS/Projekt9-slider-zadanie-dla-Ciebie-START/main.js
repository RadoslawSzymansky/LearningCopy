// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/

const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
let time = 3000;
let active = 0;

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');

}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
// let dupa = setInterval(changeSlide, time)

setInterval(changeSlide, time)

let inter = 0

function keyChangeSlide(e) {

    inter++
    clearInterval(inter)
    setInterval(changeSlide, time)



    if (e.which === 37) {

        if (active > 0) {
            active--
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()

            console.log(active, '1')


        } else if (active === 0) {

            console.log(active, '0')

            active += dots.length - 1

            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()


        }
    }


    if (e.which === 39) {

        if (active == dots.length - 1) {
            active = 0
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()

            console.log(active, '1')

        } else if (active >= 0) {

            console.log(active, '0')

            active++

            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()



        }
    }




}

window.addEventListener('keydown', keyChangeSlide);