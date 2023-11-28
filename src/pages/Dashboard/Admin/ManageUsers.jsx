import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllUsers } from "../../../api/auth";
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";

const ManageUsers = () => {
  const [roleFilter, setRoleFilter] = useState("all");

  // Fetch all users
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getAllUsers();
      return res;
    },
  });

  const handleRoleFilterChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    if (roleFilter === "all") {
      return true;
    } else {
      return user.role === roleFilter;
    }
  });

  return (
    <>
      <div className="container px-4 mx-auto sm:px-8">
        <div className="flex justify-between mb-4">
          <select
            className="px-4 py-2 rounded-md"
            value={roleFilter}
            onChange={handleRoleFilterChange}
          >
            <option value="all">All Users</option>
            <option value="user">User</option>
            <option value="pro-user">Pro User</option>
            <option value="surveyor">Surveyors</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <UserDataRow key={user._id} user={user} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
