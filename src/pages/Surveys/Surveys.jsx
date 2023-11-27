import React, { useState, useEffect } from "react";
import useSurveys from "../../hooks/useSurveys";

const Surveys = () => {
  const { data: surveys, isLoading } = useSurveys();
  const [filteredSurveys, setFilteredSurveys] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [filterVote, setFilterVote] = useState("");
  const [noMatchingSurveys, setNoMatchingSurveys] = useState(false);

  useEffect(() => {
    // Check if surveys data is available
    if (!surveys) return;

    // Set filtered surveys based on selected category, title, and vote
    let filtered = [...surveys];

    if (filterCategory) {
      filtered = filtered.filter(
        (survey) =>
          survey.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    if (filterTitle) {
      filtered = filtered.filter((survey) =>
        survey.title.toLowerCase().includes(filterTitle.toLowerCase())
      );
    }

    if (filterVote) {
      filtered = filtered.filter(
        (survey) => survey.totalVote <= parseInt(filterVote, 0)
      );
    }

    setFilteredSurveys(filtered);

    // Check if there are no matching surveys
    setNoMatchingSurveys(filtered.length === 0);
  }, [filterCategory, filterTitle, filterVote, surveys]);

  // Check if surveys data is not available yet
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Filtering options */}
      <div className="flex mb-4 space-x-4">
        {/* Category Dropdown */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="p-2 border"
        >
          <option value="">All Categories</option>
          {[...new Set(surveys.map((survey) => survey.category))].map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>

        {/* Title Dropdown */}
        <select
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          className="p-2 border"
        >
          <option value="">Filter By Titles</option>
          {[...new Set(surveys.map((survey) => survey.title))].map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>

        {/* Vote Dropdown */}
        <select
          value={filterVote}
          onChange={(e) => setFilterVote(e.target.value)}
          className="p-2 border"
        >
          <option value="">All Votes</option>
          {[...new Set(surveys.map((survey) => survey.totalVote))].map((vote) => (
            <option key={vote} value={vote}>
              {vote}
            </option>
          ))}
        </select>
      </div>

      {/* Display surveys or show message if no matching surveys */}
      {noMatchingSurveys ? (
        <p>No matching surveys found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSurveys.map((survey) => (
            <div key={survey.title} className="p-4 mb-4 border">
              <img src={survey.image} alt={survey.title} className="mb-4" />
              <h2 className="text-xl font-bold">{survey.title}</h2>
              <p>{survey.description}</p>
              <p>Total Voted: {survey.totalVote}</p>
              <p>Category: {survey.category}</p>
              <p>Like: {survey.totalVote}</p>
              <p>Dislike: {survey.dislike}</p>
              {/* Add more survey details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Surveys;
