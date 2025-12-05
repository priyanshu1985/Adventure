import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./Screens/Auth.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
