// AppNavigator.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Screens/home/Home.jsx";
import Auth from "../Screens/login/Auth.jsx";
import Adventures from "../Screens/adventures/Adventures.jsx";
import Destinations from "../Screens/destinations/Destinations.jsx";
import AboutUs from "../Screens/about/AboutUs.jsx";
import Reviews from "../Screens/reviews/Reviews.jsx";
import Contact from "../Screens/contact/Contact.jsx";
import Booking from "../Screens/activities/Booking.jsx";

// Water Sports Activities
import ScubaDiving from "../Screens/activities/water-sports/ScubaDiving.jsx";
import Surfing from "../Screens/activities/water-sports/Surfing.jsx";
import Kayaking from "../Screens/activities/water-sports/Kayaking.jsx";
import WhiteWaterRafting from "../Screens/activities/water-sports/WhiteWaterRafting.jsx";

// Mountain Activities
import MountainTrekking from "../Screens/activities/mountain-activities/MountainTrekking.jsx";
import RockClimbing from "../Screens/activities/mountain-activities/RockClimbing.jsx";
import Skiing from "../Screens/activities/mountain-activities/Skiing.jsx";
import Paragliding from "../Screens/activities/mountain-activities/Paragliding.jsx";

// Camping Activities
import WildCamping from "../Screens/activities/camping-activities/WildCamping.jsx";
import BeachCamping from "../Screens/activities/camping-activities/BeachCamping.jsx";
import ForestCamping from "../Screens/activities/camping-activities/ForestCamping.jsx";
import DesertCamping from "../Screens/activities/camping-activities/DesertCamping.jsx";

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/adventures" element={<Adventures />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />

      {/* Water Sports Activities */}
      <Route path="/activities/scuba-diving" element={<ScubaDiving />} />
      <Route path="/activities/surfing" element={<Surfing />} />
      <Route path="/activities/kayaking" element={<Kayaking />} />
      <Route
        path="/activities/white-water-rafting"
        element={<WhiteWaterRafting />}
      />

      {/* Mountain Activities */}
      <Route
        path="/activities/mountain-trekking"
        element={<MountainTrekking />}
      />
      <Route path="/activities/rock-climbing" element={<RockClimbing />} />
      <Route path="/activities/skiing" element={<Skiing />} />
      <Route path="/activities/paragliding" element={<Paragliding />} />

      {/* Camping Activities */}
      <Route path="/activities/wild-camping" element={<WildCamping />} />
      <Route path="/activities/beach-camping" element={<BeachCamping />} />
      <Route path="/activities/forest-camping" element={<ForestCamping />} />
      <Route path="/activities/desert-camping" element={<DesertCamping />} />
    </Routes>
  );
};

export default AppNavigator;
