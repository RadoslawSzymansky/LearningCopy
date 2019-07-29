// VARIABLES
const BTN_INPUT_F = document.getElementById("inputF");
const BTN_INPUT_C = document.getElementById("inputC");
const PAR_WEATHER = document.getElementById("ok");
// // CHECK STATE OUTSIDE
// function checkState(fahr, celc) {
//     if (fahr < 32 || celc < 0) {
//         PAR_WEATHER.textContent =
//             "Uważaj na czarny lód!  Ubierz czapkę, szalik i rękawiczki!";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(74, 177, 236), rgb(255, 255, 255), rgb(48, 177, 236))";
//         PAR_WEATHER.style.animation = "hot 2s 2";
//     } else if ((fahr >= 32 && fahr < 59) || (celc >= 0 && celc < 15)) {
//         PAR_WEATHER.textContent = "Jest chłodno, lepiej ubierz płaszcz.";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(158, 232, 241), rgb(255, 255, 255), rgb(175, 220, 250))";
//     } else if ((fahr >= 60 && fahr < 86) || (celc >= 15 && celc < 30)) {
//         PAR_WEATHER.textContent = "Możesz wyjść w krótkim rękawie! :)";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(238, 171, 139), rgb(248, 255, 125), rgb(248, 255, 143))";
//     } else {
//         PAR_WEATHER.textContent = "Upał, zabierz ze sobą butelkę wody!!";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(245, 99, 80), rgb(248, 248, 248), rgb(243, 61, 61))";
//         PAR_WEATHER.style.animation = "hot 2s 2";
//     }
// }

// // CHANGING TEMPERATUE FROM C TO F
// function change(e) {
//     PAR_WEATHER.style.animation = "";
//     var type = this.id !== "inputF" ? "Fahrenheita" : "Celsjusza";
//     var result = window.prompt(`Podaj temperaturę w stopniach ${type}`);
//     var temp = parseFloat(result);
//     //
//     if (isNaN(temp)) {
//         return console.log("Wpisz prawidłową wartość!");
//     } else {
//         var tempFahr = temp;
//         var tempCelc = temp;
//         if (e.target.id == "inputC") {
//             tempCelc = (temp - 32) / 1.8;
//             tempCelc = parseFloat(tempCelc).toFixed(2);
//         } else {
//             tempFahr = temp * 1.8 + 32;
//             tempFahr = parseFloat(tempFahr).toFixed(2);
//         }
//         checkState(tempFahr, tempCelc);
//         let degreeSign = e.target.id == "inputC" ? "C" : "F";
//         let degree = e.target.id == "inputC" ? tempCelc : tempFahr;
//         document.querySelector(
//             "h1"
//         ).innerHTML = `Zmieniona temperatura to:  ${degree} <sup>o</sup> ${degreeSign}`;
//     }
// }

// //  EVENTS

// BTN_INPUT_F.addEventListener("click", change);
// BTN_INPUT_C.addEventListener("click", change);;

// OBIEKTOWO! da sie to ulepszyc
// function TempChanger(button) {
//     this.button = button;
//     button.addEventListener('click', this.change.bind(this))
// }
// TempChanger.prototype.change = function (e) {
//     PAR_WEATHER.style.animation = "";
//     var type = this.id !== "inputF" ? "Fahrenheita" : "Celsjusza";
//     var result = window.prompt(`Podaj temperaturę w stopniach ${type}`);
//     var temp = parseFloat(result);
//     //
//     if (isNaN(temp)) {
//         return console.log("Wpisz prawidłową wartość!");
//     } else {
//         var tempFahr = temp;
//         var tempCelc = temp;
//         if (e.target.id == "inputC") {
//             tempCelc = (temp - 32) / 1.8;
//             tempCelc = parseFloat(tempCelc).toFixed(2);
//         } else {
//             tempFahr = temp * 1.8 + 32;
//             tempFahr = parseFloat(tempFahr).toFixed(2);
//         }
//         console.log(this)
//         this.checkState.call(tempFahr, tempCelc);
//         let degreeSign = e.target.id == "inputC" ? "C" : "F";
//         let degree = e.target.id == "inputC" ? tempCelc : tempFahr;
//         document.querySelector(
//             "h1"
//         ).innerHTML = `Zmieniona temperatura to:  ${degree} <sup>o</sup> ${degreeSign}`;
//     }
// }
// TempChanger.prototype.checkState = function (fahr, celc) {
//     if (fahr < 32 || celc < 0) {
//         PAR_WEATHER.textContent =
//             "Uważaj na czarny lód!  Ubierz czapkę, szalik i rękawiczki!";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(74, 177, 236), rgb(255, 255, 255), rgb(48, 177, 236))";
//         PAR_WEATHER.style.animation = "hot 2s 2";
//     } else if ((fahr >= 32 && fahr < 59) || (celc >= 0 && celc < 15)) {
//         PAR_WEATHER.textContent = "Jest chłodno, lepiej ubierz płaszcz.";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(158, 232, 241), rgb(255, 255, 255), rgb(175, 220, 250))";
//     } else if ((fahr >= 60 && fahr < 86) || (celc >= 15 && celc < 30)) {
//         PAR_WEATHER.textContent = "Możesz wyjść w krótkim rękawie! :)";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(238, 171, 139), rgb(248, 255, 125), rgb(248, 255, 143))";
//     } else {
//         PAR_WEATHER.textContent = "Upał, zabierz ze sobą butelkę wody!!";
//         document.body.style.backgroundImage =
//             "linear-gradient(90deg, rgb(245, 99, 80), rgb(248, 248, 248), rgb(243, 61, 61))";
//         PAR_WEATHER.style.animation = "hot 2s 2";
//     }
// }

// const btnFahr = new TempChanger(BTN_INPUT_F);
// const btnCelc = new TempChanger(BTN_INPUT_C);
// console.log(btnFahr, btnCelc)

/// proba zrobie jednego obiektu prototpyu
function TempChanger(button) {
    this.button = button;
}
TempChanger.prototype = {
    // PAMIETAC O KOCTRUKTORZE!
    constructor: TempChanger,
    addListener: function() {
        this.button.addEventListener("click", this.change.bind(this));
    },
    change: function() {
        PAR_WEATHER.style.animation = "";
        var type = this.button.id !== "inputF" ? "Fahrenheita" : "Celsjusza";
        var result = window.prompt(`Podaj temperaturę w stopniach ${type}`);
        var temp = parseFloat(result);
        //
        if (isNaN(temp)) {
            return console.log("Wpisz prawidłową wartość!");
        } else {
            var tempFahr = temp;
            var tempCelc = temp;
            if (this.button.id == "inputC") {
                tempCelc = (temp - 32) / 1.8;
                tempCelc = parseFloat(tempCelc).toFixed(2);
            } else {
                tempFahr = temp * 1.8 + 32;
                tempFahr = parseFloat(tempFahr).toFixed(2);
            }
            this.checkState.call(tempFahr, tempCelc);
            let degreeSign = this.button.id == "inputC" ? "C" : "F";
            let degree = this.button.id == "inputC" ? tempCelc : tempFahr;
            document.querySelector(
                "h1"
            ).innerHTML = `Zmieniona temperatura to:  ${degree} <sup>o</sup> ${degreeSign}`;
        }
    },
    checkState: function(fahr, celc) {
        if (fahr < 32 || celc < 0) {
            PAR_WEATHER.textContent =
                "Uważaj na czarny lód!  Ubierz czapkę, szalik i rękawiczki!";
            document.body.style.backgroundImage =
                "linear-gradient(90deg, rgb(74, 177, 236), rgb(255, 255, 255), rgb(48, 177, 236))";
            PAR_WEATHER.style.animation = "hot 2s 2";
        } else if ((fahr >= 32 && fahr < 59) || (celc >= 0 && celc < 15)) {
            PAR_WEATHER.textContent = "Jest chłodno, lepiej ubierz płaszcz.";
            document.body.style.backgroundImage =
                "linear-gradient(90deg, rgb(158, 232, 241), rgb(255, 255, 255), rgb(175, 220, 250))";
        } else if ((fahr >= 60 && fahr < 86) || (celc >= 15 && celc < 30)) {
            PAR_WEATHER.textContent = "Możesz wyjść w krótkim rękawie! :)";
            document.body.style.backgroundImage =
                "linear-gradient(90deg, rgb(238, 171, 139), rgb(248, 255, 125), rgb(248, 255, 143))";
        } else {
            PAR_WEATHER.textContent = "Upał, zabierz ze sobą butelkę wody!!";
            document.body.style.backgroundImage =
                "linear-gradient(90deg, rgb(245, 99, 80), rgb(248, 248, 248), rgb(243, 61, 61))";
            PAR_WEATHER.style.animation = "hot 2s 2";
        }
    }
};

const btnFahr = new TempChanger(BTN_INPUT_F);
const btnCelc = new TempChanger(BTN_INPUT_C);

console.log(btnFahr.addListener(), btnCelc.addListener());
