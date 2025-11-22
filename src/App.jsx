import { useState } from "react";
import Home from "./Screens/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./Screens/Auth.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Auth />
      {/* <Header />
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;
