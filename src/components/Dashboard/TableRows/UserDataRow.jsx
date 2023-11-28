import { useState } from "react"

import UpdateUserModal from "../../Modal/UpdateUserModal"
import { toast } from 'react-hot-toast';
import { updateRole } from "../../../api/auth";

const UserDataRow = ({ user, refetch }) => {

  const [isOpen, setIsOpen] = useState(false)

  const modalHandler = async (role) => {
    // update user role
    try {
      const data = await updateRole(  user?.email, role );
      console.log(data);
      toast.success("user role updated")
      refetch()
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsOpen(false)
    }
  }

  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="relative block">
              <img
                alt="profile"
                src={user?.userImage}
                className="object-cover h-10 mx-auto rounded-full w-15 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        {user?.status ? (
          <p
            className={`${
              user.status === "Verified" ? "text-green-500" : "text-yellow-500"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
          ></span>
          <span onClick={() => setIsOpen(true)} className="relative">
            Update Role
          </span>
        </span>
        {/* Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
          modalHandler={modalHandler}
        ></UpdateUserModal>
      </td>
    </tr>
  );
}

export default UserDataRow