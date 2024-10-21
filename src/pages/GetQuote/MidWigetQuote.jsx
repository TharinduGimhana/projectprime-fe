import React from "react";
import "../Css/GetQuote/MidWigetQuote.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

export const MidWigetQuote = (props) => {
  return (
    <div>
      <Container fluid className="bg-dark-mid-quote p-5">
        <Row>
          <Col lg={6}>
            <h2 className="text-center p-4">{props.content.title}</h2>
          </Col>
          <Col lg={3} className="text-center">
            <MdEmail className="green-quote-icon" size={40} />
            <h5 className="mod-quote-contact">Email us</h5>
            <p className="mod-quote-contact">{props.content.email}</p>
          </Col>
          <Col lg={3} className="text-center mod-quote-contact">
            <BiSolidPhoneCall className="green-quote-icon" size={40} />
            <h5 className="mod-quote-contact">Call us</h5>
            <p className="mod-quote-contact">{props.content.phoneNo}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
