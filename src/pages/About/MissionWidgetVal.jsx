import React from "react";
import "../Css/About/MissionWidgetVal.css";
import { Container, Row, Col } from "react-bootstrap";

export const MissionWidgetVal = (props) => {
  return (
    <div className="bg-mission-val-model">
      <Container className="mission-val-model-container p-10 my-o">
        <Row className="bg-dark-mission-val-row ">
          <Col
            md={6}
            className="d-flex flex-column mission-val-model-content justify-content-center"
          >
            <h1>{props.Content.title}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
