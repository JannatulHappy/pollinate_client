import { useQuery } from '@tanstack/react-query'

import { getAllUsers } from '../../../api/auth'
// import UserDataRow from '../../../components/Dashboard/TableRows/UserDataRow'
import UserDataRow from '../../../components/Dashboard/TableRows/UserDataRow'

const ManageUsers = () => {
    // fetch all users
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await getAllUsers();
            return res;
        }
    })

    console.log(users);

    return (
        <>
            <div className='container px-4 mx-auto sm:px-8'>
               
                <div className='py-8'>
                    <div className='px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8'>
                        <div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                                        >
                                           Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                                        >
                                            Status
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map(user => <UserDataRow key={user?._id} user={user} refetch={refetch}></UserDataRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageUsers
