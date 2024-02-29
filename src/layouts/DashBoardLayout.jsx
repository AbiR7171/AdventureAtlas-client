import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashBoardLayout = () => {
    return (
        <div className="grid grid-cols-12">

            <div className="col-span-4">
                     <SideBar/>
            </div>

            <div>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default DashBoardLayout;