const squere = document.createElement('div');
document.body.appendChild(squere);

let grow = true; //flaga

let size = 100; //wielkość kwadratu
squere.style.width = size + "px";
// 100 + "px" -> "100" + "px" -> "100px"
squere.style.height = size + "px";

//maksymlana wielkość kwadratu
//window.innerWidth * 0.5

window.addEventListener("scroll", function () {
    // size = size + 10;


    if (size >= window.innerWidth / 2) {
        grow = !grow;
    }


    if (grow) {
        size += 5
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    } else {
        size -= 5
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }


})