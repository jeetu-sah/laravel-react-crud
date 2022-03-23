import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Routes, Route,Redirect, Switch } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import CreateEmployee from "./Employee/CreateEmployee";
import ListEmployee from "./Employee/ListEmployee";
import NotFoundPage from "./NotFoundPage";
import axios from 'axios';


window.$axios = axios;



function User() {
    return (
        <>
            <Routes>
                <HeaderNav />
                    <Switch>
                        <Route path="/" exact={true} component={ListEmployee} />
                        <Route path="/employee/create" component={CreateEmployee} />

                        <Route path="*" component={NotFoundPage} />
                    </Switch>
            </Routes>
        </>
    );
}

export default User;
// DOM element
if (document.getElementById("app")) {
    ReactDOM.render(<User />, document.getElementById("app"));
}
