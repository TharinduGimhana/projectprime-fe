import React from "react";
import "../Css/Services/BackgroundMainService.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainService = (props) => {
  return (
    <div className="background-section-service">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-three-service">{props.content.lineOne}</p>
              <p className="price-check-btn">{props.content.button}</p>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
