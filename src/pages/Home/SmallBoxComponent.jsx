import React from "react";
import "../Css/Home/SmallBoxComponent.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiSolidDirections } from "react-icons/bi";
import { SiConsul } from "react-icons/si";
import { IoConstructSharp } from "react-icons/io5";

export const SmallBoxComponent = (props) => {
  return (
    <div>
      <Container fluid className="p-3">
        <Row>
          <Col lg={4} md={4} sm={12} className="mb-4 ">
            <div className="d-flex p-3 sm-box">
              <BiSolidDirections size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">{props.content[0].title}</h4>
                <p>{props.content[0].para}</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-4 sm-box-mid">
            <div className="d-flex p-3 sm-box">
              <IoConstructSharp size={40} className="me-3 custom-icon-sm" />
              <div>
                <h4 className="mb-1">{props.content[1].title}</h4>
                <p>{props.content[1].para}</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="mb-4 ">
            <div className="d-flex p-3 sm-box">
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
