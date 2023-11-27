import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleSurvey } from "../../../api/surveys";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const SurveyDetails = () => {
    const { user } = useAuth();
    const { loggedUserData, loadingOfLogged } = useRole();

    const params = useParams();
    console.log(loggedUserData)

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["singleJob", useParams.id],
        queryFn: () => getSingleSurvey(params.id),
    });
    if (isLoading && loadingOfLogged) {
    return (
      <span className="text-black">
        loading...
      </span>
    );
  }

  if (isError) {
    return <span className="text-white">Error: {error.message}</span>;
  }
  console.log(data, "data paici");

  return <>details page of survey</>;
};

export default SurveyDetails;
