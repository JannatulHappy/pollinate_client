import { TbFidgetSpinner } from "react-icons/tb";
const AddSurveyForm = ({
  handleSubmit,

  loading = false,
  handleImageChange,
  uploadButtonText,
}) => {
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
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <h1 className="text-xl font-bold text-center py-9">Add Survey</h1>
      <form onSubmit={handleSubmit} className="p-10 bg-green-50">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
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
                      onChange={(e) => handleImageChange(e.target.files[0])}
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
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className="w-full p-4 m-auto bg-white rounded-lg ">
              <div className="flex gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="question1" className="block text-gray-600">
                    Question 1
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-green-300 rounded-md focus:outline-green-500 "
                    name="question1"
                    id="question1"
                    type="text"
                    placeholder="Add Question 1"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="question2" className="block text-gray-600">
                    Question 2
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-green-300 rounded-md focus:outline-green-500 "
                    name="question2"
                    id="bathrooms"
                    type="text"
                    placeholder="Add Question 3"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-3">
                <div className="space-y-1 text-sm">
                  <label htmlFor="question3" className="block text-gray-600">
                    Question 3
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-green-300 rounded-md focus:outline-green-500 "
                    name="question3"
                    id="question1"
                    type="text"
                    placeholder="Add Question 3"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
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
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddSurveyForm;
