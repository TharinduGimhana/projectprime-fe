import React from "react";
import "../Css/Home/GreenWidget.css";
import { Col, Container, Row } from "react-bootstrap";
import logoPrime from "../../assets/Logo/ProjectPrime_Icon_Black.png";
import { useNavigate } from "react-router-dom";

export const GreenWidget = (props) => {
  const navigate = useNavigate();

  const smoothScrollToTop = (duration = 500) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleNavigate = () => {
    smoothScrollToTop();
    navigate("/services");
  };
  return (
    <div>
      <Container fluid className="p-3 custom-container">
        <Row className="row-green-wid">
          {/* <Col lg={1} md={1} sm={12} className="mb-1 custom-icon-col-green-wd pr-0">
            <img src={logoPrime} alt="Logo" className="custom-logo-black" />
          </Col> */}

          <Col lg={6} md={6} sm={12} className="mb-9 p-0">
            <div className="d-flex p-3">
              <img src={logoPrime} alt="Logo" className="custom-logo-black" />
              <div>
                <h4 className="mb-1">{props.content.title}</h4>
                <p>{props.content.para}</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-2 custome-button-green-wd">
            <div className="d-flex p-3">
              <p className="learn-m-green" onClick={handleNavigate}>
                {props.content.button}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
