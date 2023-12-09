import { useState } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addSurvey } from "../../../api/surveys";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import AddSurveyForm from "../../../components/Form/AddSurveyForm";
// import Loading from "../../../components/Shared/Loading";

const AddSurvey = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload image");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const question1 = form.question1.value;
    const question2 = form.question2.value;
    const question3 = form.question3.value;

    const image_url = await imageUpload(image);

    const surveyData = {
      category: form?.category?.value || "category",
      title: form.title.value,
      description: form.description.value,
      like: 0,
      dislike: 0,
      report: 0,
      image: image_url?.data?.display_url,
      surveyStatus: "pending",
      totalVote: 0,
      surveyCreatedBy: user?.displayName,
      surveyCreatorEmail: user?.email,
      surveyCreatorImage: user?.photoURL,
      questions: [
        { question1: question1 },
        { question2: question2 },
        { question3: question3 },
      ],
      Feedback: [],
      responses: [],
      };
      console.log(surveyData)
   

    try {
      const data = await addSurvey(surveyData);
      console.log(data);
      setUploadButtonText("Uploaded!");
      toast.success("Survey Added!");
      navigate("/dashboard/survey-list");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }

    console.table(surveyData);
  };

  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image?.name);
  };

  return (
    <>
      {/* form */}

      <AddSurveyForm
        loading={loading}
        uploadButtonText={uploadButtonText}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      ></AddSurveyForm>
    </>
  );
};

export default AddSurvey;
