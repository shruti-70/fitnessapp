import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // 
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = ["Home", "Install App", "Testimonials", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-md" : "bg-black/60"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src="/images/logo.png"
            alt="FitYou Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold text-purple-500">FitYou</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(" ", "")}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-purple-400 text-sm font-medium transition cursor-pointer"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => navigate("/signup")}
            className="text-white hover:text-purple-400 text-sm font-medium transition"
          >
            Sign Up
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleNav} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-black/90">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(" ", "")}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-purple-400 text-sm font-medium"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/signup");
            }}
            className="block text-white hover:text-purple-400 text-sm font-medium"
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
