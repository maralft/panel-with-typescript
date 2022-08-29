import * as React from 'react';
import Ajaxious from "ajaxious";
import {
    Button,
    Card,
    CardHeader,
    CardBody,Alert,
    Col, Container, Row,
} from "reactstrap";
import {Icon, Spin} from "antd";
import {InputComponent} from "../../../components/Form/InputComponent";
import Global from "../../../Services/global";

const antIcon = <Icon type="loading" style={{ fontSize: 24 , color : '#fff' }} spin />;

interface Props {
    storeUser ?: (e: object)=>void;
    history : any
}

interface State {
    username : string;
    password : string;
    message : string;
    isLoading ?: boolean;
    invalidUserName ?: boolean;
    invalid ?: boolean;
    emptyPassword ?: boolean;
}



class Login extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            message  : '',
            isLoading : false,
            invalid : false,
            invalidUserName : false,
            emptyPassword : false,
        }
    }

    componentDidMount() {
        document.body.classList.add("bg-default");
    }
    componentWillUnmount() {
        document.body.classList.remove("bg-default");
    }



    private _onSubmit = () => {
        const {username,password} = this.state;

        if (username !== '') {

            if(password !== ''){
                this.setState({isLoading: true});


                Ajaxious.post(`user/authenticate`,{username : username , password : password}).then(res => {
                    this.setState({isLoading: false});
                    if (res.status == 200) {
                        localStorage.setItem("token", res.data.result);
                        window.location.reload();
                    }else if(res.status === 400){
                        this.setState({invalid : true , message : res.data.message})
                    }
                })
            }else {
                this.setState({emptyPassword :  true})
            }

        } else {
            this.setState({invalidUserName : true });
        }
    };


    _onChangeInput = (name : string ,value :  any) =>{
        this.setState({...this.state,[name] : value},()=>{
            if(name === 'username')
                this.setState({invalidUserName : false});
            if(name === 'password' && this.state.emptyPassword)
                this.setState({emptyPassword : false})
        });
    };

    _renderCard = () =>{
        const {isLoading,username,password,invalidUserName,invalid,message,emptyPassword} = this.state;
        return <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0 ">

                <CardHeader className="bg-transparent pb-3 text-center">
                    <div className="text-muted text-center mt-2 mb-3">
                        <span className="text-center">
                         <span>تسلیم به خدا</span>
                       </span>
                    </div>

                    {invalid && <div><Alert color="warning">{message}</Alert></div>}
                </CardHeader>

                <CardBody className="px-lg-5 py-lg-5 directionRTL">
                    <div className="text-center text-muted mb-4">
                        <small>ورود به پنل مدیریتی </small>
                    </div>
                    <div role="form">

                        <InputComponent maxLength={11} value={username} invalid={invalidUserName} name={'username'} label={'نام کاربری'} placeholder={'نام کاربری'} fontAwesome={'fas fa-mobile-alt'}
                               onChange={(e : any) => this._onChangeInput(e.target.name , Global.farsiNumbersToEnglish(e.target.value))} exceptionMessage={'نام کاربری نمی تواند خالی باشد'}
                               onKeyDown={(key : string) => key === 'Enter' && this._onSubmit()}
                        />

                        <InputComponent type={'password'} maxLength={30} value={password} invalid={emptyPassword}  name={'password'} label={'رمز عبور'} placeholder={'رمز عبور'} fontAwesome={'fas fa-key'}
                               onChange={(e : any) => this._onChangeInput(e.target.name ,Global.farsiNumbersToEnglish(e.target.value))} exceptionMessage={'رمز عبور نمی تواند خالی باشد'}
                               onKeyDown={(key : string) => key === 'Enter' && this._onSubmit()}
                        />

                        <div className="custom-control custom-control-alternative custom-checkbox text-right">
                            <input
                                className="custom-control-input"
                                id=" customCheckLogin"
                                type="checkbox"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor=" customCheckLogin"
                            >
                                <span className="text-muted">مرا به خاطر بسپار</span>
                            </label>
                        </div>
                        <br/>

                        <div className="text-center">
                            <div className="btn-wrapper text-center">
                                <Button
                                    className={isLoading ? 'btn-neutral btn-icon bg-gradient-gray' : 'btn-neutral btn-icon'}
                                    color="default"
                                    onClick={()=>{
                                        // this._onSubmit()
                                        localStorage.setItem("token", '764549234240849546562342743439bfg0384');
                                        window.location.reload();
                                    }} disabled={isLoading}>
                                    <span className={isLoading ? 'btn-inner--text text-white' : 'btn-inner--text'}>ورود</span>
                                    <span className="btn-inner--icon">

                                        {isLoading ? <Spin indicator={antIcon} /> : <i className="fas fa-sign-in-alt"/>}

                                    </span>
                                </Button>

                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

        </Col>
    };

    public render() {
        return  <>
            <div className="main-content">
                <div className="header bg-gradient-info py-7 py-lg-8">
                    <Container>
                        <div className="header-body text-center mb-5">
                            <Row className="justify-content-center">
                                <Col lg="5" md="6">
                                    <h1 className="text-white">خوش اومدید!</h1>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-default"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </div>
                <Container className="mt--8 pb-5">
                    <Row className="justify-content-center">
                        {this._renderCard()}
                    </Row>
                </Container>
            </div>

        </>
    }

}

export {Login}

