// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 


const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Dzień Dobry', 'Jak leci?', 'Zaczynajmy...']
let counter = 0;
let j = 0;

// Implementacja
const addLetter = () => {
    // set the interval of set which is printing letter
    let inter = setInterval(first, 150);
    if (j >= txt.length) {
        // if its over of the text array finish interval of first
        return clearInterval(inter);
    }

    function first() {
        // print letter
        spnText.textContent += txt[j][counter];
        ++counter;
        // if its finish of letters in word:
        if (counter >= txt[j].length) {
            counter = 0;
            // increase j to get to next element of array with text
            j++;
            // delay the clean function for seeing word
            function clean() {
                j <= txt.length - 1 ? spnText.textContent = "" : null
            }
            setTimeout(clean, 900)
            // clear interval and start function again
            clearInterval(inter);
            // start function one more time
            setTimeout(addLetter, 1000)
        }
    }
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
