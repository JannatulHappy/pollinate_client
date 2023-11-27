import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/placeholder.jpg";
import SurveyorModal from "../../Modal/SurveyorModal";

import toast from "react-hot-toast";
// Todo: host api --role
const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, logOut } = useAuth();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalHandler = async () => {
    // request to be host
    console.log("requset");
    try {
      toast.success("Success, Please wait for admin confirmation");
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
        {/* Become A Host btn */}
        <div className="hidden md:block">
          {/* {(!user || !role || role == 'user') && 
          <button
            onClick={() => setIsModalOpen(true)} className='px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer disabled:cursor-not-allowed hover:bg-neutral-100'>
            Host your home
          </button>
          } */}

          <Link to="/payment">
            <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer bg-neutral-200 hover:bg-neutral-400">
              Pro
            </button>
          </Link>
          <Link to="about-us">
            <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer bg-neutral-200 hover:bg-neutral-400">
              About Us
            </button>
          </Link>
          <Link to="/surveys">
            <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer bg-neutral-200 hover:bg-neutral-400">
              Surveys
            </button>
          </Link>
          <Link to="/privacy-policy">
            <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer bg-neutral-200 hover:bg-neutral-400">
             Privacy & Policy
            </button>
          </Link>
          <Link to="contact-us">
            <button className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer bg-neutral-200 hover:bg-neutral-400">
              Contact Us
            </button>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer disabled:cursor-not-allowed bg-neutral-200 hover:bg-neutral-400 "
          >
            Add Survey
          </button>
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
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block px-4 py-3 font-semibold transition md:hidden hover:bg-neutral-100"
            >
              Home
            </Link>

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
                  className="px-4 py-3 font-semibold transition cursor-pointer hover:bg-neutral-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
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
      ></SurveyorModal>
    </div>
  );
};

export default MenuDropdown;
