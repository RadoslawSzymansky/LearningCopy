// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony



const colorChanger = function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let parzX = x / 2 == (x / 2).toFixed();
    let parzY = y / 2 == (y / 2).toFixed();
    console.log(x, y, parzX, parzY)
    // intrukcje warunkkowe
    if (parzX & parzY) {
        document.body.style.backgroundColor = 'red'
    } else if (!parzY, !parzX) {
        document.body.style.backgroundColor = 'blue';


    } else {
        document.body.style.backgroundColor = 'green'
    }

}
document.body.addEventListener('click', colorChanger)