import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const WhiteWaterRafting = () => {
  const activityData = {
    name: "White Water Rafting",
    images: [
      "https://images.unsplash.com/photo-1598808503491-ebbab960d4c7?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800",
    ],
    duration: "2 Days",
    difficulty: "Hard",
    basePrice: 449,
    locations: [
      "Rishikesh, India",
      "Colorado River, USA",
      "Zambezi River, Zimbabwe",
      "Futaleufú River, Chile",
      "Trishuli River, Nepal",
    ],
    history:
      "White water rafting emerged as an adventure sport in the 1970s and has become one of the most exhilarating water-based activities worldwide. Navigate through rushing rapids, tackle challenging waves, and experience the raw power of river currents with our expert rafting guides. From heart-pumping class IV rapids to calmer sections perfect for swimming, our white water rafting adventures offer the perfect combination of adrenaline, teamwork, and natural beauty. Safety is our top priority, with experienced guides and top-quality equipment ensuring an unforgettable yet secure experience.",
    highlights: [
      "Class III & IV rapids",
      "Professional river guides",
      "Safety briefing and training",
      "All rafting equipment included",
      "Cliff jumping opportunities",
      "River swimming breaks",
      "Riverside camping (2-day trip)",
      "Action photography included",
    ],
    included: [
      "2 days river rafting",
      "Certified rafting guide",
      "Rafting boat and paddles",
      "Life jacket and helmet",
      "Wetsuit (seasonal)",
      "Safety equipment",
      "Riverside camping setup",
      "Meals during expedition",
      "Action photos and videos",
      "Transportation from meeting point",
    ],
    notIncluded: [
      "Travel to meeting point",
      "Personal travel insurance",
      "Accommodation before/after trip",
      "Personal items",
      "Waterproof camera",
      "Tips for guides",
      "Medical expenses",
      "Extra activities",
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

export default WhiteWaterRafting;
