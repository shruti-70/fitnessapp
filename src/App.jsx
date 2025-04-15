import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import InstallAppSection from "./components/InstallAppSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SignUp from "./components/Signup";

const AppWrapper = () => {
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup";

  return (
    <>
      
      <Navbar />

      <Routes>
        
        <Route path="/" element={<HeroSection />} />

        {/* Sign-up page */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>

  
      {!isSignupPage && (
        <>
          <InstallAppSection />
          <Testimonials />
        </>
      )}

      {/* Footer appears on all pages */}
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
