function race(a, b, g) {
    // your code
    var aspeed = 720;

}

// function downPik() {
//     return new Promise(function(resolve, reject) {
//         var res = new XMLHttpRequest();
//         res.open("GET", "https://pokeapi.co/api/v2/ability/150/");
//         res.send();
//         res.addEventListener("load", function() {
//             if (this.status === 200) {
//                 resolve(res.response);
//             } else {
//                 reject({
//                     status: this.status,
//                     statusText: res.statusText
//                 });
//             }
//         });
//     });
// }
// downPik()
//     .then(e => {
//         return JSON.parse(e);
//     })
//     .then(e => console.log(e))
//     .catch(e => console.log(e));

// nie usuwac zadanie do codewars
// function alphabet_position(str) {
//     let arr = "abcdefghijklmnopqrstuvwxyz".split("");
//     let work = [];

//     for (let i = 0; i < str.length; i++) {
//         if (!arr.some(e => str[i])) return str
//         if (arr.indexOf(str[i].toLowerCase()) !== -1) {
//             work.push(arr.indexOf(str[i].toLowerCase()) + 1)
//         } else {
//             work.push(str[i])
//         }
//     }
//     console.log(arr, work.join(" "))
// }
// console.log(alphabet_position("1"))