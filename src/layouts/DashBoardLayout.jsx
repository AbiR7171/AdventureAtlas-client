import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashBoardLayout = () => {
    return (
        <div className="grid grid-cols-12">

            <div className="col-span-2">
                     <SideBar/>
            </div>

            <div className="col-span-10 bg-gradient-to-r from-cyan-500 to-cyan-900">
                <Outlet/>
            </div>

        
            
        </div>
    );
};

export default DashBoardLayout;