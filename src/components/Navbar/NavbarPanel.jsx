import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarPanel.css";
import { Col, Row } from "react-bootstrap";
import logo from "../../assets/Logo/ProjectPrime_Horizontal_GreenBlack.png";

const NavbarPanel = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <div>
      <Container>
        <Row className="g-0">
          <Col className="mx-auto p-0 m-0">
            <Navbar expand="lg" className="bg-body-tertiary py-0 custom-navbar">
              <Container className="p-0 m-0">
                <Navbar.Brand href="/home" className="nav-logo">
                  <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="custom-toggle"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto align-items-center">
                    <Nav.Link
                      href="/"
                      active={activeLink === "home"}
                      onClick={() => setActiveLink("home")}
                    >
                      HOME
                    </Nav.Link>
                    <Nav.Link
                      href="/machine-models"
                      active={activeLink === "machine-models"}
                      onClick={() => setActiveLink("machine-models")}
                    >
                      MACHINE CONTROL MODELS
                    </Nav.Link>
                    <Nav.Link
                      href="/earth-work-quantities"
                      active={activeLink === "earth-work-quantities"}
                      onClick={() => setActiveLink("earth-work-quantities")}
                    >
                      EARTH WORK QUANTITIES
                    </Nav.Link>
                    <Nav.Link
                      href="/services"
                      active={activeLink === "services"}
                      onClick={() => setActiveLink("services")}
                    >
                      SERVICES
                    </Nav.Link>
                    <Nav.Link
                      href="/about"
                      active={activeLink === "about"}
                      onClick={() => setActiveLink("about")}
                    >
                      ABOUT
                    </Nav.Link>
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
