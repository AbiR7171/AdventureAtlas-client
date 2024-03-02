import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Icon } from "@iconify-icon/react";
import cn from "../utils/cn";


const SideBar = () => {
    const navigate = useNavigate()

    const handleLogOut = () =>{
          localStorage.removeItem("adventure-atlas")
          navigate("/")

    }

    return (
        <div className="h-screen  bg-[#343A40] p-2 overflow-auto sticky left-0 top-0  ">

            <Logo className="text-xl"/>

            <nav className="main-font mt-5 space-y-2">
            <NavLink to="/main/dashboard"
                 className={({isActive})=>cn("flex  gap-2 border-0  text-white p-2 rounded hover:bg-gray-300 hover:text-black transition-all ",
                 {
                     "bg-gray-300 text-black ": isActive
                 }
                 )}
                > <Icon icon="ic:baseline-dashboard" className="text-xl" /><span className="truncate">Dashboard</span></NavLink>

            <NavLink to="/main/create-tour"
                 className={({isActive})=>cn("flex items-center gap-2 text-white p-2 rounded hover:bg-gray-300 hover:text-black  transition-all ",
                 {
                     "bg-gray-300 ": isActive
                 }
                 )}
                > <Icon icon="ic:sharp-create-new-folder" className="text-xl" /><span className="truncate">Create Tour</span></NavLink>

          <NavLink to="/main/add-members"
                 className={({isActive})=>cn("flex items-center  gap-2  text-white p-2 rounded hover:bg-gray-300 hover:text-black  transition-all ",
                 {
                     "bg-gray-300 ": isActive
                 }
                 )}
                > <Icon icon="ic:sharp-create-new-folder" className="text-xl" /><span className="truncate">Add members</span></NavLink>

<hr  className="border-b-0 border-white"/>


<div className="flex justify-center items-center">
<button onClick={handleLogOut} className="bg-red-500 w-full py-2 text-white font-bold">LogOut</button>
</div>

               

            
            </nav>


           <div className="mt-auto space-y-3 flex flex-col justify-center mb-10">

          
           </div>

        
            
        </div>
    );
};

export default SideBar;