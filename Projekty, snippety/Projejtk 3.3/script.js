console.log("dzialam");
const btnMenuUl = document.getElementById("handleOnMenu");
const btnMenuLi = document.getElementById("handleOffMenu");

btnMenuLi.addEventListener("click", function() {
  console.log("dzialam2");
  btnMenuUl.classList.toggle("active");
  if (btnMenuUl.classList.contains("active")) {
    return (btnMenuLi.innerHTML = `<a href="#">Zwiń Menu</a>`);
  } else if (!btnMenuUl.classList.contains("active")) {
    return (btnMenuLi.innerHTML = `<a href="#">Menu</a>`);
  }
});
