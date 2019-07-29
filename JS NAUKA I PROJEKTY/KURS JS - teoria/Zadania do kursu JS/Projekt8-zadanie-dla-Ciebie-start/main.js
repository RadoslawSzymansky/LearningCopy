// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'dekst2', 'sekst3aa']
let index = 0;
let stringIndex = 0
// Implementacja
const addLetter = () => {

    spnText.textContent += txt[index][stringIndex]
    stringIndex++

    if (stringIndex === txt[index].length) {


        index++;
        if (index === txt.length) return;

        return setTimeout(() => {
            stringIndex = 0;
            spnText.textContent = ''
            addLetter()
        }, 1000)

    }

    setTimeout(addLetter, 100);
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);