import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">How It Works</h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Step 1 */}
          <div className="p-8 bg-white rounded-md shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-blue-600">Step 1</h3>
            <p className="text-gray-700">
              Explore our diverse range of featured surveys or create your own
              survey effortlessly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-white rounded-md shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-green-600">Step 2</h3>
            <p className="text-gray-700">
              Participate in surveys, express your opinions, and engage with a
              vibrant community of like-minded individuals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-white rounded-md shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-purple-600">Step 3</h3>
            <p className="text-gray-700">
              View detailed survey results, discover what others think, and stay
              informed on the latest trends and opinions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
