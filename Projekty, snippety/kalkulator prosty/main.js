const input1 = document.getElementById("kalk1");
const input2 = document.getElementById("kalk2");
const btn = document.getElementById("btn");
const divResult = document.getElementById("result");
const btnO = document.getElementById("btnO");
const btnpm = document.getElementById("btnPm");
const btnpd = document.getElementById("btnPd");

const add = function(e) {
  e.preventDefault();
  let resPlus = parseFloat(input1.value) + parseFloat(input2.value);
  divResult.textContent = resPlus;
  input1.value = "";
  input2.value = "";
};
const odejmij = function(e) {
  e.preventDefault();
  let resPlus = parseFloat(input1.value) - parseFloat(input2.value);
  divResult.textContent = resPlus;
  input1.value = "";
  input2.value = "";
};
const pomnoz = function(e) {
  e.preventDefault();
  let resPlus = parseFloat(input1.value) * parseFloat(input2.value);
  divResult.textContent = resPlus;
  input1.value = "";
  input2.value = "";
};
const podziel = function(e) {
  e.preventDefault();
  let resPlus = parseFloat(input1.value) / parseFloat(input2.value);
  divResult.textContent =
    resPlus.toFixed(2) +
    "(" +
    resPlus.toFixed(3)[resPlus.toFixed(3).length - 1] +
    ")";
  input1.value = "";
  input2.value = "";
};

console.log(input1.value);
btn.addEventListener("click", add);
btnO.addEventListener("click", odejmij);
btnpm.addEventListener("click", pomnoz);
btnpd.addEventListener("click", podziel);
