// HeroSection.js

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative flex items-center bg-green-900 bg-center bg-cover h-[80vh]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative mx-auto text-center text-white">
        <h1 className="pt-10 mb-4 text-4xl font-bold lg:text-6xl">
          Revolutionize Your Insights with Polls and Surveys
        </h1>
        <p className="mb-12 text-lg mt-9 lg:text-xl">
          Unleash the power of surveys to gather valuable insights, engage your
          audience, and make informed decisions.
        </p>
        <Link
          to="/surveys"
          className="px-8 py-3 text-lg font-bold text-black bg-white rounded-lg hover:py-5 hover:bg-black hover:text-white"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
