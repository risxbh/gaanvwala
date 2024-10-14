import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Gallery from "./components/header/gallery/Gallery";
import GalleryPeopleSay from "./components/header/galleryPeopleSay/GalleryPeopleSay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MissionVision from "./components/header/missionVision/MissionVision";
import Home from "./pages/Home";
import Header from "./components/header/header/Header";
import HeaderNavbar from "./components/header/headerNavbar/HeaderNavbar";
import Footer from "./pages/components/Footer";
import FounderPage from "./pages/foundersPage/FounderPage";
import Contacts from "./pages/contacts/Contacts";
import BecomePartner from "./pages/becomePartner/BecomePartner";
import ExpertsPage from "./pages/expertsPage/ExpertsPage";
import ProductServicesPage from "./pages/productServices/productServices";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
      setIsTab(window.innerWidth < 1080);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <BrowserRouter>
      <HeaderNavbar />
      <Routes>
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/founders" element={<FounderPage />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="/experts" element={<ExpertsPage />} />
        <Route path="/product-services" element={<ProductServicesPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
