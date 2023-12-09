import moment from "moment";
import { Link } from "react-router-dom";
import { FaVoteYea } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const SurveyCard = ({ survey, showButton }) => {
  // Assuming the timestamp is a string in ISO 8601 format
  const formatDate = (timestamp) => {
    return moment(timestamp).format("MMMM Do YYYY");
  };
  return (
    <div className="m-2 overflow-hidden bg-white rounded shadow-lg ">
      {/* Survey Image (if applicable) */}
      <img className="object-cover w-full h-64" src={survey.image} />
      {/* Survey Details */}
      <div className="flex items-center justify-between px-6 pt-3">
        {/* Like and Dislike Count */}
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center gap-1">
            <span className="pt-1 text-lg font-medium text-gray-500">
              {survey.like}
            </span>{" "}
            <AiFillLike className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-center gap-1">
            {" "}
            <span className="text-xl font-medium text-gray-500 ">
              {survey.dislike}
            </span>{" "}
            <AiFillDislike className="pt-1 text-[28px] text-yellow-700" />
          </div>
        </div>
        {/* Total Votes */}
        <div className="flex items-center justify-center gap-1">
          {" "}
          <span className="pt-1 text-lg font-medium text-gray-500">
            {" "}
            {survey.totalVote}
          </span>{" "}
          <FaVoteYea className="pt-2 text-[28px] text-gray-800" />
        </div>
      </div>
      <div className="px-6 py-4">
        {/* Survey Title */}

        <div className="mb-2 text-xl font-bold text-green-900">
          {survey.title}
        </div>

        <div className="h-8">
          {/* Survey Description */}
          <p className="text-base text-green-900">{survey.description}</p>
        </div>
      </div>
      {/* Survey Creator Information */}
      {showButton ? (
        <div className="flex items-center justify-center px-6 py-4 ">
          <Link to={`/surveys/${survey._id}`}>
            <button className="px-4 py-3 text-lg font-medium text-white bg-green-900 rounded-lg hover:bg-black">
              PARTICIPATE IN SURVEY
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SurveyCard;
