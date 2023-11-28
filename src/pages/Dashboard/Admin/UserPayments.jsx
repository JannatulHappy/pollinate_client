import { useQuery } from "@tanstack/react-query";
import { getAllPayments } from "../../../api/payments";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Shared/Loading";

const UserPayments = () => {
  const { user, loading } = useAuth();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["allPayments", user?.email],
    enabled: !loading,
    queryFn: getAllPayments,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="container px-4 mx-auto sm:px-8">
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
                      Name
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
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="relative block">
                              <img
                                alt="profile"
                                src={payment?.proUserImage}
                                className="object-cover h-10 mx-auto rounded-full w-15 "
                              />
                            </div>
                          </div>
                         
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {payment?.proUsername}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {payment?.proUserEmail}
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ${payment?.price}
                        </p>
                      </td>
                    </tr>
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

export default UserPayments;
