import { Navigate } from "react-router-dom";


import Loading from "../components/Shared/Loading";
import useRole from "../hooks/useRole";


const AdminRoute = ({ children }) => {
  const { loggedUserData, loadingOfLogged } = useRole();

  if (loadingOfLogged) return <Loading></Loading>;
  if (loggedUserData?.role == "admin") return children;

  return <Navigate to="/dashboard" replace="true" />;
};

export default AdminRoute;
