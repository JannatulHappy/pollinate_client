import { Outlet } from "react-router-dom";
// import Navbar from "../components/Shared/Navbar/Navbar";
// import Footer from "../components/Shared/Footer/Footer";
const Main = () => {
  return (
    <div className="text-black bg-green">
      {/* <Navbar /> */}hello
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      {/* <Footer /> */}hello
    </div>
  );
};

export default Main;
