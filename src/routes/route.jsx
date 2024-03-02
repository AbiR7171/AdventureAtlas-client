import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import DashBoardLayout from "../layouts/DashBoardLayout";
import CreateTour from "../pages/tour/CreateTour";
import AddTourMembers from "../pages/tour/AddTourMembers";
import TourDashboard from "../pages/tour/TourDashboard";
import SingleTourData from "../pages/tour/SingleTourData";
import EditTourData from "../pages/tour/EditTourData";

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
    element: <DashBoardLayout />,
    children: [
      {
        path: "/main/create-tour",
        element: <CreateTour />,
      },
      {
        path: "/main/add-members",
        element: <AddTourMembers />,
      },
      {
        path: "/main/dashboard",
        element: <TourDashboard />,
      },
      {
        path: "/main/single-tour/:id",
        element: <SingleTourData />,
        loader: ({ params }) =>
          fetch(
            `https://adventure-atlas-server.vercel.app/api/v1/tour/a-tour/${params.id}`
          ),
      },
      {
        path: "/main/edit-tour/:id",
        element: <EditTourData />,
        loader: ({ params }) =>
          fetch(
            `https://adventure-atlas-server.vercel.app/api/v1/tour/a-tour/${params.id}`
          ),
      },
    ],
  },
]);

export default route;
