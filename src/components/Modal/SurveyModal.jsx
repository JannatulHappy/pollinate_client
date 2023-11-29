import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SurveyModal = ({
  isOpen,
  closeModal,
  selectedSurvey,
  isAdminFeedback,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
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
                      {selectedSurvey.Feedback.map((feedback, index) => (
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
                      ))}
                    </div>

                    {/* Admin Feedback Section */}
                    {isAdminFeedback && (
                      <div className="mt-4">
                        <span className="font-semibold">Admin Feedback: </span>
                        {selectedSurvey.adminFeedback}
                      </div>
                    )}

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
    </Transition>
  );
};

export default SurveyModal;
