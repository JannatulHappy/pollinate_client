import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
const Main = () => {
  return (
    <div className="text-black bg-green">
      <Navbar />
      <div className="min-h-max">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
