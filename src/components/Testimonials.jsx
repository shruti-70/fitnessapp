import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jack",
    role: "Fitness Enthusiast",
    image: "${process.env.PUBLIC_URL}/images/user1.jpg",
    quote:
      "This app completely changed my routine! I do calisthenics but the workout plans are so flexible for any workout routine",
  },
  {
    name: "Ron",
    role: "Beginner Lifter",
    image: "${process.env.PUBLIC_URL}/images/user2.jpg",
    quote:
      "As a beginner, I always felt lost in the gym. The plan guided me step-by-step. Highly recommend!",
  },
  {
    name: "Lorraine",
    role: "Yoga & Strength Trainer",
    image: "${process.env.PUBLIC_URL}/images/user3.jpg",
    quote:
      "The personalized programs are on point. I even recommend this to my own clients now!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-20 px-4" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-500  to-white text-transparent bg-clip-text">
          Real Results. Real People.
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              whileHover={{
                scale: 1.05,
                rotate: 3,
                transition: { type: "spring", stiffness: 250, damping: 20 },
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3 * index,
                type: "spring",
                stiffness: 100,
                damping: 25,
              }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <div className="text-gray-900 font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
