import React, { useEffect } from "react";
import "../Css/EarthWork/TopWidgetEarth.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const TopWidgetEarth = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  if (props?.earthWorksData?.length > 0) {
    return (
      <div className="section-margin-common">
        <Container className="earth-model-container p-0 my-4">
          <Row>
            <Col md={6} className="d-flex flex-column earth-model-content" data-aos="fade-right">
              {props.earthWorksData.map((description, index) => (
                <div key={index}>
                  <h4>{description}</h4>
                  <hr />
                </div>
              ))}
            </Col>

            <Col md={6} data-aos="fade-left">
              <Image
                src={props.image}
                alt="Description of the image"
                fluid
                className="w-100 h-auto"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else if (props?.earthContent) {
    return (
      <div className="bottom-margin-earth-model section-margin-common">
        <Container className="earth-model-container p-0 my-4 ">
          <Row>
            <Col md={6} className="d-flex flex-column earth-model-content" data-aos="fade-right">
              <h3>{props.earthContent.title}</h3>
              <p>{props.earthContent.content}</p>
            </Col>

            <Col md={6} data-aos="fade-left">
              <Image
                src={props.earthContent.image}
                alt="Description of the image"
                fluid
                className="w-100 h-auto"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return null;
  }
};
