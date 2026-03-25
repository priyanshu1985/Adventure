// Booking.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import BookingLayout from "../../components/common/BookingLayout.jsx";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const adventure = location.state?.adventure;

  // Redirect if no adventure data
  React.useEffect(() => {
    if (!adventure) {
      navigate("/home");
    }
  }, [adventure, navigate]);

  return (
    <>
      <Header />
      <BookingLayout adventure={adventure} />
      <Footer />
    </>
  );
};

export default Booking;
