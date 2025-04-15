import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/Hero"));
const InstallAppSection = lazy(() => import("./components/InstallAppSection"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Footer = lazy(() => import("./components/Footer"));
const SignUp = lazy(() => import("./components/Signup"));

// Simple fallback loader
const Loading = () => <div>Loading...</div>;

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
