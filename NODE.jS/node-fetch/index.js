const fetch = require('node-fetch');
// 1 zadania. odpalae za pomoca np node index.js rok
// // co wpisujemy? np tak:
// // procces.argv // wszzytskie argumenty wpisywane przy otwieraniu programu w tablicy
// const year = process.argv[2] || Math.floor(Math.random() * 2020)
// fetch(`http://numbersapi.com/${year}/year?json`)
//     .then(res => res.json())
//     .then(data => console.log(data.text))
//     .catch(err => console.log("Error: ", err))
//------                  --------------------- 
// -------------- 2 czesc
// http://numbersapi.com/${number}/{type}?json`
// odpalane za pomoca: node app.js --type=2000 czyli year=2000
// const arg = process.argv[2]
// let type = ""
// if (arg.indexOf("--year") === 0) {
//     type = "year"
// } else if (arg.indexOf("--math") === 0) {
//     type = "math"
// } else if (arg.indexOf("--trivia") === 0) {
//     type = "trivia"
// }
// const equalSign = arg.search('=') // zwrava index gdzie znalazla lub -1
// if (equalSign === -1) console.log('Nie wpisales liczby')
// const number = arg.slice(equalSign + 1);
// if (number === "" || isNaN(number)) {
//     console.log("Nie prawidlowicza liczba");
//     process.exit()
// }
// fetch(`http://numbersapi.com/${number}/${type}?json`)
//     .then(res => {
//         if (res.ok) {
//             return res.json()
//         } else {
//             throw new Error("cos nie tak" + res.status)
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log("Error: ", err))

//------                  --------------------- 
// -------------- 3 czesc
/// NBP .. instalujemy request
// http://api.nbp.pl/api/exchangerates/rates/a/${code}/

const fs = require('fs');
const request = require('request');

const validCodes = ['usd', 'gbp', 'eur', 'chf', 'nok']

const code = process.argv[2]

const isValid = validCodes.find(currency => currency === code) ? true : false;

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;
request(url, {
    json: true
}, (err, res, body) => {
    if (err) {
        return console.log(`Error ${err}`)
    }
    if (res.statusCode !== 200) {
        return console.log('error', res.statusCode)
    }
    const message = `Średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} złotych`
    fs.appendFile('currencies.txt', message + '\n', (err) => {
        console.log('dane dodane do pliku currecies')
    })
    console.log(message)
})