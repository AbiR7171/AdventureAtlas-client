import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

const route = createBrowserRouter([
     {
        path:"/",
        element: <SignIn/>
     },
     {
        path:"/signUp",
        element:<SignUp/>
     }
])


export default route