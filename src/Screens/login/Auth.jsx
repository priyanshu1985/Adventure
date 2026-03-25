// AuthPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import config from "../../config.js";
import "../../styles/auth.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isLogin
        ? config.ENDPOINTS.AUTH.LOGIN
        : config.ENDPOINTS.AUTH.REGISTER;
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const response = await fetch(`${config.API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage if login
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        console.log(`${isLogin ? "Login" : "Sign up"} successful:`, data);
        navigate("/home");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        "Failed to connect to server. Please check if backend is running.",
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(""); // Clear any existing errors
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-page">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      <Container>
        <div className="auth-container">
          <motion.div
            className="auth-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Panel - Information */}
            <motion.div
              className={`auth-panel info-panel ${
                isLogin ? "login-mode" : "signup-mode"
              }`}
              initial={false}
              animate={{
                x: isLogin ? "0%" : "100%",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="panel-content">
                <AnimatePresence mode="wait">
                  {isLogin ? (
                    <motion.div
                      key="login-info"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3 }}
                      className="info-content"
                    >
                      <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        🏔️ New Here?
                      </motion.h2>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Join our community of adventurers and unlock exclusive
                        access to the world's most thrilling experiences!
                      </motion.p>
                      <motion.ul
                        className="benefits-list"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <li>🌍 Access to 500+ Adventures</li>
                        <li>💰 Exclusive Member Discounts</li>
                        <li>🎯 Personalized Recommendations</li>
                        <li>📱 Track Your Adventure Journey</li>
                      </motion.ul>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="light"
                          className="panel-btn"
                          onClick={toggleForm}
                        >
                          Sign Up Now
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signup-info"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="info-content"
                    >
                      <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        🎒 Welcome Back!
                      </motion.h2>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Your next adventure awaits! Log in to continue exploring
                        amazing destinations and experiences.
                      </motion.p>
                      <motion.ul
                        className="benefits-list"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <li>🗺️ View Your Saved Adventures</li>
                        <li>🎫 Manage Your Bookings</li>
                        <li>⭐ Read Your Reviews</li>
                        <li>📊 Track Your Progress</li>
                      </motion.ul>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="light"
                          className="panel-btn"
                          onClick={toggleForm}
                        >
                          Log In
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Panel - Forms */}
            <div
              className={`auth-panel form-panel ${
                !isLogin ? "signup-mode" : ""
              }`}
            >
              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div
                    key="login-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="form-content"
                  >
                    <motion.div
                      className="form-header"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <div className="form-icon">🏔️</div>
                      <h2>Welcome Back</h2>
                      <p>Log in to continue your adventure</p>
                    </motion.div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="alert alert-danger mb-3"
                        style={{ fontSize: "14px" }}
                      >
                        {error}
                      </motion.div>
                    )}

                    <Form onSubmit={handleSubmit} className="auth-form">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>✉️</InputGroup.Text>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                      </motion.div>

                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>🔒</InputGroup.Text>
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Enter your password"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                            />
                            <Button
                              variant="outline-secondary"
                              onClick={() => setShowPassword(!showPassword)}
                              className="password-toggle"
                            >
                              {showPassword ? "👁️" : "👁️‍🗨️"}
                            </Button>
                          </InputGroup>
                        </Form.Group>
                      </motion.div>

                      <motion.div
                        className="form-options"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                          className="remember-me"
                        />
                        <a href="#forgot" className="forgot-password">
                          Forgot Password?
                        </a>
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <motion.div
                          whileHover={{ scale: loading ? 1 : 1.02 }}
                          whileTap={{ scale: loading ? 1 : 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="submit-btn w-100"
                            disabled={loading}
                          >
                            {loading ? "Logging In..." : "Log In"}
                          </Button>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="social-login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p className="separator">Or continue with</p>
                        <div className="social-buttons">
                          <motion.button
                            type="button"
                            className="social-btn google"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🔍 Google
                          </motion.button>
                          <motion.button
                            type="button"
                            className="social-btn facebook"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            📘 Facebook
                          </motion.button>
                        </div>
                      </motion.div>
                    </Form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="form-content"
                  >
                    <motion.div
                      className="form-header"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <div className="form-icon">🎒</div>
                      <h2>Join the Adventure</h2>
                      <p>Create your account and start exploring</p>
                    </motion.div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="alert alert-danger mb-3"
                        style={{ fontSize: "14px" }}
                      >
                        {error}
                      </motion.div>
                    )}

                    <Form onSubmit={handleSubmit} className="auth-form">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>👤</InputGroup.Text>
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                      </motion.div>

                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>✉️</InputGroup.Text>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                      </motion.div>

                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>🔒</InputGroup.Text>
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Create a password"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                            />
                            <Button
                              variant="outline-secondary"
                              onClick={() => setShowPassword(!showPassword)}
                              className="password-toggle"
                            >
                              {showPassword ? "👁️" : "👁️‍🗨️"}
                            </Button>
                          </InputGroup>
                        </Form.Group>
                      </motion.div>

                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label>Confirm Password</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>🔐</InputGroup.Text>
                            <Form.Control
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              placeholder="Confirm your password"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              required
                            />
                            <Button
                              variant="outline-secondary"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="password-toggle"
                            >
                              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                            </Button>
                          </InputGroup>
                        </Form.Group>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Form.Check
                          type="checkbox"
                          label="I agree to the Terms & Conditions"
                          className="mb-3"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <motion.div
                          whileHover={{ scale: loading ? 1 : 1.02 }}
                          whileTap={{ scale: loading ? 1 : 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="submit-btn w-100"
                            disabled={loading}
                          >
                            {loading ? "Creating Account..." : "Create Account"}
                          </Button>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="social-login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <p className="separator">Or sign up with</p>
                        <div className="social-buttons">
                          <motion.button
                            type="button"
                            className="social-btn google"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🔍 Google
                          </motion.button>
                          <motion.button
                            type="button"
                            className="social-btn facebook"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            📘 Facebook
                          </motion.button>
                        </div>
                      </motion.div>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default AuthPage;
