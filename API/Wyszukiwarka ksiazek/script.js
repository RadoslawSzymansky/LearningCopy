function findBooks(text) {
    return new Promise(function (resolve, reject) {
        var xml = new XMLHttpRequest()
        xml.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${text}
        `)
        xml.send();
        xml.addEventListener('load', function () {
            if (this.status === 200) {
                resolve(xml)
            } else {
                reject(new Error(this.status))
            }
        })
    })
}

function showBooksList(books) {
    console.log(books)
    booksHtml = ""
    books.forEach(book => {
        booksHtml += createBookLi(book)
    })
    document.querySelector('.booksWrapper').innerHTML = booksHtml
}

function checkBookSale(info) {
    if (info.saleability === "TRUE") return `<a href="${info.buyLink}" class="buyLink">Buy now!</a>`
    return ``
}


function createBookLi(book) {
    return `    
     <li class="book">
        <div class="img-wrap"><img class="bookCover" src="${book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail:""}" alt="${book.volumeInfo.title}"></div>
        <div class="bookInfo">
            <h3 class="title">${book.volumeInfo.title}</h3>
            <p class="publicationYear">Published <span>${book.volumeInfo.publishedDate}</span></p>
            <p class="description">${book.volumeInfo.description ? book.volumeInfo.description:"Sorry, this books seems not have description"}</p>
            <ul class="authors">
                <h3>Authors</h3>
                ${book.volumeInfo.authors?book.volumeInfo.authors.map(e=>`<li class="author">${e}</li>`).join(""): `<li class="author">No information about authors</li>`}
         </ul>
            ${checkBookSale(book.saleInfo)}
        </div>
    </li>
    `

}
document.querySelector('.booksForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let input = document.querySelector('.searchInput')
    findBooks(input.value)
        .then(resolve => JSON.parse(resolve.responseText))
        .then(e => {
            console.log(e)
            showBooksList(e.items)
        })
        .catch(error => console.log(error))
    input.value = ""
})