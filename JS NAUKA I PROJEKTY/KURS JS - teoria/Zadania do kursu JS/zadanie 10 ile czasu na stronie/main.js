let add = () => {
    let second = 0;

    let newP = document.createElement('p')
    document.body.appendChild(newP).textContent = ' '

    return () => {
        document.body.appendChild(newP).textContent = `Jesteś już ${second++} sekund na stronie`



    }

}
let nowa = add()
nowa()
setInterval(nowa, 1000)