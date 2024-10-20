import React from "react";
import "../Css/MachineModels/BackgroundMainMachine.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainMachine = () => {
  return (
    <div className="background-section-machine">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-one-machine">MACHINE CONTROL MODELS </p>
              <p className="line-three-machine">EARTHWORK MACHINE</p>
              <p className="line-three-machine">CONTROL MODELS</p>
              <p className="line-three-machine">NATIONWIDE</p>

              <Container p-0 className="para-machine-container">
                <p className="para-machine">
                  Machine Control Model Solutions 3D GPS machine control model
                  services are here to help our clients take advantage of the
                  many benefits of machine control systems. When using MCMS for
                  your machine control models you can have peace of mind knowing
                  that your model will be ACCURATE, ON TIME, and COMPLETE. With
                  MCMS machine control model services there is no need for
                  expensive computers, software and training. We provide models
                  for all the major machine control systems in the industry.
                  Machine Control Model Solutions is a one stop machine control
                  model service that provides highly accurate models in a timely
                  manner.
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
