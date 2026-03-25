// AboutUs.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "../../styles/AboutUs.css";

const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Adventure Guide",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
  ];

  return (
    <>
      <Header />
      <div className="about-page">
        <motion.section
          className="about-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <h1>About Us</h1>
            <p>Creating unforgettable adventures since 2015</p>
          </Container>
        </motion.section>

        <Container className="my-5">
          <Row className="mb-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2>Our Story</h2>
                <p className="lead">
                  We started with a simple mission: to help people discover the
                  world's most incredible adventures.
                </p>
                <p>
                  Over the years, we've grown into a trusted adventure travel
                  company, organizing expeditions to the most breathtaking
                  destinations around the globe. Our team of experienced guides
                  ensures every journey is safe, memorable, and transformative.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800"
                alt="Our Story"
                className="img-fluid rounded"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Col>
          </Row>

          <Row className="my-5">
            <Col>
              <h2 className="text-center mb-4">Our Team</h2>
              <Row>
                {team.map((member, index) => (
                  <Col lg={4} md={6} className="mb-4" key={member.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Card className="team-card text-center">
                        <Card.Img
                          variant="top"
                          src={member.image}
                          className="team-img"
                        />
                        <Card.Body>
                          <Card.Title>{member.name}</Card.Title>
                          <Card.Text className="text-muted">
                            {member.role}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
