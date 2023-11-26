import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import PaymentModal from "../../components/Modal/PaymentModal";

const Payment = () => {
    const { user } = useAuth();
    console.log(user,"user payment")
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [paymentInfo, setPaymentInfo] = useState({
    proUsername: user?.displayName,
    proUserEmail: user?.email,
    proUserImage: user?.photoURL,
    price: 99,
  });
  return (
    <div className="px-5 mx-auto max-w-7xl">
      <div className="max-w-lg mx-auto">
        <h4 className="text-lg font-bold">Pricing Package</h4>
        <h1 className="pb-6 mt-6 text-4xl font-bold tracking-wide lg:text-5xl md:text-5xl ">
          Get Your Ticket Now
        </h1>
        <p className="w-40 border-b-8 border-green-200"></p>
      </div>

      <div className="grid grid-cols-1  max-w-sm mx-auto">
        <div className="w-full max-w-sm p-4 mt-20 shadow bg-green-50 rounded-xl sm:p-8">
          <h5 className="mb-4 text-lg font-bold">Pro User</h5>

          <span className="text-6xl font-extrabold tracking-tight">
            <sup>$</sup> 99
          </span>
          <p className="pt-6 pb-10">
            Buy tickets to enhance your business knowledge & be a pro user
          </p>
          <p className="w-40 border-b-4 border-blue02"></p>

          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight">
                Have all the basic features
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight">
                Pro users can comments on survey
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight ">
                24×7 phone & email support
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight ">
                Early access of all new features
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight ">
                Workshops and Engage
              </span>
            </li>

            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                API Access
              </span>
            </li>
          </ul>

          <div onClick={() => setIsOpen(true)}>
            <button className="py-4 mt-5 text-lg rounded-lg px-14 lg:py-6 bg-green-200">
              BECAME PRO USER
            </button>
          </div>
          <PaymentModal
            closeModal={closeModal}
            isOpen={isOpen}
           paymentInfo={paymentInfo}
          ></PaymentModal>
        </div>
      </div>
    </div>
  );
};

export default Payment;
