// Footer.jsx
import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Blog", href: "#blog" },
    ],
    adventures: [
      { name: "Mountain Trekking", href: "#mountain" },
      { name: "Water Sports", href: "#water" },
      { name: "Desert Safari", href: "#desert" },
      { name: "Wildlife Tours", href: "#wildlife" },
      { name: "Extreme Sports", href: "#extreme" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Safety Guidelines", href: "#safety" },
      { name: "Cancellation Policy", href: "#cancellation" },
      { name: "Terms & Conditions", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
  };

  const socialLinks = [
    { icon: "📘", name: "Facebook", href: "#facebook", color: "#1877f2" },
    { icon: "📷", name: "Instagram", href: "#instagram", color: "#e4405f" },
    { icon: "🐦", name: "Twitter", href: "#twitter", color: "#1da1f2" },
    { icon: "📺", name: "YouTube", href: "#youtube", color: "#ff0000" },
    { icon: "💼", name: "LinkedIn", href: "#linkedin", color: "#0077b5" },
  ];

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="newsletter-title">
                  🌟 Subscribe to Our Newsletter
                </h3>
                <p className="newsletter-text">
                  Get exclusive deals, adventure tips, and destination guides
                  delivered to your inbox!
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <InputGroup className="newsletter-input">
                  <Form.Control
                    placeholder="Enter your email address"
                    aria-label="Email"
                    className="newsletter-field"
                  />
                  <Button className="newsletter-btn">Subscribe</Button>
                </InputGroup>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <Container>
          <Row className="g-4">
            {/* Company Info */}
            <Col lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="footer-brand mb-4">
                  <h3 className="brand-name">
                    <span className="brand-icon">🏔️</span>
                    Adventure
                  </h3>
                </div>
                <p className="footer-description">
                  Your trusted companion for unforgettable adventures around the
                  world. We specialize in creating experiences that challenge,
                  inspire, and transform.
                </p>
                <div className="contact-info mt-4">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>123 Adventure Street, Explorer City, EC 12345</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <span>hello@adventure.com</span>
                  </div>
                </div>
              </motion.div>
            </Col>

            {/* Company Links */}
            <Col lg={2} md={6} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h5 className="footer-heading">Company</h5>
                <ul className="footer-links">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Adventures Links */}
            <Col lg={2} md={6} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h5 className="footer-heading">Adventures</h5>
                <ul className="footer-links">
                  {footerLinks.adventures.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Support Links */}
            <Col lg={2} md={6} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h5 className="footer-heading">Support</h5>
                <ul className="footer-links">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Certifications */}
            <Col lg={2} md={6} sm={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h5 className="footer-heading">Certified By</h5>
                <div className="certification-badges">
                  <div className="badge-item">🏆 ISO Certified</div>
                  <div className="badge-item">✅ Safety First</div>
                  <div className="badge-item">🌍 Eco-Friendly</div>
                  <div className="badge-item">⭐ 5-Star Rated</div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Social Media & Copyright */}
          <Row className="footer-bottom mt-5 pt-4">
            <Col md={6} className="mb-3 mb-md-0">
              <motion.div
                className="social-links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </Col>
            <Col md={6} className="text-md-end">
              <motion.p
                className="copyright-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                © {currentYear} Adventure. All rights reserved. Made with ❤️ for
                adventurers
              </motion.p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
