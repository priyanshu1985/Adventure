// Reviews.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "../../styles/Reviews.css";

const Reviews = () => {
  const [rating, setRating] = useState(5);

  const reviews = [
    {
      id: 1,
      name: "Sarah Williams",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      date: "2 weeks ago",
      adventure: "Mountain Trekking",
      comment:
        "Absolutely incredible experience! The guides were professional and the views were breathtaking. Highly recommend!",
    },
    {
      id: 2,
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      date: "1 month ago",
      adventure: "Desert Safari",
      comment:
        "Best adventure of my life! Everything was perfectly organized and the sunset in the desert was magical.",
    },
    {
      id: 3,
      name: "Emma Thompson",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      rating: 4,
      date: "3 weeks ago",
      adventure: "Jungle Expedition",
      comment:
        "Amazing journey through the Amazon. Saw incredible wildlife and learned so much about the ecosystem.",
    },
  ];

  return (
    <>
      <Header />
      <div className="reviews-page">
        <motion.section
          className="reviews-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <h1>Customer Reviews</h1>
            <p>See what our adventurers have to say</p>
          </Container>
        </motion.section>

        <Container className="my-5">
          <Row>
            <Col lg={8}>
              <h3 className="mb-4">Recent Reviews</h3>
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="review-card mb-4">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="review-avatar"
                        />
                        <div className="ms-3">
                          <h5 className="mb-0">{review.name}</h5>
                          <small className="text-muted">{review.date}</small>
                        </div>
                        <div className="ms-auto">
                          <div className="rating">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="star filled">
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="adventure-tag">{review.adventure}</p>
                      <p className="review-comment">{review.comment}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </Col>

            <Col lg={4}>
              <Card className="write-review-card">
                <Card.Body>
                  <h4>Write a Review</h4>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Adventure</Form.Label>
                      <Form.Select>
                        <option>Select adventure</option>
                        <option>Mountain Trekking</option>
                        <option>Desert Safari</option>
                        <option>Jungle Expedition</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Rating</Form.Label>
                      <div className="rating-input">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`star ${star <= rating ? "filled" : ""}`}
                            onClick={() => setRating(star)}
                            style={{ cursor: "pointer" }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Share your experience..."
                      />
                    </Form.Group>
                    <Button variant="primary" className="w-100">
                      Submit Review
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
