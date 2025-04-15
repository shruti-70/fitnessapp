import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        preload="auto"
      >
        <source src="/videos/gymhero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center text-center h-full max-w-7xl mx-auto px-6 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
          Transform Your Body. Own Your Life.
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl drop-shadow-md">
          Personalised Plans to fit your workout. Get results. Get going.
        </p>
        <a
          href="/signup"
          className="bg-purple-700 hover:bg-gradient-to-b from-purple-600 to-cyan-400 transition px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Start Your Journey
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
