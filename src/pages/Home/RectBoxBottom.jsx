import React from "react";
import "../Css/Home/RectBoxBottom.css";
import { Col, Container, Row } from "react-bootstrap";

export const RectBoxBottom = () => {
  return (
    <div>
      <Container fluid className="p-0 rect-bottom-container">
      <Row>
          <Col lg={6} md={6} className="rect-bg-left-bottom "></Col>

          <Col lg={6} md={6} className="rect-bg-right-bottom "></Col>
        </Row>
      </Container>
    </div>
  );
};
