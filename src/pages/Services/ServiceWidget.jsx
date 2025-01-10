import React, { useEffect } from "react";
import "../Css/Services/ServiceWidget.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const ServiceWidget = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  if (props?.serviceContent?.middleTitle) {
    return (
      <div className="section-margin-common">
        <Container className="service-model-container p-2 my-4">
          <Row className="bg-dark-service-row">
            <Col md={6} className="d-flex flex-column service-model-content">
              <h3
                className={
                  props.serviceContent?.isPrime
                    ? "active-prime-title"
                    : "inactive-prime-title"
                }
              >
                {props.serviceContent.title}
              </h3>
              <p className="learn-more-service-btn">
                {props.serviceContent.button}
              </p>
            </Col>

            <Col>
              <p>{props.serviceContent.topContent}</p>
            </Col>
          </Row>

          <Row>
            <Col
              md={4}
              className="d-flex flex-column service-model-content service-border service-border"
              data-aos="fade-right"
            >
              <h3>{props.serviceContent.leftTitle}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.serviceContent.leftContent,
                }}
              />
            </Col>

            <Col
              md={4}
              className="d-flex flex-column service-model-content service-border-half"
              data-aos="fade-up"
            >
              <h3>{props.serviceContent.middleTitle}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.serviceContent.middleContent,
                }}
              />
            </Col>

            <Col
              md={4}
              className="service-border p-0 image-container-service"
              data-aos="fade-left"
            >
              <Image
                src={props.serviceContent.image}
                alt="Description of the image"
                fluid
                className="w-100 h-100 img-cropped-service"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="section-margin-common">
        <Container className="service-model-container p-2 my-4">
          <Row className="bg-dark-service-row">
            <Col md={6} className="d-flex flex-column service-model-content">
              <h3>{props.serviceContent.title}</h3>
              <p className="learn-more-service-btn">
                {props.serviceContent.button}
              </p>
            </Col>

            <Col md={6}>
              <p>{props.serviceContent.topContent}</p>
            </Col>
          </Row>

          <Row>
            <Col
              md={8}
              className="d-flex flex-column service-model-content service-border service-border service-border-8 "
              data-aos="fade-right"
            >
              <h3>{props.serviceContent.leftTitle}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.serviceContent.leftContent,
                }}
              />
            </Col>

            <Col
              md={4}
              className="service-border p-0 image-container-service"
              data-aos="fade-left"
            >
              <Image
                src={props.serviceContent.image}
                alt="Description of the image"
                fluid
                className="w-100 h-100 img-cropped-service"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
