// BookingLayout.jsx - Enhanced Production Version
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
  Tabs,
  Tab,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../../styles/Booking.css";

const BookingLayout = ({ adventure }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    participants: 1,
    specialRequests: "",
    location: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.location) {
      alert("Please select a location");
      return;
    }
    console.log("Booking submitted:", { ...formData, adventure });
    alert("Booking request submitted successfully! We'll contact you shortly.");
    navigate("/home");
  };

  if (!adventure) {
    return (
      <Container className="py-5">
        <h2>Adventure not found</h2>
        <Button onClick={() => navigate("/home")}>Go Back Home</Button>
      </Container>
    );
  }

  const images = adventure.images || [adventure.image];
  const locations = adventure.locations || [adventure.location];
  const history =
    adventure.history ||
    "Experience the thrill of a lifetime with this amazing adventure. Perfect for adventure seekers looking to create unforgettable memories.";
  const highlights = adventure.highlights || [
    "Professional guides and instructors",
    "All necessary equipment provided",
    "Safety briefing and training",
    "Memorable experiences",
  ];
  const included = adventure.included || [
    "Accommodation",
    "Meals (Breakfast, Lunch, Dinner)",
    "Transportation",
    "Professional Guide",
    "Safety Equipment",
  ];
  const notIncluded = adventure.notIncluded || [
    "International Flights",
    "Personal Insurance",
    "Personal Expenses",
    "Tips and Gratuities",
  ];

  const basePrice =
    adventure.basePrice ||
    parseInt((adventure.price || "0").replace(/[^0-9]/g, ""));
  const totalGuests = parseInt(formData.participants);
  const subtotal = basePrice * totalGuests;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  return (
    <div className="booking-page">
      {/* Breadcrumb */}
      <Container className="breadcrumb-section">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a
                onClick={() => navigate("/home")}
                style={{ cursor: "pointer" }}
              >
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a
                onClick={() => navigate("/adventures")}
                style={{ cursor: "pointer" }}
              >
                Adventures
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {adventure.name || adventure.title}
            </li>
          </ol>
        </nav>
      </Container>

      <Container className="my-4">
        <Row>
          {/* Left Section - Activity Details */}
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Activity Header */}
              <div className="activity-header mb-4">
                <h1 className="activity-title">
                  {adventure.name || adventure.title}
                </h1>
                <div className="activity-meta d-flex flex-wrap gap-3 align-items-center">
                  <span className="meta-item">
                    <i className="bi bi-geo-alt-fill text-primary"></i>{" "}
                    {locations.length} Location{locations.length > 1 ? "s" : ""}{" "}
                    Available
                  </span>
                  <span className="meta-item">
                    <i className="bi bi-clock-fill text-primary"></i>{" "}
                    {adventure.duration}
                  </span>
                  <Badge
                    bg={
                      adventure.difficulty === "Hard"
                        ? "danger"
                        : adventure.difficulty === "Medium"
                          ? "warning"
                          : "success"
                    }
                  >
                    {adventure.difficulty}
                  </Badge>
                  <span className="price-badge">
                    <strong>${basePrice}</strong> /person
                  </span>
                </div>
              </div>

              {/* Image Gallery */}
              <Card className="gallery-card mb-4">
                <div className="main-image-container">
                  <motion.img
                    key={selectedImage}
                    src={images[selectedImage]}
                    alt={adventure.name || adventure.title}
                    className="main-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {images.length > 1 && (
                  <div className="thumbnail-container">
                    {images.map((img, index) => (
                      <motion.div
                        key={index}
                        className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                        onClick={() => setSelectedImage(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={img} alt={`View ${index + 1}`} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </Card>

              {/* Activity Details Tabs */}
              <Card className="details-card mb-4">
                <Card.Body>
                  <Tabs
                    defaultActiveKey="overview"
                    className="mb-3 custom-tabs"
                  >
                    <Tab
                      eventKey="overview"
                      title={
                        <>
                          <i className="bi bi-info-circle me-2"></i>Overview
                        </>
                      }
                    >
                      <div className="tab-content-section">
                        <h4 className="mb-3">About This Adventure</h4>
                        <p className="lead text-muted">{history}</p>

                        <h5 className="mt-4 mb-3">Highlights</h5>
                        <Row>
                          {highlights.map((item, index) => (
                            <Col md={6} key={index} className="mb-2">
                              <div className="highlight-item">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                <span>{item}</span>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Tab>

                    <Tab
                      eventKey="included"
                      title={
                        <>
                          <i className="bi bi-box-seam me-2"></i>What's Included
                        </>
                      }
                    >
                      <div className="tab-content-section">
                        <Row>
                          <Col md={6}>
                            <h5 className="mb-3 text-success">
                              <i className="bi bi-check-circle me-2"></i>
                              Included
                            </h5>
                            <ul className="inclusion-list">
                              {included.map((item, index) => (
                                <li key={index}>
                                  <i className="bi bi-check2 text-success me-2"></i>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Col>
                          <Col md={6}>
                            <h5 className="mb-3 text-danger">
                              <i className="bi bi-x-circle me-2"></i>Not
                              Included
                            </h5>
                            <ul className="exclusion-list">
                              {notIncluded.map((item, index) => (
                                <li key={index}>
                                  <i className="bi bi-x text-danger me-2"></i>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Tab>

                    <Tab
                      eventKey="locations"
                      title={
                        <>
                          <i className="bi bi-pin-map me-2"></i>Locations (
                          {locations.length})
                        </>
                      }
                    >
                      <div className="tab-content-section">
                        <h5 className="mb-3">Available Locations</h5>
                        <p className="text-muted mb-3">
                          Choose from {locations.length} stunning location
                          {locations.length > 1 ? "s" : ""} for your adventure
                        </p>
                        <Row>
                          {locations.map((loc, index) => (
                            <Col md={6} key={index} className="mb-3">
                              <motion.div
                                className="location-card"
                                whileHover={{
                                  scale: 1.02,
                                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                                }}
                              >
                                <i className="bi bi-geo-alt-fill text-primary"></i>
                                <span>{loc}</span>
                              </motion.div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Right Section - Booking Form */}
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky-booking"
            >
              <Card className="booking-form-card shadow">
                <Card.Body className="p-4">
                  <h4 className="booking-title mb-4">
                    <i className="bi bi-calendar-check me-2"></i>
                    Book Your Adventure
                  </h4>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <i className="bi bi-geo-alt me-2"></i>Select Location *
                      </Form.Label>
                      <Form.Select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="form-select-lg"
                      >
                        <option value="">Choose your location</option>
                        {locations.map((loc, index) => (
                          <option key={index} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <i className="bi bi-person me-2"></i>Full Name *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <i className="bi bi-envelope me-2"></i>Email *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <i className="bi bi-telephone me-2"></i>Phone Number *
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </Form.Group>

                    <Row>
                      <Col md={7}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <i className="bi bi-calendar3 me-2"></i>Date *
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={5}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <i className="bi bi-people me-2"></i>Guests *
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="participants"
                            value={formData.participants}
                            onChange={handleInputChange}
                            min="1"
                            max="20"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        <i className="bi bi-chat-left-text me-2"></i>Special
                        Requests
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Any special requirements..."
                      />
                    </Form.Group>

                    <div className="booking-summary-box mb-4">
                      <h6 className="mb-3">Price Details</h6>
                      <div className="summary-row">
                        <span>
                          ${basePrice} × {formData.participants} guest(s)
                        </span>
                        <strong>${subtotal}</strong>
                      </div>
                      <div className="summary-row">
                        <span>Service fee</span>
                        <strong>${serviceFee}</strong>
                      </div>
                      <hr />
                      <div className="summary-row total-row">
                        <strong>Total</strong>
                        <strong className="total-price">${total}</strong>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="w-100 book-now-btn"
                    >
                      <i className="bi bi-check-circle me-2"></i>
                      Confirm Booking
                    </Button>

                    <p className="text-center mt-3 small text-muted mb-0">
                      <i className="bi bi-shield-check me-1"></i>
                      You won't be charged yet
                    </p>
                  </Form>
                </Card.Body>
              </Card>

              {/* Trust Indicators */}
              <Card className="trust-card mt-3 shadow-sm">
                <Card.Body className="p-3">
                  <div className="trust-item">
                    <i className="bi bi-shield-fill-check"></i>
                    <span>Secure Payment</span>
                  </div>
                  <div className="trust-item">
                    <i className="bi bi-arrow-repeat"></i>
                    <span>Free Cancellation</span>
                  </div>
                  <div className="trust-item">
                    <i className="bi bi-headset"></i>
                    <span>24/7 Support</span>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingLayout;
