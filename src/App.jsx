import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import PricingPlans from "./components/PricingPlans";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/Hero"));
const InstallAppSection = lazy(() => import("./components/InstallAppSection"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Footer = lazy(() => import("./components/Footer"));
const SignUp = lazy(() => import("./components/Signup"));

// Simple fallback loader
const Loading = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="loader" />
    <style>
      {`
        .loader {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #4f46e5;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);


const AppWrapper = () => {
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup";

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!isSignupPage && (
        <>
          <InstallAppSection />
          <PricingPlans />
          <Testimonials />
        </>
      )}

      <Footer />
    </Suspense>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
