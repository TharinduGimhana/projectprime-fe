import React, { useEffect } from "react";
import "../Css/About/AboutModelMain.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutModelMain = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="section-margin-common">
      <Container
        className="about-model-container p-2 my-4"
      >
        <Row>
          <Col
            md={6}
            className="d-flex flex-column about-model-content"
          >
            <h3 data-aos="fade-down">{props.data.title}</h3>
            <p data-aos="fade-up">{props.data.content}</p>
          </Col>

          <Col md={6} data-aos="fade-left">
            <Image
              src={props.data.image}
              alt="Description of the image"
              fluid
              className="w-100 h-auto"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
