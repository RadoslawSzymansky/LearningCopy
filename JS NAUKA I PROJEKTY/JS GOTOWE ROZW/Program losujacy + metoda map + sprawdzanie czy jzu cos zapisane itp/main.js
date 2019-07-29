const input = document.querySelector('input');
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnRule = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1')
const userAdvices = [];
//functions//
const addAdvice = (e) => {
    e.preventDefault();
    if (input.value.length) {
        console.log('input wiekszy niz zero')

        if (userAdvices.length > 0) {
            for (let i = 0; i < userAdvices.length; i++) {
                if (userAdvices[i] == input.value) {
                    alert('nie oszukuj');
                    return
                }
            }
            userAdvices.push(input.value)
        } else {
            userAdvices.push(input.value)

        }
        input.value = "";
        h1.textContent = ''
    }
}
const removeAdvicec = (e) => {
    e.preventDefault();
    userAdvices.length = 0;
    h1.textContent = ""
}
const showAdvice = () => {
    advice = userAdvices[Math.floor(Math.random() * userAdvices.length)];
    console.log(advice)
    userAdvices.length ? h1.textContent = advice : alert('Nie podales zadnych mozliwosci!');
}
const showOptions = () => {
    advice = userAdvices[Math.floor(Math.random * userAdvices.length)];
    userAdvices.length ? null : alert('Nie podales zadnych mozliwosci!');
    if (userAdvices.length) {
        textContener = userAdvices.map(e => e);
        textContener.forEach(element => {
            h1.innerHTML += `<li>${element}</li>`

        });
    }

}

// events // 
btnAdd.addEventListener('click', addAdvice);
btnClean.addEventListener('click', removeAdvicec);
btnRule.addEventListener('click', showAdvice);
btnShowOptions.addEventListener('click', showOptions);