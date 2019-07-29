const btns = [...document.getElementsByClassName("btn-show")];
const add2section = document.getElementById("add2");
const download = document.querySelector("[class=download]");

let addClass = e => {
  let pos = download.offsetTop;
  window.scroll(0, pos);
};

btns.forEach(e => e.addEventListener("click", addClass));

document.getElementById("showmore").addEventListener("click", function(e) {
  if (!add2section.classList.contains("active")) {
    add2section.classList.add("active");
    document.getElementById("showmore").innerText = "Ukryj";
    return;
  }
  if (add2section.classList.contains("active")) {
    console.log("jest klasa wiec usuwam");
    add2section.classList.remove("active");
    document.getElementById("showmore").innerHTML =
      "<button id='showmore'>Show more <br><span>^</span></button>";

    return;
  }
});
