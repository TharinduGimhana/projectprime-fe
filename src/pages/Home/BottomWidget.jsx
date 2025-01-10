import React, { useEffect } from "react";
import "../Css/Home/BottomWidget.css";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const BottomWidget = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bottom-widget-bg">
      <Container fluid className=" custom-container section-margin-common over-flow">
        <Container>
          <Row>
            <Col lg={6} className="mb-12 bottom-widget bottom-widget-content">
              <h1
                dangerouslySetInnerHTML={{
                  __html: props.content.title,
                }}
              ></h1>
              <p>{props.content.paraOne}</p>
              <p>{props.content.paraTwo}</p>
            </Col>
            <Col lg={6} className="mb-12 bottom-widget">
              <Row>
                <Col
                  xs={6}
                  className="rect-bg-left-top p-5"
                  data-aos="fade-down"
                ></Col>
                <Col
                  xs={6}
                  className="rect-bg-right-top p-5"
                  data-aos="fade-left"
                ></Col>
              </Row>
              <Row>
                <Col
                  xs={6}
                  className="rect-bg-left-bottom p-5"
                  data-aos="fade-right"
                ></Col>
                <Col
                  xs={6}
                  className="rect-bg-right-bottom p-5"
                  data-aos="fade-up"
                ></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
