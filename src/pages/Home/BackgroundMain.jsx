import React from "react";
import "../Css/Home/BackgroundMain.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMain = (props) => {
  return (
    <div className="background-section">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-one">{props.content.lineOne}</p>
              <p className="line-two" dangerouslySetInnerHTML={{
                  __html: props.content.lineTwo,
                }}>
          
              </p>
              <p className="line-three">{props.content.lineThree}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
