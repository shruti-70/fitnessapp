import React from "react";
import PhoneMockup from "./PhoneMockUp"; 
const InstallAppSection = () => {
  return (
    <>
      
      <section className="bg-black py-20 px-4" id="download">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left text-white">
            <h2 className="text-4xl font-bold mb-4">
              Download Our App and Unlock the Benefits
            </h2>
            <p className="text-lg mb-6">
              Track your progress, follow personalized plans, and stay motivated with our app, anytime and anywhere.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <img
                src="/images/appstore.png"
                alt="App Store"
                className="h-12"
              /> 
              <img
                src="/images/playstore.png"
                alt="Google Play"
                className="h-12"
              />
            </div>
          </div>

      
          <div className="flex-1 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Second Section: Workout Plans */}
      <section className="bg-gradient-to-r from-purple-500  to-red-500 py-20 px-4" id="workouts">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Plans That Fit Every Workout
          </h2>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/yoga.jpg"
                alt="Yoga"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Yoga</h3>
                <p className="text-gray-600">
                  Improve flexibility and mindfulness with our Yoga routines.
                </p>
              </div>
            </div>

         
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/weightlifting.png"
                alt="Weightlifting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Weightlifting</h3>
                <p className="text-gray-600">
                  Build strength and muscle with our weightlifting plans.
                </p>
              </div>
            </div>

       
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/cal.png"
                alt="Calisthenics"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Calisthenics</h3>
                <p className="text-gray-600">
                  Use bodyweight exercises for full-body strength with calisthenics.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/cardio.jpg"
                alt="Cardio"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Cardio</h3>
                <p className="text-gray-600">
                  Boost your endurance and burn calories with cardio workouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstallAppSection;
