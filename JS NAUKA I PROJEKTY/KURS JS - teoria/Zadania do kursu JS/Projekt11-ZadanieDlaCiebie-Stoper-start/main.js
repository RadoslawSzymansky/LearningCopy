// http://websamuraj.pl/examples/js/projekt11/
// http://websamuraj.pl/examples/js/projekt11/
const divTime = document.querySelector('.time div');
const btnReset = document.querySelector('button.reset');
const btnStart = document.querySelector('button.main');


let timeUp = 0.00
let flag = true

let i = 1
let letStart = function () {

    if (flag) {
        let okok = function () {
            timeUp += 0.01;
            divTime.textContent = timeUp.toFixed(2)
            btnStart.textContent = 'Pauza'
        }
        setInterval(okok, 10);
        flag = !flag

    } else {
        clearInterval(i++),
            flag = !flag
        btnStart.textContent = 'Start'



    }
    console.log('ok')

}







btnStart.addEventListener('click', letStart)

btnReset.addEventListener('click', function () {
    if (flag) {
        divTime.textContent = '= = ='

    }
    timeUp = 0
})