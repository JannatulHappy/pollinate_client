import moment from "moment";
import { Link } from "react-router-dom";
const SurveyCard = ({ survey }) => {
  // Assuming the timestamp is a string in ISO 8601 format
  const formatDate = (timestamp) => {
    return moment(timestamp).format("MMMM Do YYYY");
  };
  return (
    <div className="m-2 overflow-hidden bg-white rounded shadow-lg ">
      {/* Survey Image (if applicable) */}
      <img className="object-cover w-full h-64" src={survey.image} />

      <div className="px-6 py-4">
        {/* Survey Title */}

        <div className="mb-2 text-xl font-bold">{survey.title}</div>

        <div className="h-12">
          {/* Survey Description */}
          <p className="text-base text-gray-700">{survey.description}</p>
        </div>

        {/* Survey Details */}
        <div className="flex items-center justify-between mt-4">
          {/* Like and Dislike Count */}
          <div className="flex items-center">
            <span className="mr-2">
              <i className="text-green-500 far fa-thumbs-up"></i> Like:
              {survey.like}
            </span>
            <span className="mr-2">
              <i className="text-red-500 far fa-thumbs-down"></i> Dislike:{" "}
              {survey.dislike}
            </span>
          </div>

          {/* Total Votes */}
          <div>
            <i className="text-blue-500 far fa-check-circle"></i>{" "}
            {survey.totalVote} votes
          </div>

          {/* Survey Status */}
          <div>Status: {survey.surveyStatus}</div>
        </div>
      </div>
      {/* Survey Creator Information */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <span className="mr-2">
          <i className="text-red-500 far fa-thumbs-down"></i> Created:{" "}
          {formatDate(survey.timestamp)}
        </span>
        <Link to={`/surveys/${survey._id}`}>
          <button className="px-4 py-3 text-lg font-medium bg-green-100 rounded-lg hover:bg-green-200">
            Participate In Survey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SurveyCard;
