import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../assets/ProjectPrime_Horizontal_GreenWhite.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <img src={logo} alt="Logo" />
              <p>
                We are a leading company in providing the best services for our
                clients. Our mission is to deliver quality and innovation.
              </p>
            </Col>

            <Col md={4} className="mb-4">
              <h7>Services</h7>
              <p>
                We offer a range of services including web development, mobile
                apps, and cloud solutions, tailored to your business needs.
              </p>
            </Col>

            <Col md={4} className="mb-4">
              <h7>Contact Us</h7>
              <Row>
                <Col xs={6} className="text-start">
                  <p>Address:</p>
                  <p>Phone:</p>
                  <p>Email:</p>
                </Col>

                <Col xs={6} className="text-end">
                  <p>123 Business Avenue</p>
                  <p>+123 456 7890</p>
                  <p>contact@company.com</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
