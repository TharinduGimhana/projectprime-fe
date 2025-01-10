import React from "react";
import "../Css/MachineModels/BackgroundMainMachine.css";
import { Col, Container, Row } from "react-bootstrap";

export const BackgroundMainMachine = (props) => {
  return (
    <div className="background-section-machine section-margin-common">
      <Container>
        <Row>
          <Col md={12} className="mb-12">
            <div className="content">
              <p className="line-one-machine">{props.content.lineOne}</p>
              {/* <p className="line-three-machine">{props.content.lineTwo}</p>
              <p className="line-three-machine">{props.content.lineThree}</p> */}
              <p className="line-three-machine">{props.content.lineFour}</p>

              <Container  className="para-machine-container p-0">
                <p className="para-machine">{props.content.paraOne}</p>
                <p className="para-machine">{props.content.paraTwo}</p>
              </Container>
              {/* <p className="price-check-btn">{props.content.button}</p> */}
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
