import React from "react";
import "../Css/Home/SmallBoxComponent.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiSolidDirections } from "react-icons/bi";
import { SiConsul  } from "react-icons/si";
import { IoConstructSharp } from "react-icons/io5";

export const SmallBoxComponent = () => {
  return (
    <div>
      <Container fluid className="p-3">
        <Row>
          <Col lg={4} md={4} sm={12} className="mb-4 ">
            <div className="d-flex p-3 sm-box">
              <BiSolidDirections size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">Site Ready</h4> 
                <p>
                  This service focuses on preparing your site for construction
                  with precise, data-driven solutions.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-4 sm-box-mid">
            <div className="d-flex p-3 sm-box">
              <IoConstructSharp  size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">Construct Ready</h4>
                <p>
                  We support your project with advanced modelling and
                  verification services.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-4 ">
            <div className="d-flex p-3 sm-box">
              <SiConsul size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">Claim Ready</h4>
                <p>
                  Our Claim Ready service ensures that your project completion
                  claims are accurate.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
