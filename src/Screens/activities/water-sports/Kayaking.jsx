import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const Kayaking = () => {
  const activityData = {
    name: "Sea Kayaking Expedition",
    images: [
      "https://images.unsplash.com/photo-1544551763-77ef2d0870cc?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800",
      "https://images.unsplash.com/photo-1545579834-c9c118a0262a?w=800",
    ],
    duration: "4 Days",
    difficulty: "Easy",
    basePrice: 549,
    locations: [
      "Norwegian Fjords",
      "New Zealand Coastline",
      "Croatian Islands",
      "Alaska, USA",
      "Thailand Islands",
    ],
    history:
      "Kayaking has been a traditional mode of water transportation for thousands of years, originating with the Inuit people. Today, sea kayaking offers a unique way to explore coastlines, islands, and marine environments up close. Our guided kayaking expeditions take you through stunning waterways where you'll paddle past dramatic cliffs, hidden caves, and pristine beaches. Experience nature from a kayaker's perspective, observing wildlife and ecosystems in their natural habitat while enjoying a peaceful and eco-friendly adventure.",
    highlights: [
      "Explore hidden coves and caves",
      "Wildlife watching opportunities",
      "Experienced kayaking guides",
      "All equipment provided",
      "Suitable for beginners",
      "Island hopping adventures",
      "Beachside camping (optional)",
      "Photography opportunities",
    ],
    included: [
      "4 days guided kayaking",
      "Professional kayak guide",
      "Kayak and paddle",
      "Life jacket and safety gear",
      "Dry bags for belongings",
      "Basic kayaking instruction",
      "Snacks and water during tours",
      "Transportation to launch sites",
      "Group photos",
    ],
    notIncluded: [
      "International travel",
      "Accommodation",
      "Main meals",
      "Travel insurance",
      "Camping gear (if camping)",
      "Personal items",
      "Gratuities",
      "Optional activities",
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

export default Kayaking;
