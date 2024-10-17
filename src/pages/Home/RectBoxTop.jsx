import React from "react";
import "../Css/Home/RectBoxTop.css";
import { Col, Container, Row } from "react-bootstrap";

export const RectBoxTop = () => {
  return (
    <div>
      <Container fluid className="p-0 rect-top-container">
      <Row>
          <Col lg={6} md={6} className="rect-bg-left-top "></Col>

          <Col lg={6} md={6} className="rect-bg-right-top "></Col>
        </Row>
      </Container>
    </div>
  );
};
