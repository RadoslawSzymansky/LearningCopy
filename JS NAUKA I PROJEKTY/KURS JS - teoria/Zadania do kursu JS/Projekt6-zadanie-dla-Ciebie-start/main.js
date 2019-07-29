const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const input = document.querySelector('input');
const optionsArray = []
const h1 = document.querySelector('h1')

const addOption = (e) => {
    e.preventDefault();

    if (input.value.length > 0) {

        for (names of optionsArray) {
            if (names === input.value) {
                alert('juz jest');
                return
            }
        }


        const newOption = input.value;
        console.log('ok', newOption);
        optionsArray.push(newOption);
        alert('Dodałeś nowa możliwosc: ' + newOption)
        input.value = '';

    }

}

function resetArray() {
    optionsArray.length = 0
};

function showAdvices() {
    alert('Twoje mozliwosci to: ' + optionsArray)
}

function showYouAdvice() {
    if (optionsArray.length > 0) {
        const indexArray = Math.floor((Math.random() * optionsArray.length));
        const youChoice = optionsArray[indexArray]

        console.log(optionsArray[indexArray])
        h1.textContent = '' + youChoice;
    }
}


btnAdd.addEventListener('click', addOption);
btnReset.addEventListener('click', resetArray);
btnShowOptions.addEventListener('click', showAdvices);
btnShowAdvice.addEventListener('click', showYouAdvice);