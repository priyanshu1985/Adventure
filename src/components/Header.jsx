// Header.jsx
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="/" className="brand-logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="d-flex align-items-center"
            >
              <span className="logo-icon">🏔️</span>
              <span className="logo-text">Adventure</span>
            </motion.div>
          </Navbar.Brand>

          <div className="d-flex align-items-center order-lg-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                className="btn-get-started d-none d-lg-block"
              >
                Book Now
              </Button>
            </motion.div>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleShow}
              className="ms-2"
            />
          </div>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <span className="logo-icon">🏔️</span>
                <span className="logo-text">Adventure</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#home" className="nav-link-custom">
                  Home
                </Nav.Link>

                <NavDropdown
                  title="Adventures"
                  id="adventures-dropdown"
                  className="nav-link-custom"
                >
                  <NavDropdown.Item href="#mountain">
                    🏔️ Mountain Trekking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#water">
                    🌊 Water Sports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#camping">
                    🏕️ Camping
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#all">
                    View All Adventures
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#destinations" className="nav-link-custom">
                  Destinations
                </Nav.Link>

                <Nav.Link href="#about" className="nav-link-custom">
                  About Us
                </Nav.Link>

                <Nav.Link href="#reviews" className="nav-link-custom">
                  Reviews
                </Nav.Link>

                <Nav.Link href="#contact" className="nav-link-custom">
                  Contact
                </Nav.Link>
              </Nav>

              <div className="d-lg-none mt-3">
                <Button variant="primary" className="w-100 btn-get-started">
                  Book Now
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;
