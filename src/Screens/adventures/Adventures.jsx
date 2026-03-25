// Adventures.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "../../styles/Adventures.css";

const Adventures = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const adventures = [
    // Mountain Activities
    {
      id: 1,
      title: "Mountain Trekking",
      location: "Himalayas, Nepal",
      difficulty: "Hard",
      duration: "7 Days",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      price: "$1,299",
      category: "mountain",
      route: "/activities/mountain-trekking",
    },
    {
      id: 2,
      title: "Rock Climbing",
      location: "Yosemite, USA",
      difficulty: "Hard",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800",
      price: "$799",
      category: "mountain",
      route: "/activities/rock-climbing",
    },
    {
      id: 3,
      title: "Alpine Skiing",
      location: "Swiss Alps",
      difficulty: "Medium",
      duration: "6 Days",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      price: "$1,499",
      category: "mountain",
      route: "/activities/skiing",
    },
    {
      id: 4,
      title: "Paragliding",
      location: "Interlaken, Switzerland",
      difficulty: "Medium",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1512553989886-c25b6a3e5e30?w=800",
      price: "$649",
      category: "mountain",
      route: "/activities/paragliding",
    },
    // Water Sports
    {
      id: 5,
      title: "Scuba Diving",
      location: "Great Barrier Reef",
      difficulty: "Medium",
      duration: "3 Days",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      price: "$899",
      category: "water",
      route: "/activities/scuba-diving",
    },
    {
      id: 6,
      title: "Surfing",
      location: "Bali, Indonesia",
      difficulty: "Medium",
      duration: "5 Days",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800",
      price: "$699",
      category: "water",
      route: "/activities/surfing",
    },
    {
      id: 7,
      title: "Sea Kayaking",
      location: "Norwegian Fjords",
      difficulty: "Easy",
      duration: "4 Days",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0870cc?w=800",
      price: "$549",
      category: "water",
      route: "/activities/kayaking",
    },
    {
      id: 8,
      title: "White Water Rafting",
      location: "Rishikesh, India",
      difficulty: "Hard",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1598808503491-ebbab960d4c7?w=800",
      price: "$449",
      category: "water",
      route: "/activities/white-water-rafting",
    },
    // Camping Activities
    {
      id: 9,
      title: "Wild Camping",
      location: "Scottish Highlands",
      difficulty: "Medium",
      duration: "5 Days",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      price: "$599",
      category: "camping",
      route: "/activities/wild-camping",
    },
    {
      id: 10,
      title: "Beach Camping",
      location: "Goa, India",
      difficulty: "Easy",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800",
      price: "$449",
      category: "camping",
      route: "/activities/beach-camping",
    },
    {
      id: 11,
      title: "Forest Camping",
      location: "Black Forest, Germany",
      difficulty: "Easy",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
      price: "$499",
      category: "camping",
      route: "/activities/forest-camping",
    },
    {
      id: 12,
      title: "Desert Camping",
      location: "Sahara Desert, Morocco",
      difficulty: "Medium",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
      price: "$549",
      category: "camping",
      route: "/activities/desert-camping",
    },
  ];

  const filteredAdventures =
    filter === "all"
      ? adventures
      : adventures.filter((adv) => adv.category === filter);

  return (
    <>
      <Header />
      <div className="adventures-page">
        <motion.section
          className="adventures-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <h1>Explore Adventures</h1>
            <p>Find your next extraordinary journey</p>
          </Container>
        </motion.section>

        <Container className="my-5">
          <div className="filter-section mb-4">
            <Form.Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Adventures</option>
              <option value="mountain">Mountain Activities</option>
              <option value="water">Water Sports</option>
              <option value="camping">Camping</option>
            </Form.Select>
          </div>

          <Row>
            {filteredAdventures.length === 0 ? (
              <Col className="text-center py-5">
                <h3>No adventures found</h3>
                <p>Try adjusting your filters</p>
              </Col>
            ) : (
              filteredAdventures.map((adventure, index) => (
                <Col lg={4} md={6} className="mb-4" key={adventure.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="adventure-card h-100">
                      <Card.Img variant="top" src={adventure.image} />
                      <Card.Body>
                        <Card.Title>{adventure.title}</Card.Title>
                        <Card.Text>
                          <i className="bi bi-geo-alt"></i> {adventure.location}
                        </Card.Text>
                        <div className="adventure-details">
                          <span className="badge">{adventure.difficulty}</span>
                          <span>{adventure.duration}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <h5 className="price mb-0">{adventure.price}</h5>
                          <Button
                            variant="primary"
                            onClick={() => navigate(adventure.route)}
                          >
                            Book Now
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Adventures;
