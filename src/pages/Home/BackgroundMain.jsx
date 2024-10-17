import React from "react";
import "../Css/Home/BackgroundMain.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMain = () => {
  return (
    <div className="background-section">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-one">CONTROL YOUR </p>
              <p className="line-two">
                MACHINES <span>WITH</span>
              </p>
              <p className="line-three">3D GPS MODELS</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
