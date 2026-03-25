import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const BeachCamping = () => {
  const activityData = {
    name: "Beach Camping Adventure",
    images: [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800",
      "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?w=800",
      "https://images.unsplash.com/photo-1520452112805-c6692c840af0?w=800",
    ],
    duration: "4 Days",
    difficulty: "Easy",
    basePrice: 449,
    locations: [
      "Goa Beaches, India",
      "Byron Bay, Australia",
      "Tulum, Mexico",
      "Zanzibar, Tanzania",
      "Algarve, Portugal",
    ],
    history:
      "Beach camping combines the relaxation of coastal living with the adventure of outdoor camping. Fall asleep to the sound of waves lapping the shore and wake to stunning sunrises over the ocean. Our beach camping experiences offer the perfect blend of adventure and relaxation, with opportunities for swimming, snorkeling, beach games, and coastal exploration. Enjoy fresh seafood cooked over beach bonfires, share stories under starlit skies, and experience the simple joy of beachside living away from the crowds.",
    highlights: [
      "Private beach locations",
      "Ocean-view camping spots",
      "Swimming and snorkeling",
      "Beach bonfire nights",
      "Fresh seafood meals",
      "Sunrise yoga sessions",
      "Beach volleyball",
      "Coastal hiking trails",
    ],
    included: [
      "4 days beach camping",
      "Beach guide services",
      "Beach camping tent setup",
      "Sleeping equipment",
      "All meals (seafood specialties)",
      "Snorkeling equipment",
      "Beach bonfire arrangements",
      "Morning yoga sessions",
      "Beach games equipment",
      "Drinking water supply",
    ],
    notIncluded: [
      "Transportation to beach",
      "Personal beach gear",
      "Swimwear",
      "Sunscreen and toiletries",
      "Travel insurance",
      "Alcoholic beverages",
      "Water sports equipment rental",
      "Personal expenses",
      "Tips for staff",
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

export default BeachCamping;
