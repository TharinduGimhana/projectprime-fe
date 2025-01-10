import React, { useEffect } from "react";
import "../Css/MachineModels/ControlModelWidget.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const ControlModelWidget = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="section-margin-common">
      <Container className="machine-model-container p-0 my-4 over-flow">
        <Row>
          <Col md={6} className="d-flex flex-column machine-model-content" data-aos="fade-right">
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
          </Col>

          <Col md={6} className="image-container-machine" data-aos="fade-left">
            <Image
              src={props.data.image}
              alt="Description of the image"
              fluid
              className="w-100 h-100 img-cropped-machine"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
