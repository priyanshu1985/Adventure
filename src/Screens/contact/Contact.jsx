// Contact.jsx
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "../../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-page">
        <motion.section
          className="contact-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you</p>
          </Container>
        </motion.section>

        <Container className="my-5">
          <Row>
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="contact-form-card">
                  <Card.Body>
                    <h3 className="mb-4">Send us a message</h3>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter first name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter last name"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Select>
                          <option>General Inquiry</option>
                          <option>Booking Question</option>
                          <option>Technical Support</option>
                          <option>Feedback</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Write your message here..."
                        />
                      </Form.Group>
                      <Button variant="primary" size="lg" className="w-100">
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="contact-info-card mb-4">
                  <Card.Body>
                    <h5 className="mb-4">Contact Information</h5>
                    <div className="contact-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <div>
                        <strong>Address</strong>
                        <p>123 Adventure Street, Travel City, TC 12345</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-telephone-fill"></i>
                      <div>
                        <strong>Phone</strong>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-envelope-fill"></i>
                      <div>
                        <strong>Email</strong>
                        <p>info@adventure.com</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-clock-fill"></i>
                      <div>
                        <strong>Working Hours</strong>
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="social-card">
                  <Card.Body>
                    <h5 className="mb-3">Follow Us</h5>
                    <div className="social-icons">
                      <a href="#" className="social-icon facebook">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="social-icon twitter">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="social-icon instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#" className="social-icon linkedin">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
