import React from "react";
import moment from "moment";
import Chart from "react-apexcharts";
import useSurveys from "../../../hooks/useSurveys";

const SurveyResponse = () => {
  const { data: surveys, refetch, isLoading } = useSurveys();

  // Extract data for the chart
  const chartData = surveys?.map((survey) => ({
    x: survey.title,
    totalVote: survey.totalVote,
    like: survey.like,

    dislike: survey.dislike,
  }));

  // ApexCharts options
  const chartOptions = {
    labels: chartData?.map((data) => data.x),
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Survey Responses</h1>

      {/* Table */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Category</th>
            <th className="px-4 py-2 border-b">Timestamp</th>
            <th className="px-4 py-2 border-b">Total Votes</th>
            <th className="px-4 py-2 border-b">Created By</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Likes</th>
            <th className="px-4 py-2 border-b">Dislikes</th>
          </tr>
        </thead>
        <tbody>
          {surveys?.map((survey) => (
            <tr key={survey.title} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{survey.title}</td>
              <td className="px-4 py-2 border-b">{survey.category}</td>
              <td className="px-4 py-2 border-b">
                {moment(survey.timestamp).format("LL")}
              </td>
              <td className="px-4 py-2 border-b">{survey.totalVote}</td>
              <td className="px-4 py-2 border-b">
                {survey.surveyCreatorEmail}
              </td>
              <td className="px-4 py-2 border-b">{survey.surveyStatus}</td>
              <td className="px-4 py-2 border-b">{survey.like}</td>
              <td className="px-4 py-2 border-b">{survey.dislike}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart */}
      <div className="mt-8">
        <Chart
          options={chartOptions}
          series={[
            {
              name: "TotalVote",
              data: chartData?.map((data) => data.totalVote),
            },
            { name: "Like", data: chartData?.map((data) => data.like) },
            { name: "Dislike", data: chartData?.map((data) => data.dislike) },
          ]}
          type="bar"
          width="100%"
        />
      </div>
    </div>
  );
};

export default SurveyResponse;
