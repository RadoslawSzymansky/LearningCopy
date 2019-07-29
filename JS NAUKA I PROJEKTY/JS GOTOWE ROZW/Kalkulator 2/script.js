console.log('ok')
const buttons = document.querySelectorAll('.calc > div:not(:first-child');
const INPUT = document.querySelector('input');
const SPAN = document.querySelector('input + span');
const H1 = document.querySelector('#progress');
const H2 = document.querySelector('#result');

function calculate() {
    if (INPUT.value.length > 0) {
        console.log('licze juz w funkcji');
        const a = parseInt(H1.textContent);
        const b = parseInt(INPUT.value);
        let result = 0;
        switch (SPAN.textContent) {
            case "/":
                result = (a / b);
                Number.isInteger(result) ? null : result = result.toFixed(2);
                break;
            case "-":
                result = a - b;
                break;
            case "+":
                result = a + b;
                break;
            case "*":
                result = a * b;
                break;
        }
        SPAN.textContent = ""
        INPUT.value = '';
        H1.textContent = ""
        H2.textContent = `Wynik to ${result}`;
    }

}


function setToInput() {
    let btnSign = this.textContent;


    this.className == "number" ? INPUT.value += btnSign : null;
    if (SPAN.textContent.length >= 1 && this.textContent != "=") {
        return
    }
    if (this.className !== "number") {

        btnSign != "=" && INPUT.value.length > 0 ? SPAN.textContent = btnSign : null;
        if (btnSign == "=" && SPAN.textContent.length > 0 && H1.textContent.length > 0) {
            calculate()
            return
        }
        btnSign !== "=" ? H1.textContent = INPUT.value : null;
        INPUT.value = ''

        return

    }

};
buttons.forEach(button => {
    button.addEventListener('click', setToInput);
})