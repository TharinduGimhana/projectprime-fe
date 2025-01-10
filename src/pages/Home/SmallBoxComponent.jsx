import React, { useEffect } from "react";
import "../Css/Home/SmallBoxComponent.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiSolidDirections } from "react-icons/bi";
import { SiConsul } from "react-icons/si";
import { IoConstructSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

export const SmallBoxComponent = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Container fluid className="p-3 custom-container over-flow">
        <Row>
          <Col lg={4} md={4} sm={12} className="mb-4" data-aos="fade-left">
            <div className="d-flex p-3 sm-box h-100">
              <BiSolidDirections size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">{props.content[0].title}</h4>
                <p>{props.content[0].para}</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-4 sm-box-mid" data-aos="fade-down">
            <div className="d-flex p-3 sm-box h-100">
              <IoConstructSharp size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">{props.content[1].title}</h4>
                <p>{props.content[1].para}</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-4 " data-aos="fade-right">
            <div className="d-flex p-3 sm-box h-100">
              <SiConsul size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">{props.content[2].title}</h4>
                <p>{props.content[2].para}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
