import React from "react";
import "../Css/MachineModels/ControlModelWidget.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export const ControlModelWidget = (props) => {
  return (
    <div>
      <Container
        className="machine-model-container p-0 my-4"
      >
        <Row>
          <Col
            md={6}
            className="d-flex flex-column machine-model-content"
          >
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
          </Col>

          <Col md={6} className="image-container-machine">
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
