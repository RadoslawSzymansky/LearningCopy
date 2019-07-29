// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 


const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Dzień Dobry', 'Jak leci?', 'Zaczynajmy...']
let counter = 0;
let j = 0;
let i = 0;
// Implementacja
const addLetter = () => {
    // addding letters
    spnText.textContent += txt[i][j];
    j++;
    // check if the word is finished
    if (txt[i].length <= j) {
        // increase word (j) and reset letter (i)
        i++;
        j = 0;
        // check if its over of the words, array elements
        if (txt.length <= i) {
            console.log('koniec')
            return
        }
        /// its not over so delay the word chaning 
        return setTimeout(() => {
            spnText.textContent = "";
            console.log('zmiana slowa1');
            addLetter()

        }, 900)

    }
    // this is adding letter if nothing stop function before
    setTimeout(addLetter, 100)
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);