import * as React from "react";
import {Container, Row, Col, NavLink, Button} from "reactstrap";
import {NavLink as NavLinkRRD} from "react-router-dom";

interface Props {
    name : string;
}

class UserHeader extends React.Component<Props> {

  render() {
      const {name} = this.props;
    return <div
          className="header pb-3 pt-5 pt-lg-5 align-items-center"
          style={{
            minHeight: "250px",
            backgroundImage:
              "url(" + require("../../assets/img/things/bg3.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />

          <Container className="align-items-center directionRTL" fluid>
            <Row>
                <Col >
                    <h1 className="text-white text-right">{name !==' ' && name ? name : '...'}</h1>
                </Col>
               <Col className="row justify-content-end text-right">

                   <Row>
                       <Col>
                           <div>
                               <Button color="info"  outline type="button" >
                                   تایید کاربر
                               </Button>
                           </div>
                       </Col>

                       <Col>
                           <div>
                               <Button color="success"  outline type="button" onClick={()=>console.log('dd')}>
                                   ذخیره تغییرات
                               </Button>
                           </div>
                       </Col>

                       <Col>
                           <NavLink
                               to={'/user-management'} key={'userManagement'}
                               tag={NavLinkRRD}
                               activeClassName="active"
                           >
                               <i className="fas fa-arrow-left text-white" style={{fontSize : 20 ,marginTop : 10}}/>
                           </NavLink>
                       </Col>

                   </Row>

              </Col>
            </Row>
          </Container>
        </div>;
   }
}

export default UserHeader;
