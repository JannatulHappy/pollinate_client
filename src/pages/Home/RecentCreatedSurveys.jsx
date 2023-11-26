import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";

import SurveyCard from "../../components/Shared/SurveyCard";
import moment from "moment";
import useSurveys from "../../hooks/useSurveys";

const RecentCreatedSurveys = () => {
  const { data } = useSurveys();

  // Sort surveys by timestamp in descending order
  const sortedSurveys =
    data
      ?.filter((survey) => survey.surveyStatus === "published")
      .sort((a, b) => moment(b.timestamp).diff(moment(a.timestamp))) || [];

  // Get the most recently created 3 surveys
  const recentSurveys = sortedSurveys.slice(0, 3);

  return (
    <div className="my-10">
      <Container>
        <Heading
          title={"Recently Created Surveys"}
          subtitle={"Latest 3 Surveys"}
          center={"true"}
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Render the most recently created 3 surveys */}
          {recentSurveys.map((survey, index) => (
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

export default RecentCreatedSurveys;
