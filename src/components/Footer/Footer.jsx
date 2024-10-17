import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../assets/Logo/ProjectPrime_Horizontal_GreenWhite.png";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer-top text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <img src={logo} alt="Logo" />
              <p>
                3D GPS Machine Control Models and Earthwork Takeoffs is our
                business. It is what we do all day, every day. We are the best
                at what we do and never stop striving to produce the best models
                and takeoffs in the industry.
              </p>
            </Col>

            <Col md={4} className="mb-4">
              <h7>Find us:</h7>
              <p>
                PHYSICAL ADDRESS <br /> 1300 S. Milton Road, Suite 213 <br />{" "}
                Flagstaff, AZ 86001 <br /> <br /> MAILING ADDRESS <br /> 809 W.
                Riordan Road, Suite 100-272
                <br /> Flagstaff, AZ 86001
              </p>
            </Col>

            <Col md={4} className="mb-4">
              <h7>Working Hours</h7>
              <Row>
                <Col xs={6} className="text-start">
                  <p>Monday-Friday</p>
                  <p>Saturday-Sunday</p>
                </Col>

                <Col xs={6} className="text-end">
                  <p>7:30am-5:00pm</p>
                  <p>Closed</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>

      <footer className="footer-middle text-black py-4">
        <Container>
          <Row>
            <Col md={10} className="mb-10">
              <h2>
                READY TO DISCUS YOUR NEXT PROJECT?
                <br /> LET'S WORK TOGETHER
              </h2>
            </Col>
            <Col md={2} className="mb-2">
              <p>Let's Talk</p>
            </Col>
          </Row>
        </Container>
      </footer>

      <footer className="footer-bottom text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <p className="mb-0">© 2024 Project Prime</p>
            </Col>

            <Col md={4} className="mb-4">
              <p>Privacy Policy</p>
            </Col>

            <Col md={4} className="mb-4">
              <p>Follow us on:  <FaLinkedinIn className="custom-icon-footer" size={20} /></p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
