import * as React from "react";
import './style.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footers/AdminFooter";
import {Container} from "reactstrap";


export default class LayoutContainer extends React.Component {
    render () {
        return  <div>
            <Sidebar />
            <div className="main-content" ref="mainContent">

                {this.props.children}
                <Container fluid>
                    <Footer/>
                </Container>
            </div>
        </div>
    }
}
