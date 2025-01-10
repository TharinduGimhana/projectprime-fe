import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TfiAndroid } from "react-icons/tfi";
import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-dark section-margin-common">
      <Container>
        <Row>
          <Col
            lg={4}
            className="mb-3 d-flex align-items-start mobile-header-left  "
          >
            <div className="me-3">
              <TfiAndroid className="custom-icon-header" size={40} />
            </div>
            <div>
              <h5>Job Request</h5>
              <p>Ready to start as required 7 days a week</p>
            </div>
          </Col>
          <Col
            lg={4}
            className="mb-3 d-flex align-items-start mobile-header-middle "
          >
            <div className="me-3">
              <MdWifiCalling3 className="custom-icon-header" size={40} />
            </div>
            <div>
              <h5>Call us any time</h5>
              <p>(08) 9747 7377</p>
            </div>
          </Col>
          <Col
            lg={4}
            className="mb-3 d-flex align-items-start mobile-header-right "
          >
            <div className="me-3">
              <MdEmail className="custom-icon-header" size={40} />
            </div>
            <div>
              <h5>Send us an email</h5>
              <p>quotes@projectprime.com.au</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
