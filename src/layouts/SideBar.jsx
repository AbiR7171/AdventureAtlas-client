import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import { Icon } from "@iconify-icon/react";
import cn from "../utils/cn";


const SideBar = () => {

    return (
        <div className="h-screen border p-2 overflow-auto sticky left-0 top-0">

            <Logo className="text-3xl"/>

            <nav className="main-font mt-5 space-y-2">
            <NavLink to="/main/dashboard"
                 className={({isActive})=>cn("flex items-center justify-center gap-2 border-0 bg-gray-200 text-black p-2 rounded hover:bg-gray-300 transition-all ",
                 {
                     "bg-gray-300 ": isActive
                 }
                 )}
                > <Icon icon="ic:baseline-dashboard" className="text-xl" /><span className="truncate">Dashboard</span></NavLink>

            <NavLink to="/main/create-tour"
                 className={({isActive})=>cn("flex items-center justify-center gap-2 border-0 bg-gray-200 text-black p-2 rounded hover:bg-gray-300 transition-all ",
                 {
                     "bg-gray-300 ": isActive
                 }
                 )}
                > <Icon icon="ic:sharp-create-new-folder" className="text-xl" /><span className="truncate">Create Tour</span></NavLink>

          <NavLink to="/main/add-members"
                 className={({isActive})=>cn("flex items-center justify-center gap-2 border-0 bg-gray-200 text-black p-2 rounded hover:bg-gray-300 transition-all ",
                 {
                     "bg-gray-300 ": isActive
                 }
                 )}
                > <Icon icon="ic:sharp-create-new-folder" className="text-xl" /><span className="truncate">Add members</span></NavLink>
            </nav>
            
        </div>
    );
};

export default SideBar;