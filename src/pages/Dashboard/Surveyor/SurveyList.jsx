import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useAuth from "../../../hooks/useAuth";
import { getSurveyorSurvey } from "../../../api/surveys";
import SurveyModal from "../../../components/Modal/SurveyModal";

const SurveyList = () => {
  const { user } = useAuth();

  const [surveys, setSurveys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isAdminFeedbackOpen, setIsAdminFeedbackOpen] = useState(false);
  useEffect(() => {
    getSurveyorSurvey(user?.email).then((data) => {
      setSurveys(data);
    });
  }, [user]);

//   function closeModal() {
//     setIsOpen(false);
//   }

//   function openModal(survey) {
//     setSelectedSurvey(survey);
//     setIsOpen(true);
//   }
 function closeModal() {
   setIsOpen(false);
   setIsAdminFeedbackOpen(false);
 }

 function openModal(survey) {
   setSelectedSurvey(survey);
   setIsOpen(true);
 }

 function openAdminFeedbackModal(survey) {
   setSelectedSurvey(survey);
   setIsAdminFeedbackOpen(true);
 }
  return (
    <>
      <div className="container px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Users Feedback
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Admin Feedback
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {surveys.map((survey) => (
                    <tr key={survey._id}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="relative block">
                              <img
                                alt="profile"
                                src={survey?.image}
                                className="object-cover h-10 mx-auto rounded w-15"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {survey?.category}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative">{survey?.title}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative">
                            {survey?.surveyStatus}
                          </span>
                        </span>
                      </td>
                      <td>
                        {survey.totalVote > 0 ? (
                          <div className="mb-4">
                            <button
                              type="button"
                              onClick={() => openModal(survey)}
                              className="px-4 py-2 text-sm font-medium text-white rounded-md bg-black/40 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                              See Feedback
                            </button>
                          </div>
                        ) : (
                          <p className="relative inline-block px-3 py-1 text-sm font-semibold leading-tight text-green-900 ">
                            Not Applicable
                          </p>
                        )}
                      </td>
                      <td>
                        {survey?.adminFeedback ? (
                          <div className="mb-4">
                            <button
                              type="button"
                              onClick={() => openAdminFeedbackModal(survey)}
                              className="px-4 py-2 text-sm font-medium text-white rounded-md bg-black/40 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                              See Admin Feedback
                            </button>
                          </div>
                        ) : (
                          <p className="relative inline-block px-3 py-1 text-sm font-semibold leading-tight text-green-900 ">
                            Not Applicable
                          </p>
                        )}
                      </td>

                      {/* <td>
                        {survey?.adminFeedback ? (
                          <div className="mb-4">
                            <button
                              type="button"
                              className="px-4 py-2 text-sm font-medium text-white rounded-md bg-black/40 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                              See Admin Feedback
                            </button>
                          </div>
                        ) : (
                          <p className="relative inline-block px-3 py-1 text-sm font-semibold leading-tight text-green-900 ">
                            Not Applicable
                          </p>
                        )}
                      </td> */}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                          ></span>
                          <span className="relative">Update</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for User Feedback */}
      <SurveyModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedSurvey={selectedSurvey}
      />

      {/* Modal for Admin Feedback */}
      <SurveyModal
        isOpen={isAdminFeedbackOpen}
        closeModal={closeModal}
        selectedSurvey={selectedSurvey}
        isAdminFeedback
      />
      {/* Modal outside the table row */}
      {/* <SurveyModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedSurvey={selectedSurvey}
      /> */}
      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
          open={isOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  {selectedSurvey && (
                    <>
                      <img
                        src={selectedSurvey.image}
                        alt={`Survey Image`}
                        className="w-10 h-10 mr-2 rounded-full"
                      />
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        <p className="font-bold">{selectedSurvey.title}</p>
                      </Dialog.Title>
                      <div className="mt-2">
                        {selectedSurvey.totalVote > 0 ? (
                          selectedSurvey.Feedback.map((feedback, index) => (
                            <div key={index} className="mb-4">
                              <div className="flex items-center justify-center gap-5">
                                <div className="w-1/6 ">
                                  <img
                                    className="rounded-lg"
                                    src={feedback.proUserImage}
                                    alt=""
                                  />
                                </div>
                                <div className="4/6">
                                  <p className="font-bold">
                                    {feedback.proUserName}
                                  </p>
                                  <p>{feedback.comment}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p>No Feedback</p>
                        )}
                      </div>

                      <div className="mt-8">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </>
  );
};

export default SurveyList;
