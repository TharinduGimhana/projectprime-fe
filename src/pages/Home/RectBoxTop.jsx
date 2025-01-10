import React, { useEffect } from "react";
import "../Css/Home/RectBoxTop.css";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const RectBoxTop = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Container fluid className="p-0 rect-top-container custom-container">
        <Row className="h-rect-box">
          <Col lg={6} md={6} className="rect-bg-left-top" data-aos="fade-right"></Col>

          <Col lg={6} md={6} className="rect-bg-right-top " data-aos="fade-left"></Col>
        </Row>
      </Container>
    </div>
  );
};
