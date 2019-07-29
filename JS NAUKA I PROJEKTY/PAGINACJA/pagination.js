// console.log('smig')
const DOM = {
    divPag: document.querySelector(".pagination"),
    ul: document.querySelector(".recipes ol")
};
// obj data for the downloaded data
const data = [];
// creating and retunong li
const creatiLi = function(obj) {
    return `              
      <li>${obj.nome} <span class="author">${obj.codigo}</span></li>
    `;
};
// creating button
const createButton = function(page, type) {
    if (type == "next") {
        var arrow = "right";
        page = page + 1;
    }
    if (type == "prev") {
        var arrow = "left";
        page = page - 1;
    }
    return `
    <button class="${type}" data-type="prev" data-page="${page}">
        <i class="fas fa-arrow-${arrow}"></i>
         Page 
         <span class="page">${page}</span>
    </button>
    `;
};
// rednering, shwoing of the UI li
const renderLi = obj => {
    const html = creatiLi(obj);
    DOM.ul.insertAdjacentHTML("beforeend", html);
};
// rendering showing buttons
const renderButtons = (page, resultsNum, resultsPerPage) => {
    DOM.divPag.innerHTML = "";
    // zwroci najmniejsza liczbe callkowite np 3.9 zwroci 3
    const pages = Math.ceil(resultsNum / resultsPerPage);
    let button;
    // jezeli pierwsza strona ale stron jest wiecej niz jeden to wsywietl button do nast strony
    if (page === 1 && pages > 1) {
        button = createButton(page, "next");
    } else if (page < pages) {
        // jezeli stron jest wiecej niz 1  ale strona jest mniejsza niz ilosc stron
        button = `${createButton(page, "prev")}${createButton(page, "next")}`;
    } else if (page === pages && pages > 1) {
        // gdy ostatnia strons tylko button wstedcz
        button = createButton(page, "prev");
    }
    DOM.divPag.insertAdjacentHTML("afterbegin", button);
};

/// download api
const res = new XMLHttpRequest();
res.open("GET", "https://parallelum.com.br/fipe/api/v1/carros/marcas");
res.send();
res.addEventListener("load", function() {
    response = JSON.parse(res.responseText);
    for (let i = 0; i < 30; i++) {
        data.push(response[i]);
    }
    renderResults(data);
    DOM.divPag.addEventListener("click", function(e) {
        if (e.target.dataset.type) {
            console.log(e.target);
            var page = parseInt(e.target.dataset.page);
            renderResults(data, page);
        }
    });
});

const renderResults = (data, page = 1, resPerPage = 10) => {
    console.log(data, page);
    DOM.ul.innerHTML = "";
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    data.slice(start, end).forEach(renderLi);
    renderButtons(page, data.length, resPerPage);
};
