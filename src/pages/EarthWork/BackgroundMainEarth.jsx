import React from "react";
import "../Css/EarthWork/BackgroundMainEarth.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainEarth = (props) => {
  return (
    <div className="background-section-earth">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-one-earth">{props.content.lineOne}</p>
              <p className="line-three-earth">{props.content.lineTwo}</p>
              <p className="line-three-earth">{props.content.lineThree}</p>
              <p className="line-three-earth">{props.content.lineFour}</p>

              <Container p-0 className="para-earth-container">
                <p className="para-earth">{props.content.para}</p>
              </Container>
              <p className="price-check-btn">{props.content.button}</p>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
