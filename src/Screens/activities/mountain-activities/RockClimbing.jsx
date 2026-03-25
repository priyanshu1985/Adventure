import React from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import BookingLayout from "../../../components/common/BookingLayout";

const RockClimbing = () => {
  const activityData = {
    name: "Rock Climbing Adventure",
    images: [
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800",
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800",
      "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    ],
    duration: "4 Days",
    difficulty: "Hard",
    basePrice: 799,
    locations: [
      "Yosemite, USA",
      "Kalymnos, Greece",
      "Railay Beach, Thailand",
      "Dolomites, Italy",
      "El Chorro, Spain",
    ],
    history:
      "Rock climbing has evolved from a mountaineering necessity to one of the world's most thrilling adventure sports. Our rock climbing courses cater to all levels, from beginners learning basic techniques to advanced climbers seeking challenging routes. Under the guidance of certified instructors, you'll master essential climbing skills including belaying, rope management, and technique refinement. Experience the physical and mental challenge of ascending natural rock faces, with each climb offering unique challenges and rewarding views from the summit.",
    highlights: [
      "Certified climbing instructors",
      "All climbing equipment provided",
      "Multiple climbing routes",
      "Technique workshops",
      "Safety training included",
      "Sport and traditional climbing",
      "Stunning cliff-top views",
      "Small group instruction",
    ],
    included: [
      "4 days climbing instruction",
      "Professional climbing guide",
      "All climbing equipment",
      "Harness and helmet",
      "Ropes and carabiners",
      "Climbing shoes rental",
      "Safety briefings",
      "Transportation to climbing sites",
      "Climbing certificate",
      "Group photos",
    ],
    notIncluded: [
      "Accommodation",
      "Meals",
      "Travel to destination",
      "Travel insurance",
      "Personal climbing gear purchase",
      "Medical examination",
      "Tips for instructors",
      "Additional climbing days",
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

export default RockClimbing;
