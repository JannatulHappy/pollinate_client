import { TbFidgetSpinner } from "react-icons/tb";

import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../../api/utils";
import { updateSurveyorList } from "../../../api/surveys";
import toast from "react-hot-toast";

const UpdateSurvey = ({ id, survey, refetch }) => {
  // console.log(id,survey);

  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload image");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };
  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image?.name);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];

    const image_url = await imageUpload(image);

    const surveyData = {
      category: form?.category?.value,
      title: form.title.value ,
      description: form.description.value ,

      image: image_url?.data?.display_url,
    };
    console.log(surveyData);

    try {
      // update data
      const data = await updateSurveyorList(id, surveyData);
      console.log(data);
      setUploadButtonText("Uploaded!");
      toast.success("Survey Updated!");
      refetch();
      navigate("/dashboard/survey-list");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }

    console.log(surveyData);

    setIsModalOpen(false);
  };
  const categories = [
    {
      label: "Personal Development",
    },
    {
      label: "Technology",
    },
    {
      label: "Food and Cuisine",
    },

    {
      label: "Travel",
    },
    {
      label: "Health and Fitness",
    },

    {
      label: "Entertainment",
    },
    {
      label: "Education",
    },
  ];
  return (
    <>
      <div className="px-4 py-3 text-sm text-center bg-green-200 border-b border-gray-200 rounded-lg">
        <button onClick={handleUpdateClick} className="text-base font-semibold">
          Update
        </button>
      </div>

      {/* Modal for UpdateSurvey */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsModalOpen(false)}
          open={isModalOpen}
        >
          <div className="min-h-screen px-4 text-center ">
            {/* Overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* Modal content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {/* Form */}
                <h1 className="text-xl font-bold text-center py-9">
                  Update Survey
                </h1>
                <form onSubmit={handleFormSubmit} className="p-10 bg-green-50">
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="category"
                          className="block text-gray-600"
                        >
                          Category
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border-green-300 rounded-md focus:outline-green-500"
                          name="category"
                        >
                          {categories.map((category) => (
                            <option value={category.label} key={category.label}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-full p-4 m-auto bg-white rounded-lg ">
                        <div className="relative px-5 py-3 border-4 border-gray-300 border-dotted rounded-lg file_upload">
                          <div className="flex flex-col mx-auto text-center w-max">
                            <label>
                              <input
                                onChange={(e) =>
                                  handleImageChange(e.target.files[0])
                                }
                                className="hidden text-sm cursor-pointer w-36"
                                type="file"
                                name="image"
                                required
                                id="image"
                                accept="image/*"
                                hidden
                              />
                              <div className="p-1 px-3 font-semibold text-white bg-green-500 border border-gray-300 rounded cursor-pointer hover:bg-green-300">
                                {uploadButtonText ? (
                                  <>{uploadButtonText}</>
                                ) : (
                                  "Upload image"
                                )}
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-1 text-sm">
                        <label htmlFor="title" className="block text-gray-600">
                          Title
                        </label>
                        <input
                          className="w-full px-4 py-3 text-gray-800 border border-green-300 rounded-md focus:outline-green-500 "
                          name="title"
                          required
                          id="title"
                          type="text"
                          placeholder="Title"
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="description"
                          className="block text-gray-600"
                        >
                          Description
                        </label>

                        <textarea
                          id="description"
                          required
                          className="block w-full h-32 px-4 py-3 text-gray-800 border border-green-300 rounded-md focus:green-300 focus:outline-green-500 "
                          name="description"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 mt-5 font-medium text-center text-white transition duration-200 bg-green-400 rounded shadow-md"
                  >
                    {loading ? (
                      <TbFidgetSpinner
                        className="m-auto animate-spin"
                        size={24}
                      />
                    ) : (
                      "Update & Continue"
                    )}
                  </button>
                </form>

                <div className="w-2/5 mx-auto">
                  {/* Cancel button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-2 mt-3 text-center text-white bg-red-500 rounded-md w- hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateSurvey;
