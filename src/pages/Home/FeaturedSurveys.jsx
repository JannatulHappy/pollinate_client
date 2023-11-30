import React from "react";
import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import useSurveys from "../../hooks/useSurveys";
import SurveyCard from "../../components/Shared/SurveyCard";

const FeaturedSurveys = () => {
  const { data } = useSurveys();

  // Filter surveys with the status "publish" and then sort by total votes
  const sortedSurveys =
    data
      ?.filter((survey) => survey.surveyStatus === "published")
      .sort((a, b) => b.totalVote - a.totalVote) || [];

  const top3Surveys = sortedSurveys.slice(0, 6);

  return (
    <div className="my-10">
      <Container>
        <Heading
          title={"Featured Surveys"}
          subtitle={"Most Voted Survey"}
          center={"true"}
        ></Heading>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {/* Render the top 3 surveys */}
          {top3Surveys.map((survey, index) => (
            <div key={index}>
              {" "}
              <SurveyCard survey={survey}></SurveyCard>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedSurveys;
