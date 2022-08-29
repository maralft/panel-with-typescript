import * as React from "react";
import Header from "../../components/Headers/Header";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

class Categories extends React.Component {


    _renderCategories = () =>{
        return <Row className="space-bottom-1">

            <Col xl="4">
                <Card className="shadow">
                    <CardHeader className="bg-transparent">
                        <Row className="align-items-center">
                            <div className="col text-right">
                                <h6 className="text-uppercase text-muted ls-1 mb-1">
                                 ایجاد دسته بندی
                                </h6>
                                <h2 className="mb-0">...</h2>
                            </div>
                        </Row>
                    </CardHeader>
                    <CardBody>


                    </CardBody>
                </Card>
            </Col>


            <Col xl="8">
                <Card className="shadow">
                    <CardHeader className="bg-transparent">
                        <Row className="align-items-center">
                            <div className="col text-right">
                                <h6 className="text-uppercase text-muted ls-1 mb-1">
                                    ایجاد دسته بندی
                                </h6>
                                <h2 className="mb-0">...</h2>
                            </div>
                        </Row>
                    </CardHeader>
                    <CardBody>


                    </CardBody>
                </Card>
            </Col>
        </Row>
    };

    _renderReport = () =>{
        return <Row className="space-bottom-1">

            <Col xl="4">
                <Card className="shadow">
                        <span>Col1</span>
                </Card>
            </Col>

            <Col xl="4">
                <Card className="shadow">
                    <span>Col1</span>
                </Card>
            </Col>

            <Col xl="4">
                <Card className="shadow">
                    <span>Col1</span>
                </Card>
            </Col>
        </Row>
    };

    render () {
        return  <div>
                <Header user={{}} showBlock={false}/>

            <Container className="mt--7" fluid>

                {this._renderCategories()}

            </Container>
        </div>
    }
}

export {Categories}