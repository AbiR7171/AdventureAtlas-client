import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import DashBoardLayout from "../layouts/DashBoardLayout";
import CreateTour from "../pages/tour/CreateTour";
import AddTourMembers from "../pages/tour/AddTourMembers";

const route = createBrowserRouter([
     {
        path:"/",
        element: <SignIn/>
     },
     {
        path:"/signUp",
        element:<SignUp/>
     },
     {
       path:"/main",
       element: <DashBoardLayout/>,
       children: [
         {
             path:"/main/create-tour",
             element: <CreateTour/>
         },
         {
           path: "/main/add-members",
           element:<AddTourMembers/>
         }
       ]
     }
])


export default route