import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/shruti-70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 transition"
          >
            <i className="fab fa-github text-2xl"></i> GitHub
          </a>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 transition"
          >
            <i className="fab fa-facebook text-2xl"></i> Facebook
          </a>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 transition"
          >
            <i className="fab fa-twitter text-2xl"></i> Twitter
          </a>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 transition"
          >
            <i className="fab fa-instagram text-2xl"></i> Instagram
          </a>
        </div>
        <div className="text-gray-500 text-sm">
          <p>&copy; 2025 FitYou. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#terms" className="hover:text-purple-500">Terms</a>
            <a href="#privacy" className="hover:text-purple-500">Privacy</a>
            <a href="#cookies" className="hover:text-purple-500">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
