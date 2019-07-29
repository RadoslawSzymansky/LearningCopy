var key = "97ca053c6b3a46de84ca665d1a00b404"
var input = document.querySelector('input')


function calcCurrnecy(e) {
    e.preventDefault();
    console.dir()
    var index = e.target[1].selectedIndex
    var cur = e.target[1][index].value
    var api = fetch(`http://data.fixer.io/api/latest?access_key=${key}`)
    api.then(e => e.json()).then(e => {
        var resultInPLN = input.value * (e.rates[`${cur}`]) / (e.rates["PLN"])
        console.log(resultInPLN)
        document.querySelector(".result").textContent = input.value + "PLN" + " to  " +
            resultInPLN.toFixed(2) + cur
    })
}
document.querySelector('form').addEventListener('submit', calcCurrnecy)