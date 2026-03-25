import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const DesertCamping = () => {
  const activityData = {
    name: "Desert Camping Expedition",
    images: [
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
      "https://images.unsplash.com/photo-1513415277498-4c8f5c0f60b0?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    ],
    duration: "3 Days",
    difficulty: "Medium",
    basePrice: 549,
    locations: [
      "Sahara Desert, Morocco",
      "Wadi Rum, Jordan",
      "Thar Desert, India",
      "Atacama Desert, Chile",
      "Dubai Desert, UAE",
    ],
    history:
      "Desert camping offers a unique adventure in some of Earth's most extreme and beautiful landscapes. Experience the vast silence of endless sand dunes, witness spectacular sunsets painting the desert in golden hues, and sleep under the clearest star-filled skies you've ever seen. Our desert camping expeditions combine traditional Bedouin hospitality with modern safety standards. Ride camels across rolling dunes, learn about desert survival, enjoy traditional music around campfires, and discover the surprising life that thrives in these arid environments.",
    highlights: [
      "Camel riding experience",
      "Bedouin-style camping",
      "Sand dune exploration",
      "Spectacular stargazing",
      "Desert sunset viewing",
      "Traditional desert cuisine",
      "Cultural performances",
      "Desert navigation skills",
    ],
    included: [
      "3 days desert camping",
      "Desert guide services",
      "Camel ride experience",
      "Traditional Bedouin tent",
      "Sleeping arrangements",
      "All meals (traditional cuisine)",
      "Campfire entertainment",
      "Water and supplies",
      "4x4 desert transport",
      "Traditional tea ceremonies",
    ],
    notIncluded: [
      "City accommodation",
      "Transportation to desert",
      "Travel insurance",
      "Personal desert gear",
      "Sun protection items",
      "Camera equipment",
      "Alcoholic drinks",
      "Additional activities",
      "Tips for guides and drivers",
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

export default DesertCamping;
