import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const plans = [
  {
    title: "Starter",
    price: "$19",
    features: [
      "Personalized Plan",
      "Weekly Check-ins",
      "Basic Support",
    ],
    popular: false,
  },
  {
    title: "Pro",
    price: "$39",
    features: [
      "Everything in Starter",
      "Video Demos",
      "Chat with Trainer",
      "Nutrition Guidance",
    ],
    popular: true,
  },
  {
    title: "Elite",
    price: "$69",
    features: [
      "Everything in Pro",
      "1-on-1 Virtual Sessions",
      "Priority Support",
      "Progress Tracking Tools",
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-black py-20 px-4" id="plans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="text-white mb-12 max-w-2xl mx-auto">
          No contracts. Cancel anytime. Start with a plan that suits your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`rounded-2xl shadow-lg p-8 border ${
                plan.popular ? "border-purple-700" : "border-gray-200"
              } ${plan.popular ? "bg-white" : "bg-white"}`}
            >
              {plan.popular && (
                <div className="mb-4 text-sm font-bold text-purple-700">Most Popular</div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.title}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">{plan.price}/mo</div>
              <ul className="space-y-3 text-gray-700 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
              <Link to="/signup">  {/* Wrap the button with Link */}
                <button className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  Choose Plan
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
