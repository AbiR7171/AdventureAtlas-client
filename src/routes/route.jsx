import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import DashBoardLayout from "../layouts/DashBoardLayout";
import CreateTour from "../pages/tour/CreateTour";
import AddTourMembers from "../pages/tour/AddTourMembers";
import TourDashboard from "../pages/tour/TourDashboard";
import SingleTourData from "../pages/tour/SingleTourData";
import EditTourData from "../pages/tour/EditTourData";
import ExpenseHistory from "../pages/tour/ExpenseHistory";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/main",
    element: <PrivateRoute><DashBoardLayout /></PrivateRoute>,
    children: [
      {
        path: "/main/create-tour",
        element: <PrivateRoute><CreateTour /></PrivateRoute>,
      },
      {
        path: "/main/add-members",
        element: <PrivateRoute><AddTourMembers /></PrivateRoute>,
      },
      {
        path: "/main/dashboard",
        element:<PrivateRoute> <TourDashboard /></PrivateRoute>,
      },
      {
        path: "/main/single-tour/:id",
        element: <PrivateRoute><SingleTourData /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://adventure-atlas-server.vercel.app/api/v1/tour/a-tour/${params.id}`
          ),
      },
      {
        path: "/main/edit-tour/:id",
        element: <PrivateRoute><EditTourData /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://adventure-atlas-server.vercel.app/api/v1/tour/a-tour/${params.id}`
          ),
      },
      {
        path:"/main/expense-history/:id",
        element:<PrivateRoute><ExpenseHistory/></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://adventure-atlas-server.vercel.app/api/v1/tour/a-tour/${params.id}`
          ),

      }
    ],
  },
]);

export default route;
