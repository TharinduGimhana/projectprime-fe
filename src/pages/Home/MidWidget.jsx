import React from "react";
import "../Css/Home/MidWidget.css";
import { Col, Container, Row } from "react-bootstrap";

export const MidWidget = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} className="mb-12 mid-widget">
            <h1
              dangerouslySetInnerHTML={{
                __html: props.content.title,
              }}
            ></h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
