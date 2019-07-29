// function number(start = 0) {
//     let counter = start;

//     function closureA(x) {
//         // w tej funcki musi byc refenrencja do tej zmiennej
//         // return x = counter++ //
//         // mozna tez tu napisac zamiast tego co ma sie dziac osrazu:
//         document.body.textContent = `liczba: ${counter++}`
//     }
//    // closureA(); ?? czy trzebba wywolaC?
//     return closureA
// }

// const closure = number();
// const closurefrom3 = number(3); // tu jak chcecmy zaby start byl inny


// document.addEventListener('click', function () {
//     // document.body.textContent = (`licznik: ${closure()}`)
//     // tu jak bys chcual odniesc sie do x
//     // console.log(closure(3));
//     closure()
// })

// 


// function counter() {
//     counter2 = 0; // to ta zmienne inkrementujemy !! to do niej sie odwoluje , w funckji ponijej jest tylko referencja!

//     function keeper() {
//         document.body.textContent = `${counter2++} sekund`
//     }
//     return keeper
// }
// //  jak ponizej to oby dwie odwoluja sie i zmieniaja ta same liczbe!
// // tylko 1 wywolac zeby dzialaja poprawnie
// const changeState = counter();
// const p = counter()
// setInterval(changeState, 1000);
// setInterval(p, 1000);

// // dokladnie widac jak sie to ponizejj wlaczy:
// // document.addEventListener("click",
// //     function () {
// //         setInterval(p, 1000);
// //     })