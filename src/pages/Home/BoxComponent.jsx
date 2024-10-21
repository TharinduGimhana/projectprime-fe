import React from "react";
import '../Css/Home/BoxComponent.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleDoubleDown} from 'react-icons/fa';
import { RiShapesFill } from "react-icons/ri";
import { SiGoogleearth } from "react-icons/si";

export const BoxComponent = (props) => {
  return (
    <div>
      <Container>
        <Row className="text-center box-component">
          <Col xs={12} md={4} className="mb-4">
            <div className="left-box">
              <RiShapesFill className="custom-icon" size={50} />
              <h4>{props.content[0].title}</h4>
              <p>{props.content[0].para}</p>
              <p className="get-q" variant="primary">{props.content[0].button}</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <div className="mid-box">
              <SiGoogleearth className="custom-icon" size={50} />
              <h4>{props.content[1].title}</h4>
              <p>{props.content[1].para}</p>
              <p className="get-q" variant="primary">{props.content[1].button}</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <div className="right-box">
              <FaAngleDoubleDown className="custom-icon"  size={50} />
              <h4>{props.content[2].title}</h4>
              <p>{props.content[2].para}</p>
              <p className="get-q" variant="primary">{props.content[2].button}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
