import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const MountainTrekking = () => {
  const activityData = {
    name: "Mountain Trekking Expedition",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
    ],
    duration: "7 Days",
    difficulty: "Hard",
    basePrice: 1299,
    locations: [
      "Himalayas, Nepal",
      "Patagonia, Chile",
      "Swiss Alps, Switzerland",
      "Kilimanjaro, Tanzania",
      "Rocky Mountains, USA",
    ],
    history:
      "Mountain trekking has been a way for humans to explore and connect with the majesty of high-altitude landscapes for centuries. Our guided mountain treks take you through some of the world's most spectacular mountain ranges, offering breathtaking views, challenging terrain, and an unforgettable sense of accomplishment. Led by experienced local guides who know every trail and peak, you'll journey through alpine meadows, cross mountain passes, and camp under star-filled skies. This is more than just a trek—it's a transformative adventure that tests your limits while rewarding you with nature's most spectacular vistas.",
    highlights: [
      "Professional mountain guides",
      "Stunning Himalayan views",
      "Acclimatization schedule",
      "Traditional mountain villages",
      "Buddhist monasteries visits",
      "Summit celebration",
      "Mountain photography spots",
      "Experienced support team",
    ],
    included: [
      "7 days guided trekking",
      "Experienced trek leader",
      "All permits and fees",
      "Porter services",
      "Mountain tent accommodation",
      "All meals during trek",
      "Sleeping bag and mat",
      "First aid kit and oxygen",
      "Trekking poles",
      "Certificate of completion",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa fees",
      "Travel insurance",
      "Personal trekking gear",
      "Accommodation in Kathmandu",
      "Tips for guides and porters",
      "Personal expenses",
      "Emergency evacuation",
      "Hot showers on trek",
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

export default MountainTrekking;
