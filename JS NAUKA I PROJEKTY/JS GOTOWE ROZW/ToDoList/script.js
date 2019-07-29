const btnAdd = document.getElementById("btnAdd");
const input = document.querySelector(".inputAdd");
const ul = document.querySelector("#list");
let startList = ["Porzadek", "Pranie", "Zakupy"];
startList.forEach(e => {
  return (ul.innerHTML += `<li>${e}</li>`);
});
const deleteMe = (i, e) => {
  let value = e.target.value;
  e.target.parentNode.remove();
  startList.splice(value, 1);
  ul.innerHTML = "";
  startList.forEach((e, i) => {
    ul.innerHTML += `<li>${e} <button value=${i}>Usun</button></li>`;
  });
  document.querySelectorAll("ul button").forEach(e => {
    return e.addEventListener("click", deleteMe.bind(this, e));
  });
};
// funckje
addToList = e => {
  e.preventDefault();

  if (input.value) {
    startList.push(input.value);
    let copyList = startList;
    ul.innerHTML = "";
    copyList.forEach((e, i) => {
      ul.innerHTML += `<li>${e} <button value=${i}>Usun</button></li>`;
    });
    document.querySelectorAll("ul button").forEach(e => {
      return e.addEventListener("click", deleteMe.bind(this, copyList));
    });
    input.value = "";
  }
};

btnAdd.addEventListener("click", addToList);
