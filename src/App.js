import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScriptLoader from "./components/ScriptLoader";
import About from "./pages/About";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./pages/Signup";

function App() {
  const [loading, setLoading] = useState(true);
 useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hiding preloader...");
      setLoading(false);
    }, 1000); // simulate 1 second loading

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <ScriptLoader />
       {loading && (
        <div id="ms-overlay">
          <div className="loader"></div>
        </div>
      )}
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
