import React from "react";
import "../Css/Home/GreenWidget.css";
import { Col, Container, Row } from "react-bootstrap";
import logoPrime from "../../assets/Logo/ProjectPrime_Icon_Black.png";

export const GreenWidget = (props) => {
  return (
    <div>
      <Container fluid className="p-3 ">
        <Row className="row-green-wid">
          <Col lg={1} md={1} sm={12} className="mb-1 custom-icon-col-green-wd ">
            <img src={logoPrime} alt="Logo" className="custom-logo-black" />
          </Col>

          <Col lg={9} md={9} sm={12} className="mb-9 ">
            <div className="d-flex p-3">
              <div>
                <h4 className="mb-1">{props.content.title}</h4>
                <p>{props.content.para}</p>
              </div>
            </div>
          </Col>
          <Col lg={2} md={2} sm={12} className="mb-2 custome-button-green-wd">
            <div className="d-flex p-3">
              <p className="learn-m-green">{props.content.button}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
