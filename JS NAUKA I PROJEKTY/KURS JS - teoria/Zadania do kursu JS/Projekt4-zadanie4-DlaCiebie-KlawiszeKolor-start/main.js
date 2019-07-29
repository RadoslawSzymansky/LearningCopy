/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  let getUp = e.keyCode

  switch (getUp) {
    case 38:nb 

      red++;
      green++;
      blue++;
      break;
    case 40:
      red--;
      green--;
      blue--;
      break;
  }


}

// if (e.keyCode == 38) {
//   console.log('hello', );
//   red++;
//   green++;
//   blue++
// }

// if (e.keyCode == 40) {
//   console.log('bye')
//   red--;
//   green--;
//   blue--;
// }

// 38 - strzałka do góry
// 40 - strzalka w dół

// wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
//tutaj twój kod
// wersja 1 - instrukcja if
// wersja 2 - instrukcja switch



window.addEventListener('keydown', changeColor)