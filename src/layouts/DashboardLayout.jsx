import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import useRole from "../hooks/useRole";
// import UserSurveyResponse from "../pages/Dashboard/Admin/UserSurveyResponse";
// import SurveyResponse from "../pages/Dashboard/Surveyor/SurveyResponse";


const DashboardLayout = () => {
  // const { loggedUserData } = useRole();
  return (
    <div className="relative min-h-screen text-black md:flex">
      {/* Sidebar Component */}
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="p-5">

          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
