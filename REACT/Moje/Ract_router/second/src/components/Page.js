import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import Kontakt from "../pages/Kontakt"
import Admin from "../pages/Admin"
import Produkty from "../pages/Produkty"
import ListaProduktow from "../pages/ListaProduktow"
import ErrorPage from "../pages/ErrorPage"
import Login from "../pages/Login"
const Page = () => {
    return (
        <>
            <Switch>
                {/* kazdy component lub np render przekazuje tam propsa z danymi roznmi */}
                <Route path="/" exact component={Home} />
                <Route path="/produkty" component={ListaProduktow} />
                <Route path="/kontakt" component={Kontakt} />
                {/* { : - i to co po nim daje znac zeby wszystkie co jest po product jest prawda, i to id bedzie zmienione na url /id w obiekcie props.mact zobacz } */}
                <Route path="/product/:id" component={Produkty} />
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    )
}
export default Page