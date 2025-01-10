import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../assets/Logo/ProjectPrime_Horizontal_GreenWhite.png";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const smoothScrollToTop = (duration = 500) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleNavigate = () => {
    smoothScrollToTop();
    navigate("/get-a-quote");
  };
  return (
    <div>
      <footer className="footer-top text-white py-4 section-margin-common">
        <Container>
          <Row>
            <Col md={4} className="main-logo-footer footer-content-left">
              <img src={logo} alt="Logo" />
              {/* <p>
                3D GPS Machine Control Models and Earthwork Takeoffs is our
                business. It is what we do all day, every day. We are the best
                at what we do and never stop striving to produce the best models
                and takeoffs in the industry.
              </p> */}
            </Col>

            <Col md={4} className="mb-4 footer-content-mid">
              <h6>Find us:</h6>
              <p>
                Unit 6C Homemaker Centre
                <br /> 42 Strickland Street <br />
                Bunbury, WA 6230 <br />
              </p>
            </Col>

            <Col md={4} className="footer-content-right">
              <h6>Working Hours</h6>
              <Row>
                <Col xs={6} className="text-start">
                  <p>Monday-Friday</p>
                  <p>Saturday-Sunday</p>
                </Col>

                <Col xs={6} className="text-end">
                  <p>7:30am - 6:00pm</p>
                  <p>Contact via email</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>

      <footer className="footer-middle text-black py-3 section-margin-common">
        <Container>
          <Row>
            <Col md={10} className="mb-10">
              <h2>
                READY TO DISCUS YOUR NEXT PROJECT?
                <br /> LET'S WORK TOGETHER
              </h2>
            </Col>
            <Col md={2} className="mb-2 green-box-black-btn p-0">
              <p className="lets-talk-btn" onClick={handleNavigate}>
                Let's Talk
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <footer className="footer-bottom text-white py-4 section-margin-common">
        <Container>
          <Row>
            <Col md={4} className="mb-4 footer-bottom-black-left">
              <p className="mb-0">© 2024 Project Prime</p>
            </Col>

            <Col
              md={4}
              className="mb-4 footer-b-link footer-bottom-black-right"
            >
              <p>Privacy Policy</p>
            </Col>

            <Col
              md={4}
              className="mb-4 footer-b-link footer-bottom-black-middle p-0"
            >
              <p>
                Follow us on:{" "}
                <FaLinkedinIn className="custom-icon-footer" size={20} />
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
