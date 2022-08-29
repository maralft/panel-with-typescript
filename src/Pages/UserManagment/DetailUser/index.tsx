import * as React from "react";

import {
    Button, Card, CardBody, CardHeader, Col,
    Modal, NavLink, Row,
} from "reactstrap";
import {NavLink as NavLinkRRD} from "react-router-dom";
import Ajaxious from "ajaxious";


interface Props {
    userModal : boolean;
    closeModal : () => void;
    user : any;
}

interface State {

}

class DetailUser extends React.Component<Props,State> {


    constructor(props: Readonly<Props>) {
        super(props);
    }


    _activateUser = ( userID : number) =>{
        if(userID)
            Ajaxious.get(`user/activate/${userID}`).then(res  =>{
                if(res.status === 200){
                    this.props.closeModal()
                }
            })



    };

    _renderSingleImage = () =>{
        return <div className="row">
                      <div className="col-sm-4 mb-3">
                  <a className="js-fancybox u-media-viewer"
                     data-caption="Front in frames - image #01"
                     data-speed="700">

                </a>
                          <span className="font-size-small">تصویر کارت ملی</span>
            </div>

            <div className="col-sm-4 mb-3">
                <a className="js-fancybox u-media-viewer"
                   data-caption="Front in frames - image #01"
                   data-speed="700">

                </a>
                <span className="font-size-small">تصویر صفحه اول شناسنامه</span>
            </div>

            <div className="col-sm-4 mb-3">
                <a className="js-fancybox u-media-viewer"
                   data-caption="Front in frames - image #01"
                   data-speed="700">

                </a>
                <span className="font-size-small">تصویر صفحه توضیحات شناسنامه</span>
            </div>
        </div>
    };

    render () {
        const {userModal,closeModal,user} = this.props;

        return <Modal
            className="modal-dialog-centered"
            isOpen={userModal}
            toggle={() => closeModal()}
        >

            <div className="mt--7" >
                <Card className="card-profile shadow">
                    <Row className="justify-content-center">
                        <Col className="ordeto={`/edit-user/${user.id}`}r-lg-2" lg="3">
                            <div className="card-profile-image">
                                <a  onClick={e => e.preventDefault()}>

                                </a>
                            </div>
                        </Col>
                    </Row>

                    <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        <div className="d-flex justify-content-between">

                            <NavLink
                                to={`/edit-user/${user.id}`}
                                tag={NavLinkRRD}
                            >
                                <Button
                                    size="sm"
                                    className="mr-4"
                                    color="info">
                                    <span className="btn-inner--icon">
                                        <i className="fas fa-user-edit text-white mx-1"/>
                                    </span>
                                    <span>ویرایش کاربر</span>
                                </Button>
                            </NavLink>


                            <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => closeModal()}
                            >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                    </CardHeader>

                    <CardBody className="pt-0 pt-md-4">

                        <div className="text-center">
                            <h3>
                                {user.firstName ? user.firstName : 'نام وارد نشده'} {' '}{user.lastName}
                            </h3>
                            <div className="h5 font-weight-300">
                                <i className="ni location_pin mr-2" />
                               {user.city && user.city.name}
                            </div>

                            <div className="h5 font-weight-300">
                                {user.totalWealth}{'ریال '}
                            </div>

                            <Row>
                                <div className="col">
                                    <div className="row card-profile-stats justify-content-center ">
                                        <div>
                                            <span className="heading">{user.fatherName}</span>
                                            <span className="description">نام پدر</span>
                                        </div>
                                        <div>
                                            <span className="heading">{27}</span>
                                            <span className="description">سن</span>
                                        </div>
                                        <div>
                                            <span className="heading">{user.mobileNumber}</span>
                                            <span className="description">موبایل</span>
                                        </div>
                                        <div>
                                            <span className="heading">{user.investmentMethod && user.investmentMethod.name}</span>
                                            <span className="description">وضعیت سبد</span>
                                        </div>
                                    </div>
                                </div>
                            </Row>

                            <Row>
                                <div className="col">
                                    <div className="row card-profile-stats justify-content-center">
                                        <div>
                                            <span className="heading">{user.shNumber}</span>
                                            <span className="description">ش.شناسنامه</span>
                                        </div>
                                        <div>
                                            <span className="heading">{'433565'}</span>
                                            <span className="description">ش.سریال</span>
                                        </div>
                                        <div>
                                            <span className="heading">{user.nationalCode}</span>
                                            <span className="description">ش.ملی</span>
                                        </div>
                                    </div>
                                </div>
                            </Row>


                            <hr className="my-4" />

                            {this._renderSingleImage()}

                            <Button color="primary" outline type="button" onClick={()=>this._activateUser(user.id)}>
                                تایید کاربر
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>

        </Modal>
    }
}

export {DetailUser}
