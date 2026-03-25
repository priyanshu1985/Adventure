import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const ScubaDiving = () => {
  const activityData = {
    name: "Scuba Diving Adventure",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800",
      "https://images.unsplash.com/photo-1570116735726-0e9a0ce4ce34?w=800",
    ],
    duration: "3 Days",
    difficulty: "Medium",
    basePrice: 899,
    locations: [
      "Great Barrier Reef, Australia",
      "Red Sea, Egypt",
      "Maldives",
      "Andaman Islands, India",
    ],
    history:
      "Scuba diving has evolved from ancient breath-hold diving techniques to modern compressed air systems. Experience the underwater world like never before with our professional PADI-certified instructors. Discover vibrant coral reefs, encounter marine life, and explore the mysteries beneath the waves. Our scuba diving adventures combine safety, education, and excitement to create unforgettable memories in some of the world's most beautiful diving destinations.",
    highlights: [
      "PADI certification course included",
      "Professional diving instructors",
      "High-quality diving equipment provided",
      "Explore coral reefs and marine life",
      "Underwater photography opportunities",
      "Small group sizes (max 6 divers)",
      "Multiple dive sites",
      "Safety boat and support crew",
    ],
    included: [
      "PADI Open Water certification",
      "All diving equipment and gear",
      "Wetsuit and fins",
      "Professional instructor guidance",
      "Boat transfers to dive sites",
      "Underwater photography session",
      "Dive logbook",
      "Insurance coverage",
      "Light refreshments on boat",
    ],
    notIncluded: [
      "International flights",
      "Accommodation",
      "Meals on land",
      "Personal travel insurance",
      "Medical certificate (if required)",
      "Tips for instructors",
      "Additional dives beyond package",
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

export default ScubaDiving;
