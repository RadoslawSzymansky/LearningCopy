const btn = document.querySelectorAll("button");
const input = document.querySelector("input");
const add = document.querySelectorAll("button");
const pers = document.getElementById("ok");
const clicked = e => {
  const click = e.target.textContent;
  input.value += click;
};
let input1 = 0;
let flag = true;
const calcFunction = e => {
  if (e.target.textContent == "+" && flag === true) {
    input1 += parseFloat(input.value);
    input.value = null;
    flag = !flag;
    console.log(true);
    pers.textContent = input1;
  } else if (flag === false) {
    console.log("dodaje false");
    input1 += parseFloat(input.value);
    flag = !flag;
  }
  if (e.target.textContent == "-") {
    console.log("odejmuje");
    input1 = input1 - parseFloat(input.value);
    input.value = 0;
  }
};

for (i = 0; i < 9; i++) {
  btn[i].addEventListener("click", clicked);
}
for (i = 9; i < 14; i++) {
  add[i].addEventListener("click", calcFunction);
}
