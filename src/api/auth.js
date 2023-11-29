import axiosSecure from ".";

export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "user",
    status: "Verified",
    userImage: user.photoURL,
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};
export const updateRole = async ( email, role ) => {
  const currentUser = {
    role:role,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};
// // update  pro user status after payment
// export const updateUserStatus = async (email, status) => {
//   const { data } = await axiosSecure.put(`/user/status/${email}`, { status });
//   return data;
// };
// get specific user role
export const getUserRole = async (email) => {
  const { data } = await axiosSecure(`/users/${email}`);
  return data;
};
// get all user
export const getAllUsers = async () => {
  const { data } = await axiosSecure("/users");
  return data;
};
export const becomeSurveyor = async (email) => {
  const currentUser = {
    email,
    status: "Requested",
  };
  const { data } = await axiosSecure.put(`/users/${email}`, currentUser);
  return data;
};
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", {email});
  console.log("token received from server ...");
  return data;
};

export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  console.log("logged out ...");
  return data;
};
