import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css"
import img1 from "../images/Livello_4.png"
import img2 from "../images/Livello_5.png"
import img3 from "../images/Livello_6.png"

const Header = () => {
    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * images.length)
    const img = images[index]
    return (
        <>
            {/* Switch poowoduje ze pierwszy ktory pasuje sie wykona a jak zaden to ostatni */}
            <Switch>
                {/* render to zamiast component, czyli komponent  bezposrednio */}
                <Route exact path="/" render={() => (
                    <img src={img1} alt="miasto"></img>
                )}>
                </Route>
                <Route exact path="/produkty" render={() => (
                    <img src={img2} alt="miasto"></img>
                )}>
                </Route>
                <Route exact path="/kontakt" render={() => (
                    <img src={img3} alt="miasto"></img>
                )}>
                </Route>
                <Route exact path="/admin" render={() => (
                    <img src={img1} alt="miasto"></img>
                )}>
                </Route>
                <Route exact render={() => (
                    <img src={img3} alt="miasto"></img>
                )}>
                </Route>
            </Switch>
            {/* <img src={img} alt="city" /> */}
        </>
    )
}
export default Header