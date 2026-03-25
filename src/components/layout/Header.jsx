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
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

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
          <Navbar.Brand as={Link} to="/home" className="brand-logo">
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
                <Nav.Link
                  as={Link}
                  to="/home"
                  className="nav-link-custom"
                  onClick={handleClose}
                >
                  Home
                </Nav.Link>

                <NavDropdown
                  title="Adventures"
                  id="adventures-dropdown"
                  className="nav-link-custom"
                >
                  <NavDropdown.Header>
                    🏔️ Mountain Activities
                  </NavDropdown.Header>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/mountain-trekking"
                    onClick={handleClose}
                  >
                    Mountain Trekking
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/rock-climbing"
                    onClick={handleClose}
                  >
                    Rock Climbing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/skiing"
                    onClick={handleClose}
                  >
                    Skiing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/paragliding"
                    onClick={handleClose}
                  >
                    Paragliding
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Header>🌊 Water Sports</NavDropdown.Header>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/scuba-diving"
                    onClick={handleClose}
                  >
                    Scuba Diving
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/surfing"
                    onClick={handleClose}
                  >
                    Surfing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/kayaking"
                    onClick={handleClose}
                  >
                    Kayaking
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/white-water-rafting"
                    onClick={handleClose}
                  >
                    White Water Rafting
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Header>🏕️ Camping</NavDropdown.Header>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/wild-camping"
                    onClick={handleClose}
                  >
                    Wild Camping
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/beach-camping"
                    onClick={handleClose}
                  >
                    Beach Camping
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/forest-camping"
                    onClick={handleClose}
                  >
                    Forest Camping
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/activities/desert-camping"
                    onClick={handleClose}
                  >
                    Desert Camping
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/adventures"
                    onClick={handleClose}
                  >
                    <strong>View All Adventures</strong>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/destinations"
                  className="nav-link-custom"
                  onClick={handleClose}
                >
                  Destinations
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/about"
                  className="nav-link-custom"
                  onClick={handleClose}
                >
                  About Us
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/reviews"
                  className="nav-link-custom"
                  onClick={handleClose}
                >
                  Reviews
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="nav-link-custom"
                  onClick={handleClose}
                >
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
