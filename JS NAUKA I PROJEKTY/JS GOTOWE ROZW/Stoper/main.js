const txtHolder = document.querySelector('.time div');
const btnReset = document.querySelector('.reset');
const btnStart = document.querySelector('.main');
let flag = false;
//functions
const startStopeWork = () => {
    time = (start += 0.01).toFixed(2)
    txtHolder.textContent = String(time)
}
//
let indexInter = "";
start = 0;
const startStoper = () => {
    flag = !flag
    const currentDate = new Date();
    btnStart.textContent = flag ? 'Stop' : 'Start';
    const miliSec = currentDate.getTime() / 1000;
    indexInter = flag ? setInterval(startStopeWork, 10) : clearInterval(indexInter)
};
const resetStoper = () => {
    txtHolder.textContent = "- - -"
    clearInterval(indexInter)
    start = 0;
    btnStart.textContent = 'Start';
    flag = false;

}
// events
btnStart.addEventListener('click', startStoper);
btnReset.addEventListener('click', resetStoper);