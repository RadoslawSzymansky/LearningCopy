import React from "react";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import Join from "../pages/Join";
import Joined from "../components/Joined";
import { Route, Switch } from 'react-router-dom'
import "../styles/Page.scss"
const Page = () => {
    return (
        <div className="page">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/AboutUs' component={AboutUs} />
                <Route path='/Join' component={Join} />
                <Route path='/joinSucces' component={Joined} />
                <Route component={ErrorPage}></Route>
            </Switch>
        </div>
    )
}
export default Page