import React from "react"
import { NavLink } from "react-router-dom"
import '../styles/Navbar.scss'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <NavLink className="navbar-brand" to="/" tabIndex="-1" aria-disabled="true">Klub Olsztyn</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/" tabIndex="-1" aria-disabled="true">Strona główna</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/AboutUs" tabIndex="-1" aria-disabled="true">O nas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Join" tabIndex="-1" aria-disabled="true">Dołącz do nas!</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar