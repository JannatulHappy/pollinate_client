import React from "react";
import Banner from "./Banner";
import FeaturedSurveys from "./FeaturedSurveys";
import RecentCreatedSurveys from "./RecentCreatedSurveys";

const Home = () => {

  
  return (
    <div>
          <Banner></Banner>
          <FeaturedSurveys></FeaturedSurveys>
          <RecentCreatedSurveys></RecentCreatedSurveys>
    </div>
  );
};

export default Home;
