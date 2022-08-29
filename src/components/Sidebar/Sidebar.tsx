import * as React from "react";
import { NavLink as NavLinkRRD,Link} from "react-router-dom";

import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";


class Sidebar extends React.Component<{}> {
  state = {
    collapseOpen: false
  };
  // verifies if routeName is the one active (in browser input)

  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };

  render() {
    const {logo } : any = this.props;

    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-right navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              />
            </NavbarBrand>
          ) : null}
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav className="nav-link-icon">
                <i className="ni ni-bell-55" />
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="navbar-default_dropdown_1"
                className="dropdown-menu-arrow"
                right
              >
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require('../../assets/img/things/logo.png')}
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen} className="directionRTL text-right">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>


              <div className="row">
                      <p style={{marginTop : 8}} className="font-weight-bold">پنل مدیریتی تسلیم به خدا</p>
              </div>

            <Nav className="mb-md-3" navbar >


                <hr className="my-3" />

                <NavItem key={'userManagement'}>
                    <NavLink
                        to={'/userManagement'}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className="ni ni-single-02 text-primary" />
                        مدیریت کاربران
                    </NavLink>
                </NavItem>

                <NavItem key={'categories'}>
                    <NavLink
                        to={'categories'}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className="ni ni-bullet-list-67 text-primary" />
                       ایجاد دسته بندی
                    </NavLink>
                </NavItem>


                <NavItem key={'transaction'}>
                    <NavLink
                        to={'transaction'}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className="ni ni-books text-primary" />
                        آپلود فیلم
                    </NavLink>
                </NavItem>


                <NavItem key={'invest'}>
                    <NavLink
                        to={'invest'}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className="ni ni-ambulance text-primary" />
                        آپلود صدا
                    </NavLink>
                </NavItem>

                <NavItem key={'report'}>
                    <NavLink
                        to={'report'}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className="ni ni-chart-pie-35 text-primary" />
                        آپلود PDF
                    </NavLink>
                </NavItem>

            </Nav>

          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Sidebar;
