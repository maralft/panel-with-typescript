import * as React from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 1398{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://www.omidanalyzer.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                ...
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">

              <NavItem>
                <NavLink
                  href="http‌://www.about.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  درباره ما
                </NavLink>
              </NavItem>

            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
