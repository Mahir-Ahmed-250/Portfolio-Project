import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className={`mb-3 navbar-custom ${scrolled ? "scrolled" : ""}`}
        >
          <Container>
            <Navbar.Brand href="#home" className="homeName">
              Learn Business Intelligence with Tushar
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1 className="homeName">
                    {" "}
                    Learn Business Intelligence with Tushar
                  </h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" className="homeLink">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" className="homeLink">
                    About
                  </Nav.Link>
                  <Nav.Link href="#skills" className="homeLink">
                    Skills
                  </Nav.Link>
                  <Nav.Link href="#projects" className="homeLink">
                    Projects
                  </Nav.Link>
                  <Nav.Link href="#articles" className="homeLink">
                    Articles
                  </Nav.Link>
                  <Nav.Link href="#contact" className="homeLink">
                    Contact
                  </Nav.Link>
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
