import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const Paragliding = () => {
  const activityData = {
    name: "Paragliding Experience",
    images: [
      "https://images.unsplash.com/photo-1512553989886-c25b6a3e5e30?w=800",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    ],
    duration: "3 Days",
    difficulty: "Medium",
    basePrice: 649,
    locations: [
      "Interlaken, Switzerland",
      "Pokhara, Nepal",
      "Ölüdeniz, Turkey",
      "Queenstown, New Zealand",
      "Bir Billing, India",
    ],
    history:
      "Paragliding emerged in the 1980s as an evolution of parachuting and hang gliding, offering one of the most accessible forms of free flight. Soar like a bird over stunning landscapes, feeling the thermal currents lift you higher as you take in panoramic views of mountains, valleys, and lakes below. Our tandem paragliding flights are perfect for first-timers, with experienced pilots handling all technical aspects while you enjoy the breathtaking sensation of flight. For those seeking more, we offer multi-day courses leading to solo certification.",
    highlights: [
      "Tandem flights with certified pilots",
      "Breathtaking aerial views",
      "Safety briefing included",
      "Action camera footage",
      "Certificate of flight",
      "Thermal flying experience",
      "Launch from mountain peaks",
      "Professional instruction",
    ],
    included: [
      "3 paragliding flights",
      "Certified tandem pilot",
      "All paragliding equipment",
      "Safety gear and harness",
      "Pre-flight training",
      "Transportation to launch site",
      "GoPro video recording",
      "Flight certificate",
      "Photo package",
      "Insurance coverage",
    ],
    notIncluded: [
      "Accommodation",
      "Meals",
      "Travel to location",
      "Travel insurance",
      "Personal items",
      "Additional flights",
      "Weather delay compensation",
      "Pilot tips",
      "Solo course upgrade",
    ],
  };

  return (
    <>
      <Header />
      <BookingLayout adventure={activityData} />
      <Footer />
    </>
  );
};

export default Paragliding;
