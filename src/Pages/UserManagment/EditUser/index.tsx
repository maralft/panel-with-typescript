import * as React from "react";
import UserHeader from "../../../components/Headers/UserHeader";
import {Card, CardBody, CardHeader, Col, Container, Form, Row} from "reactstrap";
import {InputComponent} from "../../../components/Form/InputComponent";
import Ajaxious from "ajaxious";


interface Props {
    match : any
}

interface State {
    isLoading : boolean;
    message : string;
    errors : Errors;
    user : User
}

interface User {
    firstName: string;
    lastName: string;
    fatherName: string;
    mobileNumber : string;
    nationalCode: string;
    shNumber: string;
    shSerialNumber: string;
    birthDate: string;
    branchName: string;
    accountNumber: string;
    shabaNumber : string;
    bankBranch : string;
    provinceName : string;
    cityName: string;
    address : string;
    shCommentsPictureFileName : string;
    shPictureFileName: string;
    nationCardPictureFileName: string;
}

interface Errors {
    firstName: boolean;
    lastName: boolean;
    fatherName: boolean;
    mobileNumber : boolean;
    nationalCode: boolean;
    shNumber: boolean;
    shSerialNumber: boolean;
    birthDate: boolean;
    branchName: boolean;
    accountNumber: boolean;
    shabaNumber : boolean;
    bankBranch : boolean;
    provinceName : boolean;
    cityName: boolean;
    address : boolean;
    shCommentsPictureFileName : boolean;
    shPictureFileName: boolean;
    nationCardPictureFileName: boolean;
}

class EditUser extends React.Component<Props,State> {


    constructor(props: Readonly<Props>) {
        super(props);
        this.state={
            isLoading : false,
            message : '',
            user : {
                 firstName: '',
                 lastName: '',
                 fatherName: '',
                 mobileNumber : '',
                 nationalCode: '',
                 shNumber: '',
                 shSerialNumber: '',
                 birthDate: '',
                 branchName: '',
                 accountNumber: '',
                 shabaNumber : '',
                 bankBranch : '',
                 provinceName : '',
                 cityName: '',
                 address : '',
                 shCommentsPictureFileName : '',
                 shPictureFileName: '',
                 nationCardPictureFileName: ''
            },
            errors : {
                 firstName: false,
                 lastName: false,
                 fatherName: false,
                 mobileNumber : false,
                 nationalCode: false,
                 shNumber: false,
                 shSerialNumber: false,
                 birthDate: false,
                 branchName: false,
                 accountNumber: false,
                 shabaNumber : false,
                 bankBranch : false,
                 provinceName : false,
                 cityName: false,
                 address : false,
                 shCommentsPictureFileName : false,
                 shPictureFileName: false,
                 nationCardPictureFileName: false
            }
        };
        this._getUser(this.props.match.params.id);
    }


    _getUser = (id : number) => {

        Ajaxious.get(`user/${id}`).then(res => {
            if (res.status === 200) {
                this.setState({user : res.data})
            }
        });
    };

    _onChangeInput = (name : string ,value :  any) =>{
        this.setState({user : {...this.state.user,[name] : value}});
    };

    render () {

        const {user,errors} = this.state;
        return  <div>
            <UserHeader name={user.firstName + ' ' + user.lastName}/>
            <Container className="mt--7" fluid >

                <Row>
                    <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                        <Card className="bg-secondary shadow">

                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center  directionRTL text-right">
                                    <h3 className="mb-0 mx-2">اطلاعات حساب بانکی</h3>
                                </Row>
                            </CardHeader>

                            <CardBody>
                                <Form className="directionRTL">
                                    <h6 className="heading-small text-muted mb-4 text-right">
                                        اطلاعات کاربر
                                    </h6>

                                    <div className="pl-lg-4 text-right directionRTL">

                                        <Row>
                                            <Col lg="6">
                                                <InputComponent maxLength={30} value={user.branchName} invalid={errors.branchName} name={'branchName'} label={'نام بانک'} placeholder={'نام بانک'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={' نام بانک نمی تواند خالی باشد'}/>
                                            </Col>

                                            <Col lg="6">
                                                <InputComponent maxLength={30} value={user.bankBranch} invalid={errors.bankBranch} name={'bankBranch'} label={' شعبه بانک'} placeholder={'شعبه بانک'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'  شعبه بانک نمی تواند خالی باشد'}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <InputComponent maxLength={13} value={user.accountNumber} invalid={errors.accountNumber} name={'accountNumber'} label={'شماره حساب'} placeholder={'شماره حساب'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'شماره حساب نمی تواند خالی باشد'}/>

                                            </Col>

                                            <Col lg="6">

                                                <InputComponent maxLength={24} value={user.shabaNumber} invalid={errors.shabaNumber} name={'shabaNumber'} label={'شماره شبا'} placeholder={'شماره شبا'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'شماره شبا نمی تواند خالی باشد'}/>
                                            </Col>
                                        </Row>
                                    </div>


                                    <hr className="my-4" />

                                    <h6 className="heading-small text-muted mb-4 text-right">
                                        آدرس کاربر
                                    </h6>

                                    <div className="pl-lg-4 text-right directionRTL">

                                        <Row>
                                            <Col lg="6">

                                                <InputComponent maxLength={30} value={user.provinceName} invalid={errors.provinceName} name={'provinceName'} label={'استان'} placeholder={'استان'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'استان نمی تواند خالی باشد'}/>

                                            </Col>
                                            <Col lg="6">
                                                <InputComponent maxLength={30} value={user.cityName} invalid={errors.cityName} name={'cityName'} label={'شهرستان'} placeholder={'شهرستان'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'شهرستان نمی تواند خالی باشد'}/>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col md="12">
                                                <InputComponent type={'textarea'} maxLength={300} value={user.address} invalid={errors.address} name={'address'} label={'آدرس کامل'} placeholder={'آدرس کامل'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'آدرس کامل نمی تواند خالی باشد'}/>
                                            </Col>
                                        </Row>

                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">

                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center  directionRTL text-right">
                                    <h3 className="mb-0 mx-2">حساب کاربری</h3>
                                </Row>
                            </CardHeader>

                            <CardBody>
                                <Form className="directionRTL">
                                    <h6 className="heading-small text-muted mb-4 text-right">
                                        اطلاعات کاربر
                                    </h6>

                                    <div className="pl-lg-4 text-right directionRTL">
                                        <Row>
                                            <Col lg="3">

                                                <InputComponent maxLength={30} value={user.firstName} invalid={errors.firstName} name={'firstName'} label={'نام'} placeholder={'نام'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'نام  نمی تواند خالی باشد'}/>

                                            </Col>
                                            <Col lg="3">
                                                <InputComponent maxLength={30} value={user.lastName} invalid={errors.lastName} name={'lastName'} label={'نام خانوادگی'} placeholder={'نام خانوادگی'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'نام خانوادگی  نمی تواند خالی باشد'}/>

                                            </Col>
                                            <Col lg="3">
                                                <InputComponent maxLength={30} value={user.fatherName} invalid={errors.fatherName} name={'fatherName'} label={' نام پدر'} placeholder={' نام پدر'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={' نام پدر خانوادگی  نمی تواند خالی باشد'}/>
                                            </Col>
                                            <Col lg="3">
                                                <InputComponent maxLength={11} value={user.mobileNumber} invalid={errors.mobileNumber} name={'mobileNumber'} label={' شماره موبایل'} placeholder={'شماره موبایل'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={' شماره موبایل نمی تواند خالی باشد'} disabled={true}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="3">
                                                <InputComponent maxLength={10} value={user.shNumber} invalid={errors.shNumber} name={'shNumber'} label={'شماره شناسنامه'} placeholder={'شماره شناسنامه'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'شماره شناسنامه نمی تواند خالی باشد'}/>
                                            </Col>
                                            <Col lg="3">
                                                <InputComponent maxLength={6} value={user.shSerialNumber} invalid={errors.shSerialNumber} name={'shSerialNumber'} label={'سریال شناسنامه'} placeholder={'سریال شناسنامه'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'سریال شناسنامه نمی تواند خالی باشد'}/>
                                            </Col>
                                            <Col lg="3">
                                                <InputComponent maxLength={10} value={user.nationalCode} invalid={errors.nationalCode} name={'nationalCode'} label={'شماره ملی'} placeholder={'شماره ملی'} fontAwesome={'fas fa-mobile-alt'}
                                                                onChange={(e : any) => this._onChangeInput(e.target.name , e.target.value)} exceptionMessage={'شماره ملی نمی تواند خالی باشد'}/>
                                            </Col>
                                            <Col lg="3">

                                            </Col>
                                        </Row>
                                    </div>

                                    <hr className="my-4" />

                                    <h6 className="heading-small text-muted mb-4 text-right">
                                        مدارک کاربر
                                    </h6>


                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </Container>

        </div>
    }
}

export {EditUser}