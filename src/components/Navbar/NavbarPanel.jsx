import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarPanel.css";
import { Col, Row } from "react-bootstrap";
import logo from "../../assets/Logo/ProjectPrime_Horizontal_GreenBlack.png";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    closeNavbar(); // Close the navbar after navigating
  };

  return (
    <div className="nav-bar-black-bg section-margin-common">
      <Container>
        <Row className="g-0">
          <Col className="mx-auto p-0 m-0">
            <Navbar expand="lg" className="bg-body-tertiary py-0 custom-navbar">
              <Container className="p-0 m-0">
                <Navbar.Brand onClick={() => handleNavigate("/")} className="nav-logo">
                  <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="custom-toggle"
                  onClick={toggleNavbar} // Toggle the navbar
                />
                <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
                  <Nav className="ms-auto align-items-center">
                    <Nav.Link
                      onClick={() => handleNavigate("/")}
                      className={activeLink === "/" ? "active" : ""}
                    >
                      HOME
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleNavigate("/machine-models")}
                      className={
                        activeLink === "/machine-models" ? "active" : ""
                      }
                    >
                      MACHINE CONTROL MODELS
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleNavigate("/earth-work-quantities")}
                      className={
                        activeLink === "/earth-work-quantities" ? "active" : ""
                      }
                    >
                      EARTH WORK QUANTITIES
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleNavigate("/services")}
                      className={activeLink === "/services" ? "active" : ""}
                    >
                      SERVICES
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleNavigate("/about")}
                      className={activeLink === "/about" ? "active" : ""}
                    >
                      ABOUT
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleNavigate("/get-a-quote")}
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
