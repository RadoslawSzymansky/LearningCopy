import React from "react"
import { Link } from "react-router-dom"
import Product from "../components/Product"
const Produkty = ({ match }) => {
    console.log(match)
    // te match to z destrukturyzacji propsa
    return (
        <>
            <div>Strona produktu</div>
            <Product id={match.params.id}></Product>
            <Link to="/produkty">Powrot do listy</Link>

        </>
    )
}
export default Produkty