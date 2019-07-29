import React from "react"
import { Route } from "react-router-dom"
const Footer = () => {
    return (
        <div>
            <h2> stopka</h2>
            <p>
                <Route path="/" exact render={(props) => {
                    console.log(props);
                    return (
                        <span>Jestes na stronie glownej</span>
                    )
                }}>
                </Route>
                <Route path="/:page" exact render={(props) => {
                    console.log(props);
                    return (
                        // {ten pparams to z :page, czyli wszystko co po / dopuszczalne a w params  dostajemy info rozne np wlasnie o  :page}
                        <span>Jestes na stronie  {props.match.params.page}</span>
                    )
                }}>
                </Route>
                <Route path="/:page/:idProduct" exact render={(props) => {
                    console.log(props);
                    return (
                        // {ten pparams to z :page, czyli wszystko co po / dopuszczalne a w params  dostajemy info rozne np wlasnie o  :page}
                        <span>Jestes na stronie  {props.match.params.page}</span>
                    )
                }}>
                </Route>

            </p>
        </div>
    )
}
export default Footer