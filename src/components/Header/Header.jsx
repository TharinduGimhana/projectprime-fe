import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-dark">
      <Container>
        <Row>
          <Col md={4} className="mb-4 d-flex align-items-start">
            <div className="me-3"></div>
            <div>
              <h5>Job Request</h5>
              <p>We are always ready for you</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 d-flex align-items-start">
            <div className="me-3"></div>
            <div>
              <h5>Call us any time</h5>
              <p>+123 456 789</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 d-flex align-items-start">
            <div className="me-3"></div>
            <div>
              <h5>Send us an email</h5>
              <p>carl@projectprime.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
