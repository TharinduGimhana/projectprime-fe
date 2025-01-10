import React, { useEffect } from "react";
import "../Css/Home/BackgroundMain.css";
import { Col, Container, Row } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";

export const BackgroundMain = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="background-section section-margin-common">
      <Container className="over-flow">
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
