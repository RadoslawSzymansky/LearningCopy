// const div = document.querySelector('.container')
// const inputSearch = document.querySelector('.search')
// const cities = [];
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// // POBIERANIE DANYCH Z ENDPOINT
// fetch(endpoint)
//     .then(blob => blob.json())
//     .then(data => cities.push(...data))

// console.log(cities)
// // MOJ SPOSOOB NA WYSIWTELANIE
// function ifContains(el) {
//     el.contains
// }

// function searchForCity(e) {
//     div.innerHTML = "";
//     text = e.target.value.toLowerCase();

//     let newArr = cities.filter(el => el.city.toLowerCase().includes(text));
//     console.log(newArr)
//     string = ""
//     newArr.forEach(e => {
//         string += `<div> Nazwa: ${e.city} , Populacja: ${e.population}`
//     })
//     div.innerHTML = string;
// };
// inputSearch.addEventListener('input', searchForCity)
// ///




const div = document.querySelector('.container')
const inputSearch = document.querySelector('.search')
const cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// POBIERANIE DANYCH Z ENDPOINT
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

console.log(cities)

function searchForCity(e) {
    div.innerHTML = "";
    text = e.target.value.toLowerCase();

    let newArr = cities.filter(el => el.city.toLowerCase().includes(text));
    console.log(newArr)
    string = ""
    html = newArr.map(el => {
        return `
      <li>City: ${el.city}, Population: ${el.population}</li>
      `
    }).join("")
    div.innerHTML = html;
};
inputSearch.addEventListener('input', searchForCity)
///