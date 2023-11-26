import axiosSecure from ".";


export const getAllSurveys = async () => {
  const { data } = await axiosSecure.get("/surveys");
  return data;
};