import useSurveys from "../../../hooks/useSurveys";


const UserSurveyResponse = () => {
  const { user } = useAuth();
  const { data: surveys, refetch, isLoading } = useSurveys();

 

  return (
    <>
      show a table and chart here
    </>
  );
};

export default UserSurveyResponse;


