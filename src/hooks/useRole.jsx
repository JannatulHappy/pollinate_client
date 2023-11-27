// import { useEffect, useState } from "react";
// import { getUserRole } from "../api/auth";
// import useAuth from "./useAuth"

// const useRole = () => {
//     const { user } = useAuth();
//     const [role, setRole] = useState(null);

//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true)
//         getUserRole(user?.email)
//         .then(data => {
//             setRole(data);
//             setLoading(false);
//         })
//     }, [user])
//     return [role, loading];
// }

// export default useRole;

/*-------Using TanStack Query--------*/
import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import { getUserRole } from "../api/auth";

const useRole = () => {
  const { user, loading } = useAuth();
  const { data: loggedUserData, isLoading:loadingOfLogged } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      return getUserRole(user?.email);
    },
    queryKey: ["loggedUserRole"],
  });
  return { loggedUserData, loadingOfLogged };
};

export default useRole;
