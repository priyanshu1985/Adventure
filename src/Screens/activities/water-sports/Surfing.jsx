import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const Surfing = () => {
  const activityData = {
    name: "Surfing Experience",
    images: [
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800",
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800",
      "https://images.unsplash.com/photo-1537519646099-335112cc5ead?w=800",
      "https://images.unsplash.com/photo-1470180728606-6281aa160dc5?w=800",
    ],
    duration: "5 Days",
    difficulty: "Medium",
    basePrice: 699,
    locations: [
      "Bali, Indonesia",
      "Gold Coast, Australia",
      "Hawaii, USA",
      "Goa, India",
      "Portugal",
    ],
    history:
      "Surfing originated in ancient Polynesia and has become one of the world's most popular water sports. Learn to ride the waves with our expert surf instructors in some of the planet's best surfing destinations. Whether you're a complete beginner or looking to improve your skills, our surf camps offer the perfect blend of instruction, practice, and beach lifestyle. Experience the thrill of catching your first wave and the joy of riding the ocean's energy.",
    highlights: [
      "Professional surf coaching",
      "All skill levels welcome",
      "Premium surfboards provided",
      "Video analysis of your surfing",
      "Beach safety training",
      "Sunset surf sessions",
      "Surf theory workshops",
      "Beachfront accommodation options",
    ],
    included: [
      "5 days of surf lessons",
      "Professional surf instructor",
      "Surfboard and wetsuit rental",
      "Video analysis coaching",
      "Beach transportation",
      "Surf theory session",
      "Photos and videos of your surfing",
      "Certificate of completion",
      "Welcome beach BBQ",
    ],
    notIncluded: [
      "Flights to destination",
      "Accommodation (can be arranged)",
      "Meals",
      "Travel insurance",
      "Personal expenses",
      "Additional surf sessions",
      "Board purchase",
      "Medical expenses",
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

export default Surfing;
