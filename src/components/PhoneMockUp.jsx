import React from "react";
import { motion } from "framer-motion";


const PhoneMockup = () => {
  return (
    <section className="bg-transparent py-20 px-4" id="app">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Use the App. Anywhere. Anytime.
        </h2>

        <div className="flex justify-center items-center">
          <motion.div
            whileHover={{ rotateY: 15, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-purple-700 rounded-3xl shadow-2xl p-2 w-[250px] h-[500px] relative perspective-1000"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              borderRadius: "30px", 
            }}
          >
            <img
              src="/images/screen.png" 
              alt="App Screen"
              className="w-full h-full object-cover rounded-2xl"
              style={{
                transform: "translateZ(20px)",
                borderRadius: "20px", 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhoneMockup;
