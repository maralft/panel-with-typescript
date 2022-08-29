import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "./assets/css/index.css";
import "./assets/vendor/nucleo/css/nucleo.css"
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";
import {configAjaxious} from "./Services/init";
import LayoutContainer from "./Pages/Layout";
import Routes from "./boot/Router";

configAjaxious();


let token;
token = localStorage.getItem("token");

ReactDOM.render(
    token ? <BrowserRouter>
            <LayoutContainer>
                <Routes/>
            </LayoutContainer>
        </BrowserRouter> :
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);