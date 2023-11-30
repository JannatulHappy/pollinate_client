import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/placeholder.jpg";
import SurveyorModal from "../../Modal/SurveyorModal";
import toast from "react-hot-toast";
import useRole from "../../../hooks/useRole";
import { becomeSurveyor } from "../../../api/auth";
const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loggedUserData, loadingOfLogged } = useRole();
  const { user, logOut } = useAuth();
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalHandler = async () => {
    // request to be surveyor
    try {
      const res = await becomeSurveyor(user?.email);
      console.log(res);
      if (res.modifiedCount > 0) {
        toast.success("Success, Please wait for admin confirmation");
      } else {
        toast.success("Please, wait for admin approval 🤜");
      }
    } catch (e) {
      console.log(e.message);
      toast.error(e.message);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Surveyor btn */}
        <div className="hidden md:block">
          {(!user ||
            loggedUserData?.role == "user" ||
            loggedUserData?.role == "pro-user") && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-3 text-base font-semibold text-green-900 transition bg-green-100 first-line:cursor-pointer rounded-xl hover:bg-green-200 "
            >
              Became Surveyor
            </button>
          )}

          <Link to="/payment">
            <button className="px-4 py-3 mx-3 text-base font-semibold text-green-900 transition bg-green-100 first-line:cursor-pointer rounded-xl hover:bg-green-200">
              Pro
            </button>
          </Link>

          <Link to="/surveys">
            <button className="hidden px-4 py-3 text-base font-semibold text-green-900 transition bg-green-100 first-line:cursor-pointer rounded-xl hover:bg-green-200 md:inline-block">
              Surveys
            </button>
          </Link>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl mt-3 shadow-md w-[40vw] md:w-[30vw] xl:w-[11vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block px-4 py-3 font-semibold transition md:hidden hover:bg-neutral-100"
            >
              Home
            </Link>
            <div className="flex flex-col md:hidden">
              {(!user ||
                loggedUserData?.role == "user" ||
                loggedUserData?.role == "pro-user") && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-3 font-bold transition bg-green-100 text-lg-green-900 first-line:cursor-pointer rounded-xl hover:bg-green-200 "
                >
                  Became Surveyor
                </button>
              )}

              <Link to="/payment">
                <button className="px-8 py-3 mt-3 font-bold transition bg-green-100 text-lg-green-900 first-line:cursor-pointer rounded-xl hover:bg-green-200 ">
                  Became Pro
                </button>
              </Link>

              <Link to="/surveys">
                <button className="hidden px-4 py-3 text-base font-semibold text-green-900 transition bg-green-100 first-line:cursor-pointer rounded-xl hover:bg-green-200 md:inline-block">
                  Surveys
                </button>
              </Link>
            </div>
            <Link to="/surveys">
              <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer ">
                Surveys
              </button>
            </Link>
            <Link to="about-us">
              <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer ">
                About Us
              </button>
            </Link>
            <hr />

            <Link to="/privacy-policy">
              <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer ">
                Privacy & Policy
              </button>
            </Link>
            <hr />
            <Link to="contact-us">
              <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer ">
                Contact Us
              </button>
            </Link>
            <hr />
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logOut}
                  className="px-4 py-3 text-base font-bold text-green-900 transition bg-green-100 hover:bg-green-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 font-bold text-green-900 transition hover:bg-green-50"
                >
                  Login
                </Link>
                <hr />
                <Link
                  to="/signup"
                  className="px-4 py-3 font-bold text-green-900 transition hover:bg-green-50"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <SurveyorModal
        modalHandler={modalHandler}
        isOpen={isModalOpen}
        closeModal={closeModal}
        user={user}
      ></SurveyorModal>
    </div>
  );
};

export default MenuDropdown;
