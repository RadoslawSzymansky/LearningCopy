// Data object with slides
const slideList = [
    {
        img: "images/img1.jpg",
        text: "Pierwszy tekst"
    },
    {
        img: "images/img2.jpg",
        text: "Drugi tekst"
    },
    {
        img: "images/img3.jpg",
        text: "Trzeci tekst"
    }
];
// DOM objects
const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];
// Interfejs , Settings
const time = 2000;
let active = 0;

// Implementation
function changeDot() {
    // looking for active slide
    const dotActive = dots.findIndex(dot => {
        return dot.classList.contains("active");
    });
    // removing fromm the active dot class active
    dots[dotActive].classList.remove("active");
    // adding class active to active dot
    dots[active].classList.add("active");
}
// Finding index of active dot , removing it and giving to new one
function changeSlide() {
    //  checking if the active is longer than slides. if yes change it to start
    if (active >= slideList.length) {
        active = 0;
    }
    console.log(active);

    // changing slides
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    // incresing active
    active++;
}
// starting slideer and setting first interval

changeSlide();
let indexSet = setInterval(changeSlide, time);

// changing slider by user
const keyChangeSlide = e => {
    // if want to decrease
    if (e.keyCode == 37) {
        // if active = 1 (not 0 because changeSlide is always increasing) so at the beginning first slide
        if (active == 1) {
            active = 2;
        } else {
            // if other so second or longer
            // -2 because changeSlide is always doing +1
            active -= 2;
        }
    }

    if (e.keyCode == 37 || e.keyCode == 39) {
        // clearing interval to stop changing and reset
        clearInterval(indexSet);
        // starting again to see change at the moment. this is why i dont have to do active ++ new check, because change slide is doing it alwways;
        changeSlide();
        // staring new interval to restart sliding
        indexSet = setInterval(changeSlide, time);
    }
};
// chaning by clicking dot //
function changeByDot(e) {
    // clearing interval
    clearInterval(indexSet);
    // finding index of clicked dot
    newIndex = dots.findIndex(dot => Boolean(dot.id == e.target.id));
    // setting active to new index
    active = newIndex;
    // staring slide
    changeSlide();
    indexSet = setInterval(changeSlide, time);
}
// event for chaning slider by user
window.addEventListener("keydown", keyChangeSlide);
dots.forEach(dot => {
    dot.addEventListener("click", changeByDot);
});

// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
