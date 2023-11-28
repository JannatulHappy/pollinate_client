import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleSurvey } from "../../../api/surveys";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import Container from "../../../components/Shared/Container";
import Loading from "../../../components/Shared/Loading";

const SurveyDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { loggedUserData, loadingOfLogged } = useRole();
  const params = useParams();
  const [submitVote, setSubmitVote] = useState("no");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [comment, setComment] = useState(null);
  const [isInclude, setIsInclude] = useState(false);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["singleSurvey", useParams.id],
    queryFn: () => getSingleSurvey(params.id),
  });
  useEffect(() => {
    const response = data?.responses.map(
      (response) => response.responseUserEmail
    );
    console.log("response email paici", response);
    if (response?.includes(loggedUserData?.email)) {
      setIsInclude(true);
    }
  }, [data, loggedUserData]);
  const handleVote = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
    }

    if (user) {
      // Implement logic to submit the vote based on selectedOptions
      if (comment) {
        console.log("Feedback: ", [
          {
            name: user?.displayName || loggedUserData?.name,
            proUserEmail: user?.email,
            proUserImage: user?.photoURL,
            comment: comment,
          },
        ]);
      }
      console.log("answers :", selectedOptions);

      // Assuming you have an async function to submit the vote
      try {
        // Replace the following line with actual logic to submit the vote
        // await submitVote(selectedOptions, comment);
        setSubmitVote("yes");
      } catch (error) {
        console.error("Error submitting vote:", error);
        // Handle error if vote submission fails
        // You might want to reset submitVote to "no" here
      }
    }
    //   todo:call refetch after submit the data to backend
  };
  console.log("paici", submitVote);
  if (isLoading || loadingOfLogged) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <span className="text-white">Error: {error.message}</span>;
  }

  const survey = data;

  console.log("isinclude", isInclude);
  return (
    <Container>
      <div className="flex">
        {/* Details Section */}
        <div className="w-1/2 pr-8">
          <h1 className="mb-4 text-3xl font-bold">{survey.title}</h1>
          <p className="mb-4">{survey.description}</p>

          <div className="mb-8">
            <img src={survey.image} alt={survey.title} className="rounded-lg" />
          </div>

          <div className="mb-8">
            <p className="text-lg">
              Category: <span className="font-bold">{survey.category}</span>
            </p>
            <p className="text-lg">
              Created By:{" "}
              <span className="font-bold">{survey.surveyCreatedBy}</span>
            </p>
            <p className="text-lg">
              Total Votes: <span className="font-bold">{survey.totalVote}</span>
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2">
          <form className="" onSubmit={handleVote}>
            {/* Render questions for voting */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold">Poll Questions:</h2>
              {survey.questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-bold">
                    {question[`question${index + 1}`]}
                  </p>
                  <div className="flex space-x-4">
                    <select
                      className="px-4 py-2 bg-gray-300 rounded-md"
                      value={selectedOptions[`question${index + 1}`] || ""}
                      onChange={(e) =>
                        setSelectedOptions({
                          ...selectedOptions,
                          [`question${index + 1}`]: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            {/* Render input field for comments */}
            {loggedUserData && loggedUserData.role === "pro-user" && (
              <div className="mb-4">
                <h2 className="mb-2 text-xl font-bold">Add a Comment:</h2>
                <textarea
                  required
                  className="w-full p-2 border rounded"
                  placeholder="Enter your comment here..."
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            )}
            {/* check if the role of the user is user || pro-user */}
            {loggedUserData?.role === "user" ||
            loggedUserData?.role === "pro-user" ? (
              <div className="mb-4">
                <button
                  type="submit"
                  className="px-6 py-3 text-white bg-green-500 rounded-md"
                >
                  Submit Vote
                </button>
              </div>
            ) : (
              <div className="mb-4">
                <button
                  type="submit"
                  disabled
                  className="px-6 py-3 text-black bg-gray-400 rounded-md"
                >
                  Submit Vote
                </button>
              </div>
            )}
          </form>
        </div>

        {/* todo: after submitting vote you have to show a chart */}
      </div>

      {/* Render feedback from pro-users */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Pro-User Feedback:</h2>
        {survey.Feedback &&
          survey.Feedback.map((feedback, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center">
                <img
                  src={feedback.proUserImage}
                  alt={`Pro User ${index + 1}`}
                  className="w-10 h-10 mr-2 rounded-full"
                />
                <p className="font-bold">{feedback.name}</p>
              </div>
              <p>{feedback.comment}</p>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default SurveyDetails;
