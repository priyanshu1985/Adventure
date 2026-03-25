// Home.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Home.css";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Featured Adventures Data
  const adventures = [
    {
      id: 1,
      title: "Mountain Trekking",
      location: "Himalayas, Nepal",
      difficulty: "Hard",
      duration: "7 Days",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      price: "$1,299",
    },
    {
      id: 2,
      title: "Scuba Diving",
      location: "Great Barrier Reef",
      difficulty: "Medium",
      duration: "3 Days",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      price: "$899",
    },
    {
      id: 3,
      title: "Safari Adventure",
      location: "Serengeti, Tanzania",
      difficulty: "Easy",
      duration: "5 Days",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
      price: "$1,599",
    },
    {
      id: 4,
      title: "Desert Expedition",
      location: "Sahara Desert",
      difficulty: "Medium",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
      price: "$749",
    },
  ];

  const categories = [
    { icon: "🏔️", name: "Mountain", count: 45 },
    { icon: "🌊", name: "Water Sports", count: 32 },
    { icon: "🏕️", name: "Camping", count: 28 },
    { icon: "🚴", name: "Cycling", count: 38 },
    { icon: "🪂", name: "Extreme", count: 21 },
    { icon: "🦁", name: "Wildlife", count: 19 },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Best adventure experience ever! The trek was challenging but absolutely worth it.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "Professional guides and amazing destinations. Can't wait for my next adventure!",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      rating: 5,
      text: "Safety first, fun always! Highly recommend for solo travelers and groups.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="display-2 fw-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Discover Your Next
                  <motion.span
                    className="text-adventure d-block"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Adventure
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="lead mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Explore breathtaking destinations, challenge yourself with
                  thrilling activities, and create memories that last a
                  lifetime.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <InputGroup className="search-bar mb-4">
                    <Form.Control
                      size="lg"
                      placeholder="Where do you want to go?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-0 shadow-lg"
                    />
                    <Button variant="primary" size="lg" className="px-5">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Search
                      </motion.span>
                    </Button>
                  </InputGroup>

                  <div className="d-flex gap-3 flex-wrap">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline-light"
                        size="lg"
                        className="btn-hero"
                      >
                        Explore Adventures
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="light" size="lg">
                        Watch Video ▶
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </Col>

            <Col lg={5} className="d-none d-lg-block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hero-image-container"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600"
                  alt="Adventure"
                  className="hero-image"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Floating Stats */}
        <motion.div
          className="floating-stats"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Container>
            <Row className="g-4">
              {[
                { number: "500+", label: "Adventures" },
                { number: "50K+", label: "Happy Travelers" },
                { number: "100+", label: "Destinations" },
                { number: "4.9★", label: "Rating" },
              ].map((stat, index) => (
                <Col xs={6} md={3} key={index}>
                  <motion.div
                    className="stat-card text-center"
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <h3 className="fw-bold mb-0">{stat.number}</h3>
                    <p className="mb-0 small">{stat.label}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </motion.div>
      </motion.section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-5 fw-bold">Explore by Category</h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {categories.map((category, index) => (
                  <Col xs={6} md={4} lg={2} key={index}>
                    <motion.div
                      variants={scaleIn}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card className="category-card text-center border-0 shadow-sm h-100">
                        <Card.Body>
                          <motion.div
                            className="category-icon"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          >
                            {category.icon}
                          </motion.div>
                          <h6 className="mt-3 mb-1">{category.name}</h6>
                          <small className="text-muted">
                            {category.count} trips
                          </small>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Featured Adventures */}
      <section className="adventures-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="d-flex justify-content-between align-items-center mb-5">
              <h2 className="fw-bold mb-0">Featured Adventures</h2>
              <Button
                variant="outline-primary"
                onClick={() => navigate("/adventures")}
              >
                View All →
              </Button>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {adventures.map((adventure) => (
                  <Col md={6} lg={3} key={adventure.id}>
                    <motion.div
                      variants={scaleIn}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="adventure-card border-0 shadow-sm h-100 overflow-hidden">
                        <div className="position-relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                          >
                            <Card.Img
                              variant="top"
                              src={adventure.image}
                              className="adventure-image"
                            />
                          </motion.div>
                          <span className="difficulty-badge badge bg-primary position-absolute">
                            {adventure.difficulty}
                          </span>
                        </div>
                        <Card.Body>
                          <Card.Title className="fw-bold">
                            {adventure.title}
                          </Card.Title>
                          <Card.Text className="text-muted small">
                            📍 {adventure.location}
                          </Card.Text>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted small">
                              ⏱️ {adventure.duration}
                            </span>
                            <span className="fw-bold text-primary">
                              {adventure.price}
                            </span>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="primary"
                              className="w-100 mt-3"
                              onClick={() =>
                                navigate("/booking", { state: { adventure } })
                              }
                            >
                              Book Now
                            </Button>
                          </motion.div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-5 fw-bold">What Adventurers Say</h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {testimonials.map((testimonial, index) => (
                  <Col md={4} key={index}>
                    <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                      <Card className="testimonial-card border-0 shadow-sm h-100">
                        <Card.Body>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="rounded-circle me-3"
                              width="50"
                              height="50"
                            />
                            <div>
                              <h6 className="mb-0">{testimonial.name}</h6>
                              <small className="text-muted">
                                {testimonial.location}
                              </small>
                            </div>
                          </div>
                          <div className="mb-2">
                            {"⭐".repeat(testimonial.rating)}
                          </div>
                          <Card.Text className="text-muted">
                            "{testimonial.text}"
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <motion.section
        className="cta-section py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Container>
          <motion.div
            className="cta-content text-center text-white p-5 rounded-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="fw-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Adventure?
            </motion.h2>
            <motion.p
              className="lead mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of adventurers and book your next unforgettable
              experience today!
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="light" size="lg" className="px-5 py-3">
                  Get Started Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>
    </div>
  );
};

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default HomeScreen;
