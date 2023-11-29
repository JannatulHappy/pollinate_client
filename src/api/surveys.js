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
// update survey after admin publish of unpublish it from pending
// update  surveys after vote  /surveys/status/
export const updateSurveysStatus = async (id,updatedData) => {
  const { data } = await axiosSecure.patch(
    `/surveys/status/${id}`,
    updatedData
  );
  return data;
};


// add survey from surveyor dashboard
export const addSurvey = async (surveyData) => {
  const { data } = await axiosSecure.post(`/survey`, surveyData);
  return data;
};