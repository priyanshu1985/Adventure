import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const ForestCamping = () => {
  const activityData = {
    name: "Forest Camping Experience",
    images: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
      "https://images.unsplash.com/photo-1537565732260-e2a610046b10?w=800",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=800",
    ],
    duration: "4 Days",
    difficulty: "Easy",
    basePrice: 499,
    locations: [
      "Black Forest, Germany",
      "Redwood Forest, USA",
      "Amazon Rainforest, Brazil",
      "Taman Negara, Malaysia",
      "Banff National Park, Canada",
    ],
    history:
      "Forest camping immerses you in the heart of nature's most diverse ecosystems. Surrounded by towering trees, the sounds of wildlife, and the fresh scent of pine, forest camping offers a peaceful retreat from modern life. Our guided forest camping trips take you deep into protected woodlands where you'll learn about forest ecology, practice outdoor skills, and experience the therapeutic benefits of forest bathing. Explore hidden trails, discover native wildlife, and sleep beneath a canopy of ancient trees in some of the world's most beautiful forest settings.",
    highlights: [
      "Deep forest camping sites",
      "Nature interpretation walks",
      "Wildlife tracking",
      "Forest bathing sessions",
      "Medicinal plant identification",
      "Night sounds experience",
      "Forest photography",
      "Eco-friendly camping practices",
    ],
    included: [
      "4 days forest camping",
      "Naturalist guide",
      "Forest camping permit",
      "Camping tent and equipment",
      "Sleeping bag and mat",
      "All meals (campfire cooking)",
      "Nature walks and hikes",
      "Wildlife tracking session",
      "Forest ecology workshop",
      "Drinking water and supplies",
    ],
    notIncluded: [
      "Transport to forest",
      "Personal backpack",
      "Hiking boots",
      "Rain gear",
      "Travel insurance",
      "Personal clothing",
      "Camera equipment",
      "Insect repellent",
      "Guide tips",
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

export default ForestCamping;
