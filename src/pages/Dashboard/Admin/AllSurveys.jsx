import React, { useState } from "react";
import useSurveys from "../../../hooks/useSurveys";
import useAuth from "../../../hooks/useAuth";
import { Dialog, Transition } from "@headlessui/react";
import { updateSurveysStatus } from "../../../api/surveys";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Shared/Loading";

const AllSurveys = () => {
  const { user } = useAuth();
  const { data: surveys, refetch, isLoading } = useSurveys();

  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedbackAlert, setShowFeedbackAlert] = useState(false);

  const openModal = (survey) => {
    setSelectedSurvey(survey);
    setFeedback("");
    setShowFeedbackAlert(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedSurvey(null);
    setFeedback("");
    setShowFeedbackAlert(false);
    setIsOpen(false);
  };

  const handleUpdateStatus = async () => {
    try {
      if (selectedSurvey.surveyStatus === "unpublished" && !feedback) {
        setShowFeedbackAlert(true);
        return;
      }

      const updatedData = {
        surveyStatus: selectedSurvey.surveyStatus,

        adminFeedback:
          selectedSurvey.surveyStatus === "unpublished" ? feedback : "",
      };console.log(selectedSurvey._id,updatedData);

      await updateSurveysStatus(selectedSurvey._id, updatedData);

      // Refresh the survey data
      refetch();
      closeModal();

      // Show success toast
      toast.success("Survey status updated");
    } catch (error) {
      console.error("Error updating survey status:", error);
    }
  };
  if (isLoading) {
    return <Loading></Loading>
  }
    return (
      <>
        <div className="container px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full rounded-lg shadow o">
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {surveys?.map((survey) => (
                      <tr key={survey?._id}>
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
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {survey?.category}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {survey?.title}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-base font-medium bg-white border-b border-gray-200">
                          {survey?.surveyStatus === "pending" ? (
                            <p className="text-yellow-600 whitespace-no-wrap">
                              {survey?.surveyStatus}
                            </p>
                          ) : survey?.surveyStatus === "unpublished" ? (
                            <p className="text-red-600 whitespace-no-wrap">
                              {survey?.surveyStatus}
                            </p>
                          ) : (
                            <p className="text-green-600 whitespace-no-wrap">
                              {survey?.surveyStatus}
                            </p>
                          )}
                        </td>

                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <button
                              className="px-3 py-3 bg-green-200 rounded-lg"
                              onClick={() => openModal(survey)}
                            >
                              Update Status
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for updating survey status */}
        <Transition show={isOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="p-4 bg-white">
                  <h1 className="mb-4 text-lg font-bold">
                    Update Survey Status
                  </h1>
                  <select
                    value={selectedSurvey?.surveyStatus || ""}
                    onChange={(e) =>
                      setSelectedSurvey({
                        ...selectedSurvey,
                        surveyStatus: e.target.value,
                      })
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="published">Published</option>
                    <option value="unpublished">Unpublished</option>
                  </select>
                  {selectedSurvey?.surveyStatus === "unpublished" && (
                    <>
                      <input
                        type="text"
                        placeholder="Feedback..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      />
                      {showFeedbackAlert && (
                        <p className="mt-2 text-red-500">
                          Please provide feedback when unpublishing a survey.
                        </p>
                      )}
                    </>
                  )}
                  <div>
                    <button
                      className="px-6 py-3 mt-5 mr-2 bg-green-200 rounded-xl"
                      onClick={handleUpdateStatus}
                    >
                      Confirm
                    </button>
                    <button
                      className="px-6 py-3 mt-5 bg-red-200 rounded-xl"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      </>
    );
};

export default AllSurveys;
