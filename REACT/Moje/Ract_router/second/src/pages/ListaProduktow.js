import React from "react"
import { Link } from "react-router-dom"
import "../styles/ListaProduktow.css"
const products = ["bike", "car", "boat"]
const ListaProduktow = () => {
    const links = products.map((prod => (
        <li key={prod}><Link to={`/product/${prod}`}>{prod}</Link></li>
    )))

    return (
        <div className="products">
            <h2>Lista produktow</h2>
            <ul>{links}</ul>
        </div>
    )
}
export default ListaProduktow