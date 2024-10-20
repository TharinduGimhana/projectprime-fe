import React from "react";
import "../Css/About/AboutModelMain.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export const AboutModelMain = (props) => {
  return (
    <div>
      <Container
        className="about-model-container p-2 my-4"
      >
        <Row>
          <Col
            md={6}
            className="d-flex flex-column about-model-content"
          >
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
          </Col>

          <Col md={6}>
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
