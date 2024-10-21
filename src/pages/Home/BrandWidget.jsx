import React, { useRef } from "react";
import "../Css/Home/BrandWidget.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

export const BrandWidget = (props) => {
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
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} className="mb-12 brand-widget">
            <h1>{props.content.title}</h1>
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
                  src={props.content.trimbleImg}
                  alt="Brand 1"
                  className="brand-logo"
                />
              </div>
              <div key={2}>
                <img
                  src={props.content.topconImg}
                  alt="Brand 2"
                  className="brand-logo"
                />
              </div>
              <div key={3}>
                <img
                  src={props.content.leicaImg}
                  alt="Brand 3"
                  className="brand-logo"
                />
              </div>
              <div key={4}>
                <img
                  src={props.content.KomatsuImg}
                  alt="Brand 4"
                  className="brand-logo"
                />
              </div>
              <div key={5}>
                <img
                  src={props.content.carlsonImg}
                  alt="Brand 5"
                  className="brand-logo"
                />
              </div>
              <div key={6}>
                <img
                  src={props.content.trimbleImg}
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
