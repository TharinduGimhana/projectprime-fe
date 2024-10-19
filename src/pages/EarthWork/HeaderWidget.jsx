import React from "react";
import "../Css/EarthWork/HeaderWidget.css";
import { Col, Container, Row } from "react-bootstrap";

export const HeaderWidget = (props) => {
  return (
    <div>
      <Container>
        <Row >
          <Col xs={12} md={12} className="mb-12 header-earth-widget">
           <h1>{props.header[0]} <br />
           {props.header[1]}</h1>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};
