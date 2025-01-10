import React, { useEffect } from "react";
import "../Css/About/MissionWidget.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const MissionWidget = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-mission-about-model">
      <Container className="mission-about-model-container p-10 my-o">
        <Row className="bg-dark-mission-about-row">
          <Col
            md={6}
            className="d-flex flex-column mission-about-model-content justify-content-center"
          >
            <h1>{props.Content.title}</h1>
          </Col>

          <Col md={6}>
            <p>{props.Content.topContent}</p>
          </Col>
        </Row>

      
      </Container>
      <Container fluid className="custom-container">
      <Row>
          <Col md={12} className="mission-about-border image-container-about p-0" data-aos="fade-up">
            <Image
              src={props.Content.image}
              alt="Description of the image"
              fluid
              className="w-100 h-100 img-cropped"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
