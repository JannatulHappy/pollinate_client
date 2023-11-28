import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleSurvey } from "../../../api/surveys";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import Container from "../../../components/Shared/Container";
import Loading from "../../../components/Shared/Loading";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

const SurveyDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { loggedUserData, loadingOfLogged } = useRole();
  const params = useParams();
  const [submitVote, setSubmitVote] = useState("no");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [comment, setComment] = useState(null);
  const [isLike, setIsLike] = useState("");
  // const [report, setReport] = useState(false);
  const [isInclude, setIsInclude] = useState(false);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["singleSurvey", useParams.id],
    queryFn: () => getSingleSurvey(params.id),
  });

  useEffect(() => {
    const response = data?.responses.map(
      (response) => response.responseUserEmail
    );
    // console.log("response email paici", response);
    if (response?.includes(loggedUserData?.email)) {
      setIsInclude(true);
    }
  }, [data, loggedUserData]);
  const isDatePassed = (timestamp) => {
    const today = moment();
    const timestampDate = moment(timestamp);

    // Compare today's date with the timestamp date
    return today.isAfter(timestampDate);
  };
  const timePassed = isDatePassed(data?.timestamp);

  // Output: false (if today is before October 1, 2023)
  const handleVote = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
    }

    if (user) {
     
      


      // const dislike = isLike === "no" ? data?.dislike + 1 : data.dislike;

      // console.log("answers :", selectedOptions);
      // console.log("TotalVote :", data.totalVote + 1);
      // console.log("like:", like, "dislike:", dislike);
      const updatedData = {
        like: isLike === "yes" ? data?.like + 1 : data?.like,
        dislike: isLike === "no" ? data?.dislike + 1 : data.dislike,

        totalVote: data.totalVote + 1,

        Feedback: {
          proUserName: user?.displayName || loggedUserData?.name,
          proUserEmail: user?.email,
          proUserImage: user?.photoURL,
          comment: comment,
        },

        responses: [
          {
            responseUserEmail: user.email,
            answers: {
              question1: selectedOptions.question1,
              question2: selectedOptions.question2,
              question3: selectedOptions.question3,
            },
          },
        ],
      };
      setSubmitVote("yes");
      console.log("updated", updatedData);
    }

    //   todo:call refetch after submit the data to backend
  };

  if (isLoading || loadingOfLogged) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <span className="text-white">Error: {error.message}</span>;
  }

  // console.log("time pass hoice?",isTimePassed)
  // console.log("time pass hoice?", timePassed);
  const survey = data;

  // Define chart options
  const chartOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: ["Like", "Dislike", "Report", "Total Votes"],
    },
  };

  // Define chart series data based on like, dislike, report, and totalVote
  const chartSeries = [
    {
      name: "Like",
      data: [survey.like],
    },
    {
      name: "Dislike",
      data: [survey.dislike],
    },
    {
      name: "Report",
      data: [survey.report],
    },
    {
      name: "Total Votes",
      data: [survey.totalVote],
    },
  ];

  // console.log("paici", submitVote);
  // console.log("isinclude", isInclude);
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
            <p className="text-lg">
              Total Like: <span className="font-bold">{survey.like}</span>
            </p>
            <p className="text-lg">
              Total Dislike: <span className="font-bold">{survey.dislike}</span>
            </p>
          </div>
        </div>

        {/* Render chart if isInclude is true */}
        {isInclude || timePassed ? (
          <div className="w-1/2">
            {timePassed && (
              <p className="py-10 text-base font-medium text-red-500">
                The Deadline is expires of this Survey!!!
              </p>
            )}
            <h2 className="mb-4 text-xl font-bold">Survey Results Chart:</h2>
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              height={350}
            />
          </div>
        ) : (
          <div className="w-1/2">
            <form className="" onSubmit={handleVote}>
              {/* Render questions for voting */}
              <div className="">
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
              <div className="space-x-4 ">
                <p className="text-lg font-bold text-green-600">
                  Do You like this Survey?
                </p>
                <select
                  className="px-4 py-2 bg-gray-300 rounded-md"
                  value={isLike}
                  onChange={(e) => setIsLike(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="yes">Like</option>
                  <option value="no">Dislike</option>
                </select>
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
                <div className="my-6">
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
        )}
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
