import React from "react";
import "../Css/About/AboutValuesWidget.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export const AboutValuesWidget = (props) => {
  if (props.Content.isImageRight) {
    return (
      <div className="bg-mission-values-model">
        <Container fluid className="mission-values-model-container p-0 my-o">
          <Row className="bg-dark-mission-values-row ">
            <Col
              md={6}
              className="d-flex flex-column mission-values-model-content"
            >
              <h4>{props.Content.title}</h4>
              <p>{props.Content.content}</p>
            </Col>

            <Col md={6} className="image-container-values p-0">
              <Image
                src={props.Content.image}
                alt="Description of the image"
                fluid
                className="w-100 h-100 img-cropped-values"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="bg-mission-values-model">
        <Container fluid className="mission-values-model-container p-0 my-o">
          <Row className="bg-dark-mission-values-row align-items-center">
            <Col md={6} className="image-container-values p-0">
              <Image
                src={props.Content.image}
                alt="Description of the image"
                fluid
                className="w-100 h-100 img-cropped-values"
              />
            </Col>
            <Col
              md={6}
              className="d-flex flex-column mission-values-model-content"
            >
              <h4>{props.Content.title}</h4>
              <p>{props.Content.content}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
