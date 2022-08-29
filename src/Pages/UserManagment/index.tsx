import * as React from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    Table,
    Container,
    Row, Col,
} from "reactstrap";
import {Spin, Icon} from 'antd';
import {RowUser} from "./RowUser";
import Header from "../../components/Headers/Header";
import Ajaxious from "ajaxious";
import { Pagination} from "antd";
import {DetailUser} from "./DetailUser";


const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;


interface SortStatus {
    asc : boolean;
    desc : boolean;
}

interface Sort {
    firstName : SortStatus;
    mobileNumber : SortStatus;
    userStatus : SortStatus;
    totalWealth : SortStatus;
}

interface State {
    isLoading: boolean;
    list: any [];
    sort : Sort;
    sortRequest : string;
    userModal : boolean;
    pagination : {
        pageNumber : number ;
        pageSize : number
    };
    userID : number;
    totalPages : number;
    userAdmin : any;
    user : any;
}


class UserManagement extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: true,
            userModal : false,
            userID : 61,
            totalPages : 3,
            userAdmin : {},
            user : {},
            sortRequest : '',
            sort : {
                firstName : {
                    asc : false,
                    desc : false
                },
                mobileNumber : {
                    asc : false,
                    desc : false
                },
                userStatus : {
                    asc : false,
                    desc : false
                },
                totalWealth : {
                    asc : false,
                    desc : false
                }
            },
            pagination : {
                pageNumber : 0,
                pageSize : 5,
            },
            list: []
        };

        this._getUsers();
        this._getUserAdmin();
    }

    _getUserAdmin = () => {
        Ajaxious.get(`user/info`).then(res => {
            if (res.status === 200) {
                this.setState({userAdmin : res.data})
            }
        });
    };

    _getUsers = () => {
        const {pagination,sortRequest} = this.state;
        const bodyRequest = {
            filters: [],
            pageNumber: pagination && pagination.pageNumber,
            pageSize: pagination && pagination.pageSize,
            sort : sortRequest
        };
        Ajaxious.post(`user/grid`, bodyRequest).then(res => {
            this.setState({isLoading: false});
            if (res.status === 200) {
                this.setState({ list: res.data.data,totalPages : res.data.totalPages});
            }
        });
    };

    _getUser = (id : number) => {
        Ajaxious.get(`user/${id}`).then(res => {
            if (res.status === 200) {
                this.setState({...this.state,user : res.data,userModal : true})
            }
        });
    };

    _renderTable() {
        const {list} = this.state;

        if (list.length !== 0)
            return list.map((user: any, index: number) => {
                return <RowUser key={index.toString()} user={user} index={index} userID={(userID : number)=>this._getUser(userID)}/>
            });
        return <tr>
            <td/>
            <td/>
            <td/>
            <img
                alt="..." width="40%" height="40%" className="space-top-2"
                src={require("../../assets/img/things/search.svg")}
            />
        </tr>;

    }


    private _renderPagination() {
        const {pagination, totalPages} = this.state;
        if (!pagination)
            return;

        return <Pagination current={pagination.pageNumber + 1} pageSize={pagination.pageSize}
                           total={totalPages * parseInt(String(pagination.pageSize))}
                           className="pagination-table"
                           onChange={(page : number) => {
                               pagination.pageNumber = page -1;
                               this._getUsers();
                           }}/>
    }

    _handelChangeSelectRow = ( value : number) => {
        const {pagination} = this.state;
        pagination.pageSize = value;
        this._getUsers();
    };

    private _SelectNumberRowTable = () =>{
        return  <Row>
                  <Col>
                      <select className="custom-select custom-select-sm mb-2" style={{direction: 'rtl'}}
                              onChange={(e: any) => this._handelChangeSelectRow(e.target.value)}>
                          <option value={5} defaultChecked>{'۵'}</option>
                          <option value={10} >{'۱۰'}</option>
                          <option value={15} >{'۱۵'}</option>
                          <option value={20} >{'۲۰'}</option>
                          <option value={30} >{'۳۰'}</option>
                      </select>
                  </Col>
                  <Col><span>تعداد سطر</span></Col>
            </Row>
    };

    _cardFooter = () => {
        return <CardFooter className="py-4">
            <nav aria-label="...">
                <Row>
                    <Col md="2">
                        {this._SelectNumberRowTable()}
                    </Col>
                    <Col md="10">
                        {this._renderPagination()}
                    </Col>
                </Row>
            </nav>
        </CardFooter>
    };


    _handSortable = (column : string) =>{

        this.setState({...this.state,sortRequest : ''},()=>{
            switch (column) {
                case 'firstName' :
                    this.setState({...this.state,sort : {
                            ...this.state.sort,
                            mobileNumber : {
                                asc : false,
                                desc : false
                            },
                            userStatus : {
                                asc : false,
                                desc : false
                            },
                            totalWealth : {
                                asc : false,
                                desc : false
                            }
                        }},()=>{
                        this._submitSort('firstName');
                    });
                    break;
                case 'mobileNumber' :
                    this.setState({...this.state,sort : {
                            ...this.state.sort,
                            firstName : {
                                asc : false,
                                desc : false
                            },
                            userStatus : {
                                asc : false,
                                desc : false
                            },
                            totalWealth : {
                                asc : false,
                                desc : false
                            }
                        }},()=>{
                        this._submitSort('mobileNumber');
                    });
                    break;
                case 'userStatus' :
                    this.setState({...this.state,sort : {
                            ...this.state.sort,
                            firstName : {
                                asc : false,
                                desc : false
                            },
                            mobileNumber : {
                                asc : false,
                                desc : false
                            },
                            totalWealth : {
                                asc : false,
                                desc : false
                            }
                        }},()=>{
                        this._submitSort('userStatus');
                    });
                    break;
                case 'totalWealth' :
                    this.setState({...this.state,sort : {
                            ...this.state.sort,
                            firstName : {
                                asc : false,
                                desc : false
                            },
                            mobileNumber : {
                                asc : false,
                                desc : false
                            },
                            userStatus : {
                                asc : false,
                                desc : false
                            },
                        }},()=>{
                        this._submitSort('totalWealth');
                    });
                    break;
            }
        });
    };

    _submitSort = (name : string) =>{
        const {sort} = this.state;
        let sortMessage  : string = '' ;
        if(!sort[name].asc && !sort[name].desc){
            sort[name].asc = true;
            sortMessage = `${name} asc`;
            this.setState({sortRequest : sortMessage},()=>{this._getUsers()});
        }else if(sort[name].asc && !sort[name].desc){
            sort[name].asc = false;
            sort[name].desc = true;
            sortMessage = `${name} desc`;
            this.setState({sortRequest : sortMessage},()=>{this._getUsers()});
        }else if(!sort[name].asc && sort[name].desc){
            sort[name].asc = false;
            sort[name].desc = false;
            this.setState({sortRequest : ''},()=>{this._getUsers()});
        }


    };

    public render() {
        const {isLoading,sort,userModal,user,userAdmin} = this.state;
        return (
            <div className="main-content ">
                <Header user={userAdmin} showBlock={true}/>
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <div className="row directionRTL">
                                        <h3 className="mb-0 text-right" style={{marginRight: 10}}>لیست کاربران</h3>


                                    </div>

                                </CardHeader>

                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light text-dark">
                                    <tr>
                                        <th scope="col">
                                             <span className="thead-text">ردیف</span>
                                        </th>
                                        <th scope="col">
                                            <span className="thead-text">نام کاربر</span>
                                            <a onClick={()=>this._handSortable('firstName')}>
                                                <i className={sort.firstName.desc ? 'fas fa-caret-up sort-icon-active' : 'fas fa-caret-up sort-icon-di-active'}/>
                                                <i className={sort.firstName.asc ? 'fas fa-caret-down sort-icon-active' : 'fas fa-caret-down sort-icon-di-active'}/>
                                            </a>
                                        </th>
                                        <th scope="col">
                                                <span className="thead-text">شماره موبایل</span>
                                                <a onClick={()=>this._handSortable('mobileNumber')}>
                                                    <i className={sort.mobileNumber.desc ? 'fas fa-caret-up sort-icon-active ' : 'fas fa-caret-up sort-icon-di-active'}/>
                                                    <i className={sort.mobileNumber.asc ? 'fas fa-caret-down sort-icon-active ' : 'fas fa-caret-down sort-icon-di-active'}/>
                                                </a>
                                        </th>
                                        <th scope="col">
                                            <span className="thead-text">وضعیت کاربر</span>
                                            <a onClick={()=>this._handSortable('userStatus')}>
                                                <i className={sort.userStatus.desc ? 'fas fa-caret-up sort-icon-active ' : 'fas fa-caret-up sort-icon-di-active'}/>
                                                <i className={sort.userStatus.asc ? 'fas fa-caret-down sort-icon-active ' : 'fas fa-caret-down sort-icon-di-active'}/>
                                            </a>
                                        </th>
                                        <th scope="col"><span className="thead-text">شماره ملی</span></th>
                                        <th scope="col">
                                            <span className="thead-text">خالص دارایی<span className="text-gray font-size-xx-small"> (ریال) </span></span>
                                            <a onClick={()=>this._handSortable('totalWealth')}>
                                                <i className={sort.totalWealth.desc ? 'fas fa-caret-up sort-icon-active ' : 'fas fa-caret-up sort-icon-di-active'}/>
                                                <i className={sort.totalWealth.asc ? 'fas fa-caret-down sort-icon-active ' : 'fas fa-caret-down sort-icon-di-active'}/>
                                            </a>
                                        </th>
                                        <th scope="col"><span className="thead-text">تاریخ ثبت نام کاربر</span></th>
                                        <th scope="col"/>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {isLoading ?
                                        <tr>
                                            <td/>
                                            <td/>
                                            <td/>
                                            <td>
                                                <Spin indicator={antIcon} className="space-top-2 space-bottom-2"/>
                                            </td>
                                        </tr> :
                                        this._renderTable()
                                    }
                                    </tbody>
                                </Table>

                                {this._cardFooter()}
                            </Card>
                        </div>
                    </Row>

                </Container>

                <DetailUser userModal={userModal} user={user} closeModal={()=>this.setState({userModal : false})}/>
            </div>
        );
    }

}

export {UserManagement}

