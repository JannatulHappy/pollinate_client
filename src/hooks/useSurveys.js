/*-------Using TanStack Query--------*/
import { useQuery } from "@tanstack/react-query";

import { getAllSurveys } from "../api/surveys";

const useSurveys = () => {
    const { data, isLoading, refetch, isError } = useQuery({
      queryKey: ["allSurveys"],
      queryFn: getAllSurveys
    });

  return { data, isLoading, refetch, isError };
};

export default useSurveys;
