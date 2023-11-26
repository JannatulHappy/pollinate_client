import React from "react";
import Banner from "./Banner";
import FeaturedSurveys from "./FeaturedSurveys";
import RecentCreatedSurveys from "./RecentCreatedSurveys";
import HowItWorksSection from "./HowItWorksSection";
import FAQSection from "./FAQSection";

const Home = () => {

  
  return (
    <div>
          <Banner></Banner>
          <FeaturedSurveys></FeaturedSurveys>
          <RecentCreatedSurveys></RecentCreatedSurveys>
          <HowItWorksSection></HowItWorksSection>
          <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
