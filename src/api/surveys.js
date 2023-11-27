import axiosSecure from ".";


export const getAllSurveys = async () => {
  const { data } = await axiosSecure.get("/surveys");
  return data;
};
export const getSingleSurvey = async (id) => {
  const { data } = await axiosSecure(`/surveys/${id}`);
  return data;
};
