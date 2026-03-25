import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const Skiing = () => {
  const activityData = {
    name: "Alpine Skiing Experience",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800",
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800",
    ],
    duration: "6 Days",
    difficulty: "Medium",
    basePrice: 1499,
    locations: [
      "Alps, Switzerland",
      "Aspen, USA",
      "Whistler, Canada",
      "Niseko, Japan",
      "Zermatt, Switzerland",
    ],
    history:
      "Skiing has been a method of snow travel for over 5,000 years and has evolved into one of the world's most popular winter sports. Our alpine skiing packages offer access to world-class ski resorts with pristine slopes, modern facilities, and stunning mountain scenery. Whether you're a beginner learning to pizza-wedge or an advanced skier carving down black diamond runs, our professional instructors will help you improve your technique and confidence. Experience the thrill of gliding down snow-covered mountains with the wind in your face and breathtaking alpine views all around.",
    highlights: [
      "Professional ski instructors",
      "Access to world-class slopes",
      "All skill levels welcome",
      "Modern ski equipment",
      "Après-ski activities",
      "Mountain restaurant access",
      "Scenic lift rides",
      "Video analysis coaching",
    ],
    included: [
      "6 days ski pass",
      "Professional ski lessons (3 days)",
      "Ski equipment rental",
      "Ski boots and poles",
      "Helmet and goggles",
      "Chairlift access",
      "Ski school certificate",
      "Welcome dinner",
      "Group photo package",
      "Resort shuttle service",
    ],
    notIncluded: [
      "Flights to resort",
      "Accommodation",
      "Daily meals",
      "Travel insurance",
      "Personal ski gear",
      "Ski clothing rental",
      "Additional lift tickets",
      "Après-ski activities",
      "Tips for instructors",
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

export default Skiing;
