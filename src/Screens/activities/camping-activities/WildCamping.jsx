import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const WildCamping = () => {
  const activityData = {
    name: "Wild Camping Expedition",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
      "https://images.unsplash.com/photo-1537565732260-e2a610046b10?w=800",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800",
    ],
    duration: "5 Days",
    difficulty: "Medium",
    basePrice: 599,
    locations: [
      "Scottish Highlands",
      "Norwegian Wilderness",
      "Patagonia, Argentina",
      "Canadian Rockies",
      "Iceland Highlands",
    ],
    history:
      "Wild camping connects us to our ancestral roots, offering an authentic way to experience nature without the barriers of established campgrounds. Sleep under the stars in remote wilderness locations, wake to sunrise over untouched landscapes, and experience true solitude in nature's embrace. Our guided wild camping expeditions teach essential survival skills, leave-no-trace principles, and wilderness navigation while ensuring your safety throughout the adventure. This is camping in its purest form—you, nature, and the essentials.",
    highlights: [
      "Remote wilderness locations",
      "Expert wilderness guides",
      "Bushcraft skills training",
      "Wildlife observation",
      "Stargazing opportunities",
      "Campfire cooking",
      "Navigation training",
      "Leave-no-trace certification",
    ],
    included: [
      "5 days guided expedition",
      "Wilderness expert guide",
      "High-quality camping tent",
      "Sleeping bag and mat",
      "Camping cooking equipment",
      "Water filtration system",
      "First aid kit",
      "All meals and supplies",
      "Emergency communication device",
      "Wilderness skills workshop",
    ],
    notIncluded: [
      "Travel to meeting point",
      "Personal backpack",
      "Hiking boots",
      "Personal clothing",
      "Travel insurance",
      "Personal items",
      "Additional snacks",
      "Camera equipment",
      "Tips for guides",
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

export default WildCamping;
