// Destinations.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "../../styles/Destinations.css";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Himalayas",
      country: "Nepal",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      description: "Majestic peaks and ancient monasteries",
    },
    {
      id: 2,
      name: "Sahara Desert",
      country: "Morocco",
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
      description: "Endless golden dunes and starlit nights",
    },
    {
      id: 3,
      name: "Amazon Rainforest",
      country: "Brazil",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
      description: "The world's largest tropical rainforest",
    },
    {
      id: 4,
      name: "Swiss Alps",
      country: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
      description: "Breathtaking mountain landscapes",
    },
  ];

  return (
    <>
      <Header />
      <div className="destinations-page">
        <motion.section
          className="destinations-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <h1>Discover Destinations</h1>
            <p>Explore the world's most beautiful places</p>
          </Container>
        </motion.section>

        <Container className="my-5">
          <Row>
            {destinations.map((destination, index) => (
              <Col lg={6} md={6} className="mb-4" key={destination.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="destination-card">
                    <Card.Img variant="top" src={destination.image} />
                    <Card.ImgOverlay className="destination-overlay">
                      <div className="destination-content">
                        <h3>{destination.name}</h3>
                        <p className="country">{destination.country}</p>
                        <p className="description">{destination.description}</p>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
