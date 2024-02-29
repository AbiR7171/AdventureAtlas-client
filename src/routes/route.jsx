import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import DashBoardLayout from "../layouts/DashBoardLayout";

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
       path:"/main/:id",
       element: <DashBoardLayout/>,
       children: [
         {

         }
       ]
     }
])


export default route