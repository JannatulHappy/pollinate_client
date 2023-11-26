import React from "react";
import Banner from "./Banner";
import FeaturedSurveys from "./FeaturedSurveys";
import RecentCreatedSurveys from "./RecentCreatedSurveys";
import HowItWorksSection from "./HowItWorksSection";

const Home = () => {

  
  return (
    <div>
          <Banner></Banner>
          <FeaturedSurveys></FeaturedSurveys>
          <RecentCreatedSurveys></RecentCreatedSurveys>
          <HowItWorksSection></HowItWorksSection>
    </div>
  );
};

export default Home;
