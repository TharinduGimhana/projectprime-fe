import React from "react";
import "../Css/Services/BackgroundMainService.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainService = () => {
  return (
    <div className="background-section-service">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-three-service">SERVICES</p>
              <p className="price-check-btn">CHECK PRICING</p>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
