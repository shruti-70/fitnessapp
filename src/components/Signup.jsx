import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    workoutType: "",
    age: "",
    weight: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 min-h-screen pt-28">
      {/* Sign-Up Container */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-700 drop-shadow-md">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />

          {/* Workout Type */}
          <select
            name="workoutType"
            value={formData.workoutType}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          >
            <option value="">Select Workout Type</option>
            <option value="yoga">Yoga</option>
            <option value="cardio">Cardio</option>
            <option value="calisthenics">Calisthenics</option>
            <option value="weightlifting">Weightlifting</option>
            <option value="other">Other</option>
          </select>

          {/* Age */}
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Your Age"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />

          {/* Weight */}
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Your Weight (kg)"
            className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-all duration-300"
          >
            Create Account
          </button>
        </form>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">
              Thank you for signing up!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Your account has been created successfully. We'll send you a confirmation email shortly.
            </p>
            <button
              onClick={closeModal}
              className="w-full py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
