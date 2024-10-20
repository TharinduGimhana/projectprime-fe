import React from "react";
import "../Css/GetQuote/BackgroundMainQuote.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainQuote = () => {
  return (
    <div className="background-section-quote">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-three-quote">GET IN TOUCH</p>

              <Container p-0 className="para-quote-container">
                <Row>
                  <Col md={6}>
                    <p className="para-quote">
                      Contact us anytime via phone, email or through this
                      contact form below. We look forward to helping you with
                      all your machine control model needs
                    </p>
                  </Col>
                  <Col md={6}></Col>
                </Row>
              </Container>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
