import { Navigate } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import useRole from "../hooks/useRole";



const SurveyorRoute = ({ children }) => {
  const { loggedUserData, loadingOfLogged } = useRole();

  if (loadingOfLogged) return <Loading></Loading>;
  if (loggedUserData?.role == "surveyor") return children;

  return <Navigate to="/dashboard" replace="true" />;
};

export default SurveyorRoute;
