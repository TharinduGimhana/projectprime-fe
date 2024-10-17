import React from "react";
import "../Css/Home/BottomWidget.css";
import { Col, Container, Row } from "react-bootstrap";

export const BottomWidget = () => {
  return (
    <div className="bottom-widget-bg">
      <Container>
        <Row>
          <Col xs={12} md={12} className="mb-12 bottom-widget">
            <h1>
              THE KEY TO RELIABLE MACHINE CONTROL <br />
              MODELS
            </h1>
            <p>
              There's a significant difference between a surface crafted by
              designers in a typical consulting engineering company and one
              specifically built for machine control by a skilled 3D modeller.
              Designer-generated surfaces are usually intended for paper plans,
              which can lead to models that lack the necessary details for use
              directly in the field. These designs often contain errors or
              complexities that aren't tailored for modern construction
              machinery.
            </p>
            <p>
              Project Prime's experienced 3D modellers create machine control
              models that are accurate, detailed, and ready for on-site
              implementation. Built with field performance in mind, these models
              streamline the construction process, reducing downtime and
              enhancing productivity where it's needed most
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
