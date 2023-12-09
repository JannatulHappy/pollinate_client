import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";

import SurveyCard from "../../components/Shared/SurveyCard";
import moment from "moment";
import useSurveys from "../../hooks/useSurveys";
import Loading from "../../components/Shared/Loading";

const RecentCreatedSurveys = () => {
  const { data, isLoading } = useSurveys();

  // Sort surveys by timestamp in descending order
  const sortedSurveys =
    data
      ?.filter((survey) => survey.surveyStatus === "published")
      .sort((a, b) => moment(b.timestamp).diff(moment(a.timestamp))) || [];

  // Get the most recently created 3 surveys
  const recentSurveys = sortedSurveys.slice(0, 6);
if (isLoading) {
  return <Loading></Loading>;
}
  return (
    <div className="my-10">
      <Container>
        <Heading
          title={"Recently Created Surveys"}
          subtitle={"Latest Surveys"}
          center={"true"}
        ></Heading>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2">
          {/* Render the most recently created 3 surveys */}
          {recentSurveys.map((survey, index) => (
            <div key={index}>
              {" "}
              <SurveyCard survey={survey} showButton={true}></SurveyCard>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentCreatedSurveys;
