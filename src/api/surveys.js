import axiosSecure from ".";

export const getAllSurveys = async () => {
  const { data } = await axiosSecure.get("/surveys");
  return data;
};
export const getSingleSurvey = async (id) => {
  const { data } = await axiosSecure(`/surveys/${id}`);
  return data;
};

// update  surveys after vote 
export const updateSurveys = async (updatedData,id) => {
  const { data } = await axiosSecure.put(`/surveys/update/${id}`, updatedData);
  return data;
};