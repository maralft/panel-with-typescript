import * as React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import AdminNavbar from "../Navbars/AdminNavbar";


interface Props {
    user : any;
    showBlock : boolean
}

class Header extends React.Component<Props> {

  render() {
    const {user,showBlock} = this.props;

    return <div className="header bg-gradient-info pb-8 pt-6 pt-md-6">

          <AdminNavbar user={user}/>

          <Container fluid>
            <div className="header-body">
                {showBlock && <Row>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                        >
                                            تعداد کاربران در ماه جاری
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                            <i className="fas fa-chart-bar" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                                    <span className="text-nowrap">از ماه گذشته</span>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                        >
                                            تعداد کل کاربران
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">
                            2,356
                          </span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                            <i className="fas fa-chart-pie" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-down" /> 3.48%
                        </span>{" "}
                                    <span className="text-nowrap">از هفته گذشته</span>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                        >
                                            حجم سرمایه جذب شده ماه جاری
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">924</span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                            <i className="fas fa-users" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" /> 1.10%
                        </span>{" "}
                                    <span className="text-nowrap">تا کنون</span>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                        >
                                            حجم سرمایه جذب شده
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">
                            49,65%
                          </span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                            <i className="fas fa-percent" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" /> 12%
                        </span>{" "}
                                    <span className="text-nowrap">تا کنون</span>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>}
            </div>
          </Container>
        </div>
    }
}

export default Header;
