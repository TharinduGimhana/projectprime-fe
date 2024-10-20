import React, { useRef } from "react";
import "../Css/Home/BrandWidget.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import trimble from "../../assets/Logo/trimble.png"
import topcon from "../../assets/Logo/topcon.png"
import leica from "../../assets/Logo/leica.png"
import Komatsu from "../../assets/Logo/Komatsu.png"
import carlson from "../../assets/Logo/carlson.png"


export const BrandWidget = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3, // Show 4 logos at once on large tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 3 logos at once on medium devices
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2, // Show 2 logos at once on small devices
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 1 logo at once on mobile view
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} className="mb-12 brand-widget">
            <h1>MACHINE CONTROL MODELS FOR ALL BRANDS</h1>
          </Col>
        </Row>
        <Row>
          <div className="slider-container brand-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <img
                  src={trimble}
                  alt="Brand 1"
                  className="brand-logo"
                />
              </div>
              <div key={2}>
                <img
                  src={topcon}
                  alt="Brand 2"
                  className="brand-logo"
                />
              </div>
              <div key={3}>
                <img
                  src={leica}
                  alt="Brand 3"
                  className="brand-logo"
                />
              </div>
              <div key={4}>
                <img
                  src={Komatsu}
                  alt="Brand 4"
                  className="brand-logo"
                />
              </div>
              <div key={5}>
                <img
                  src={carlson}
                  alt="Brand 5"
                  className="brand-logo"
                />
              </div>
              <div key={6}>
                <img
                  src={trimble}
                  alt="Brand 6"
                  className="brand-logo"
                />
              </div>
            </Slider>
            <div style={{ textAlign: "center" }}>
              <button className="button arrow-icon-btn" onClick={previous}>
                <GrPrevious className="custom-pre-icon" size={30} />
              </button>
              <button className="button arrow-icon-btn" onClick={next}>
                <GrNext className="custom-next-icon" size={30} />
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
