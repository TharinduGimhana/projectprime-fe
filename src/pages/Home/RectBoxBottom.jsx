import React, { useEffect } from "react";
import "../Css/Home/RectBoxBottom.css";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const RectBoxBottom = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Container fluid className="p-0 rect-bottom-container custom-container">
        <Row className="h-rect-box">
          <Col
            lg={6}
            md={6}
            className="rect-bg-left-bottom "
            data-aos="fade-right"
          ></Col>

          <Col
            lg={6}
            md={6}
            className="rect-bg-right-bottom "
            data-aos="fade-left"
          ></Col>
        </Row>
      </Container>
    </div>
  );
};
