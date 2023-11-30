import { useState } from 'react'
// Components
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'


import AdminMenu from '../Menu/AdminMenu'
import SurveyorMenu from '../Menu/SurveyorMenu'
import useAuth from '../../../hooks/useAuth'
import useRole from '../../../hooks/useRole'
import Logo from '../../Shared/Logo'
import Loading from '../../Shared/Loading'


const Sidebar = () => {
  const {logOut} = useAuth();
  const [isActive, setActive] = useState(false)
  const { loggedUserData, loadingOfLogged } = useRole();

 
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

 if ( loadingOfLogged) {
   return <Loading></Loading>;
 }
   return (
     <>
       {/* Small Screen Navbar */}
       <div className="flex justify-between text-gray-800 bg-gray-100 md:hidden">
         <div>
           <div className="block p-4 font-bold cursor-pointer">
             <Logo />
           </div>
         </div>

         <button
           onClick={handleToggle}
           className="p-4 mobile-menu-button focus:outline-none focus:bg-gray-200"
         >
           <AiOutlineBars className="w-5 h-5" />
         </button>
       </div>
       {/* Sidebar */}
       <div
         className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
           isActive && "-translate-x-full"
         }  md:translate-x-0  transition duration-200 ease-in-out`}
       >
         <div>
           <div>
             <div className="items-center justify-center hidden w-full px-4 py-2 mx-auto rounded-lg shadow-lg md:flex bg-rose-100">
               <Logo></Logo>
             </div>
           </div>

           {/* Nav Items */}
           <div className="flex flex-col justify-between flex-1 mt-6">
             <nav>
               {/* host menu items */}
               {loggedUserData?.role == "surveyor" && (
                 <SurveyorMenu></SurveyorMenu>
               )}

               {loggedUserData?.role == "admin" && <AdminMenu></AdminMenu>}
             </nav>
           </div>
         </div>

         <div>
           <hr />

           <button
             onClick={logOut}
             className="flex items-center w-full px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700"
           >
             <GrLogout className="w-5 h-5" />

             <span className="mx-4 font-medium">Logout</span>
           </button>
         </div>
       </div>
     </>
   );
}

export default Sidebar