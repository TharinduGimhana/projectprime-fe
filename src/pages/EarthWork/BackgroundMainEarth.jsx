import React from "react";
import "../Css/EarthWork/BackgroundMainEarth.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainEarth = () => {
  return (
    <div className="background-section-earth">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-one-earth">EARTHWORK & MATERIALS TAKEOFFS </p>
              <p className="line-three-earth">WE COMPLETE</p>
              <p className="line-three-earth">EARTHWORK TAKEOFFS</p>
              <p className="line-three-earth">NATIONWIDE</p>

              <Container p-0 className="para-earth-container">
                <p className="para-earth">
                  Using detailed civil construction plans and CAD files, Project
                  Prime produces highly accurate earthworks and material
                  quantities tailored to project requirements. From
                  straightforward earthworks estimates to in-depth takeoff
                  reports, skilled technicians ensure precise measurements,
                  helping projects stay on track and within budget.
                </p>
              </Container>
              <p className="price-check-btn">CHECK PRICING</p>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
