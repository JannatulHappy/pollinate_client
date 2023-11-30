import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getSurveyorSurvey } from "../../../api/surveys";
import SurveyModal from "../../../components/Modal/SurveyModal";
import Loading from "../../../components/Shared/Loading";
import { useQuery } from "@tanstack/react-query";
import UpdateSurvey from "./updateSurvey";

const SurveyList = () => {
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isAdminFeedbackOpen, setIsAdminFeedbackOpen] = useState(false);
  const {
    isLoading,
    isError,
    data: surveys,
    error,
    refetch,
  } = useQuery({
    queryKey: ["surveyorSurvey", user?.email],
    queryFn: () => getSurveyorSurvey(user?.email),
  });

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
  if (isLoading) {
    return <Loading></Loading>;
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

                      <td>
                        <UpdateSurvey
                          id={survey?._id}
                          survey={survey}
                          refetch={refetch}
                        ></UpdateSurvey>
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
    </>
  );
};

export default SurveyList;
