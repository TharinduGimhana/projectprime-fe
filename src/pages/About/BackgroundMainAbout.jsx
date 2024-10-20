import React from "react";
import "../Css/About/About.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainAbout = () => {
  return (
    <div className="background-section-machine">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-three-machine">ABOUT US</p>

              <Container p-0 className="para-machine-container">
                <p className="para-machine">
                  At Project Prime, we specialize in delivering precise
                  surveying services to the civil construction industry. Since
                  our founding in 2018, we've been committed to supporting
                  construction projects of all sizes with cutting-edge
                  solutions, from Machine Control models to As-Built
                  documentation. With over 15 years of industry experience, our
                  team brings expertise and reliability to every project we
                  undertake.
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
