import React from "react";
import '../Css/Home/BoxComponent.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleDoubleDown} from 'react-icons/fa';
import { RiShapesFill } from "react-icons/ri";
import { SiGoogleearth } from "react-icons/si";

export const BoxComponent = () => {
  return (
    <div>
      <Container>
        <Row className="text-center box-component">
          <Col xs={12} md={4} className="mb-4">
            <div className="left-box">
              <RiShapesFill className="custom-icon" size={50} />
              <h3>Machine Control Model</h3>
              <p>Machine Control Model Solutions delivers your 3D GPS model on time and hassle free</p>
              <p className="get-q" variant="primary">Get Quote</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <div className="mid-box">
              <SiGoogleearth className="custom-icon" size={50} />
              <h3>Earth Works Take-Off</h3>
              <p>Machine Control Model Solutions delivers your 3D GPS model on time and hassle free</p>
              <p className="get-q" variant="primary">Get Quote</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <div className="right-box">
              <FaAngleDoubleDown className="custom-icon"  size={50} />
              <h3>Hire a GPS or Total Station</h3>
              <p>Machine Control Model Solutions delivers your 3D GPS model on time and hassle free</p>
              <p className="get-q" variant="primary">Contact Us</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
