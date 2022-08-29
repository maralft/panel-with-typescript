import * as React from "react";
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Navbar,
    Nav,
    Container,
    Media,
} from "reactstrap";

import {Link} from "react-router-dom";

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
};


interface State {
    profile: {
        name?: string;
        email?: string;
        mobile?: string;
        profilePicture?: string;
        id?: number;
    }
}

interface Props {
    user : any
}


class AdminNavbar extends React.Component<Props, State> {

    constructor(props: Props) {
        let currentUser;
        try {
            const userData = localStorage.getItem('user');
            if (userData)
                currentUser = JSON.parse(userData);
        } catch {
        }

        super(props);
        this.state = {
            profile: {
                name: currentUser && currentUser.name,
                email: currentUser && currentUser.email,
                mobile: currentUser && currentUser.searchParams,
                profilePicture: currentUser && currentUser.profilePicture,
                id: currentUser && currentUser.id,
            },
        };
    }

  render() {
        const {user} = this.props;
    return (
      <div>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid className="directionRTL">
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
            </Link>
            <Nav className="d-none d-md-flex" navbar >
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                     <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                          {user ? user.firstName + ' ' + user.lastName : user.mobileNumber}
                      </span>
                     </Media>

                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("../../assets/img/things/verified-user.svg")}
                      />
                    </span>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" left>
                  <DropdownItem className="noti-title text-center" header tag="div">
                    <h6 className="text-overflow m-0">خوش اومدید!</h6>
                  </DropdownItem>
                  <DropdownItem to="/user-management" tag={Link} className="text-right">
                    <i className="ni ni-single-02" />
                    <span> حساب کاربری من </span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link} className="text-right">
                    <i className="ni ni-settings-gear-65" />
                    <span> تنظیمات </span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link} className="text-right">
                    <i className="ni ni-calendar-grid-58" />
                    <span> فعالیت </span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link} className="text-right">
                    <i className="ni ni-support-16" />
                    <span> پشتیبانی </span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={() => logout()} className="text-right">
                    <i className="ni ni-user-run" />
                    <span>خروج از حساب</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AdminNavbar;
