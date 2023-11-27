import React from "react";
import Banner from "./Banner";
import FeaturedSurveys from "./FeaturedSurveys";
import RecentCreatedSurveys from "./RecentCreatedSurveys";
import HowItWorksSection from "./HowItWorksSection";
import FAQSection from "./FAQSection";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedSurveys></FeaturedSurveys>
      <RecentCreatedSurveys></RecentCreatedSurveys>
      <HowItWorksSection></HowItWorksSection>
      <FAQSection></FAQSection>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
