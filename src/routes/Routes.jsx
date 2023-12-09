import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Payment from "../pages/Payment/Payment";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Surveys from "../pages/Surveys/Surveys";
import SurveyDetails from "../pages/Surveys/SurveyDetails/SurveyDetails";
import SurveyorRoute from "./SurveyorRoute";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SurveyResponse from "../pages/Dashboard/Surveyor/SurveyResponse";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import UserPayments from "../pages/Dashboard/Admin/UserPayments";
import AllSurveys from "../pages/Dashboard/Admin/AllSurveys";
import DashboardLayout from "../layouts/DashboardLayout";
import AddSurvey from "../pages/Dashboard/Surveyor/AddSurvey"
import SurveyList from "../pages/Dashboard/Surveyor/SurveyList"
import UserSurveyResponse from "../pages/Dashboard/Admin/UserSurveyResponse";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/:id",
        element: <SurveyDetails></SurveyDetails>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
     
      {
        path: "add-survey",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <AddSurvey></AddSurvey>{" "}
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "survey-list",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <SurveyList></SurveyList>
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "survey-response",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              {" "}
              <SurveyResponse></SurveyResponse>
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "user-survey-response",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UserSurveyResponse></UserSurveyResponse>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-payments",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UserPayments></UserPayments>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-surveys",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllSurveys></AllSurveys>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
