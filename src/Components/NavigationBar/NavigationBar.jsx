import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className={`mb-3 navbar-custom ${scrolled ? "scrolled" : ""}`}>
          <Container>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand className="homeName">
                Learn Business Intelligence with Tushar
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1 className="homeName">
                    Learn Business Intelligence with Tushar
                  </h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {[
                    "home",
                    "about",
                    "skills",
                    "projects",
                    "articles",
                    "contact",
                  ].map((section) => (
                    <Nav.Link
                      key={section}
                      href={`#${section}`}
                      className="homeLink"
                      onClick={handleClose}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavigationBar;
