import * as React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../Pages/Auth/Login";
import {Categories} from "../Pages/Categories";
import {UserManagement} from "../Pages/UserManagment";


let token;
token = localStorage.getItem("token");


let Routes: any;

if (token) {
    Routes = () => (
        <Switch>
            <Route path="/categories" component={Categories}/>
            <Route path="/userManagement" component={UserManagement}/>
            <Redirect from={'*'} to="/dashboard" path="/"/>
        </Switch>
    );
} else {
    Routes = () => (
        <Switch>
            <Route path="/login" component={Login}/>
            <Redirect from={'*'} to="/login" path="/"/>
        </Switch>
    );
}

export default Routes;