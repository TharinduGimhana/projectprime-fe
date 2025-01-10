import React, { useEffect } from "react";
import "../Css/Home/BoxComponent.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import { RiShapesFill } from "react-icons/ri";
import { SiGoogleearth } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export const BoxComponent = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
  }, []);

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
    navigate("/get-a-quote");
  };

  return (
    <div className="section-margin-common">
      <Container className="over-flow">
        <Row className="text-center box-component">
          <Col xs={12} md={4} className="mb-4 " data-aos="fade-right">
            <div className="left-box h-100">
              <RiShapesFill className="custom-icon" size={50} />
              <h4>{props.content[0].title}</h4>
              <p>{props.content[0].para}</p>
              <p className="get-q mt-auto" variant="primary" onClick={handleNavigate}>
                {props.content[0].button}
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4 " data-aos="fade-up">
            <div className="mid-box h-100">
              <SiGoogleearth className="custom-icon" size={50} />
              <h4>{props.content[1].title}</h4>
              <p>{props.content[1].para}</p>
              <p className="get-q mt-auto" variant="primary" onClick={handleNavigate}>
                {props.content[1].button}
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4 m-auto" data-aos="fade-left">
            <div className="right-box h-100">
              <FaAngleDoubleDown className="custom-icon" size={50} />
              <h4>{props.content[2].title}</h4>
              <p>{props.content[2].para}</p>
              <p className="get-q" variant="primary" onClick={handleNavigate}>
                {props.content[2].button}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
