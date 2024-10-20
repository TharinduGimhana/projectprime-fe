import React from "react";
import "../Css/About/MissionWidget.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export const MissionWidget = (props) => {
  return (
    <div className="bg-mission-about-model">
      <Container className="mission-about-model-container p-0 my-o">
        <Row className="bg-dark-mission-about-row ">
          <Col
            md={6}
            className="d-flex flex-column mission-about-model-content justify-content-center"
          >
            <h2>{props.Content.title}</h2>
          </Col>

          <Col md={6}>
            <p>{props.Content.topContent}</p>
          </Col>
        </Row>

      
      </Container>
      <Container fluid>
      <Row>
          <Col md={12} className="mission-about-border image-container-about p-0">
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
