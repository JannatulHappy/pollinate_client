import React from "react";
import Banner from "./Banner";
import useSurveys from "../../hooks/useSurveys";

const Home = () => {
  const { data } = useSurveys();
  console.log("data-paici", data);
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
