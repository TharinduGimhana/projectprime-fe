import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarPanel.css";
import { Col, Row } from "react-bootstrap";
import logo from "../../assets/Logo/ProjectPrime_Horizontal_GreenBlack.png";
import { useLocation } from "react-router-dom";

const NavbarPanel = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div>
      <Container>
        <Row className="g-0">
          <Col className="mx-auto p-0 m-0">
            <Navbar expand="lg" className="bg-body-tertiary py-0 custom-navbar">
              <Container className="p-0 m-0">
                <Navbar.Brand href="/" className="nav-logo">
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
                      className={activeLink === "/" ? "active" : ""}
                    >
                      HOME
                    </Nav.Link>
                    <Nav.Link
                      href="/machine-models"
                      className={
                        activeLink === "/machine-models" ? "active" : ""
                      }
                    >
                      MACHINE CONTROL MODELS
                    </Nav.Link>
                    <Nav.Link
                      href="/earth-work-quantities"
                      className={
                        activeLink === "/earth-work-quantities" ? "active" : ""
                      }
                    >
                      EARTH WORK QUANTITIES
                    </Nav.Link>
                    <Nav.Link
                      href="/services"
                      className={activeLink === "/services" ? "active" : ""}
                    >
                      SERVICES
                    </Nav.Link>
                    <Nav.Link
                      href="/about"
                      className={activeLink === "/about" ? "active" : ""}
                    >
                      ABOUT
                    </Nav.Link>
                    <Nav.Link
                      href="/get-a-quote"
                      className={
                        activeLink === "/get-a-quote"
                          ? "active-getquote"
                          : "navbarquote"
                      }
                    >
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
