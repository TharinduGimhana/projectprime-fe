import React from "react";
import "../Css/About/BackgroundMainAbout.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainAbout = (props) => {
  return (
    <div className="background-section-about">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-three-about">{props.content.lineThree}</p>

              <Container p-0 className="para-about-container">
                <p className="para-about">{props.content.para}</p>
              </Container>
              <p className="price-check-btn"> {props.content.button}</p>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
