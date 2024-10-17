import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarPanel.css";
import { Col, Row } from "react-bootstrap";
import logo from "../../assets/Logo/ProjectPrime_Horizontal_GreenBlack.png";

const NavbarPanel = () => {
  return (
    <div>
      <Container>
        <Row className="g-0">
          <Col className="mx-auto p-0 m-0">
            <Navbar expand="lg" className="bg-body-tertiary py-0 custom-navbar">
              <Container className="p-0 m-0">
                <Navbar.Brand href="#home" className="nav-logo">
                  <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto align-items-center">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#link">MACHINE CONTROL MODELS</Nav.Link>
                    <Nav.Link href="#home">EARTH WORK QUANTITIES</Nav.Link>
                    <Nav.Link href="#home">SERVICES</Nav.Link>
                    <Nav.Link href="#home">ABOUT</Nav.Link>
                    <Nav.Link className="navbarquote" href="#home">
                      GET A QUOTE
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarPanel;
