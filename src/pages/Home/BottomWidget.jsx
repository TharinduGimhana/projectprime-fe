import React from "react";
import "../Css/Home/BottomWidget.css";
import { Col, Container, Row } from "react-bootstrap";

export const BottomWidget = (props) => {
  return (
    <div className="bottom-widget-bg">
      <Container>
        <Row>
          <Col xs={12} md={12} className="mb-12 bottom-widget">
            <h1
              dangerouslySetInnerHTML={{
                __html: props.content.title,
              }}
            ></h1>
            <p>{props.content.paraOne}</p>
            <p>{props.content.paraTwo}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
