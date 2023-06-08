import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "../Layout";
import Registration from "../../Authorization/Registration/Registration";
import Login from "../../Authorization/Login/Login";
import Instructors from "../../Instructors/Instructors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
    ],
  },
]);
export default router;
