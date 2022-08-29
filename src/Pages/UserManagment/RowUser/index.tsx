import * as React from "react";
import {
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Media, NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import {NavLink as NavLinkRRD} from "react-router-dom";
import Global from "../../../Services/global";


interface User {
    id : number;
    firstName : string;
    lastName : string;
    mobileNumber : string;
    nationalCode : string;
    userStatus : string;
    img : string;
    createdDate : string;
    totalWealth : string;
    personalPictureFileName : string;
}

interface Props {
       userID : (userID : number) => void;
       user : User,
       index : number
}

interface State {
        userModal : boolean;
}

class RowUser extends React.Component<Props,State> {


    constructor(props: Readonly<Props>) {
        super(props);
        this.state ={
            userModal : false,
        }
    }


    renderUserStatus = (userStatus : string) =>{
        switch (userStatus) {
            case 'CONFIRM_MOBILE':
                return   <Badge color="primary"><h6>{'تایید موبایل'}</h6></Badge>;
            case 'UPDATE_PROFILE' :
                return <Badge color="info"><h6>{'تکمیل پروفایل'}</h6></Badge>;
            case 'ADMIN_CONFIRM' :
                return  <Badge color="success"><h6>{'تایید شده'}</h6></Badge>;
            default :
                return  <Badge className="badge-default"><h6>{'ایجاد شده'}</h6></Badge>;
        }

    };

    render () {
        const {user,index} = this.props;
        return  <tr className="table-sm">
            <td>
                {index + 1}
            </td>
            <th scope="row">
                <Media className="align-items-center">
                    <Media>
                            <span className="mb-0 text-sm pr-3">
                                 <a onClick={() => this.props.userID(user.id)}>
                                     {user.firstName ? user.firstName : '...'}{' '}{user.lastName}
                                     </a>
                            </span>
                    </Media>
                </Media>
            </th>
            <td>{user.mobileNumber ? user.mobileNumber : '...'}</td>

            <td>
                <Badge color="" className="badge-dot mr-4">
                    {user.userStatus ? this.renderUserStatus(user.userStatus) : '-'}
                </Badge>
            </td>
            <td>{user.nationalCode ? user.nationalCode : '...'}</td>
            <td>
                <i className="fas fa-arrow-up text-success mr-3" />{" "}
                {user.totalWealth ? Global._commaSeparateNumber(user.totalWealth) : '0'}
                </td>

            <td>{user.createdDate}</td>

            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" left>
                        <DropdownItem
                            href="#pablo" className="text-right"
                            onClick={()=>{}}
                        >
                            <i className="fas fa-trash text-danger" />
                            <span className="mx-1">غیر فعال کردن کاربر</span>
                        </DropdownItem>
                        <DropdownItem
                            href="#pablo" className="text-right"
                            onClick={e => e.preventDefault()}
                        >
                            <NavItem key={'dashboard'}>
                                <NavLink
                                    to={`/edit-user/${user.id}`}
                                    tag={NavLinkRRD}
                                    activeClassName="active"
                                >
                                    <i className="fas fa-user-edit text-blue" />
                                    <span className="mx-1">ویرایش کاربر</span>
                                </NavLink>
                            </NavItem>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>


        </tr>
    }
}

export {RowUser}
