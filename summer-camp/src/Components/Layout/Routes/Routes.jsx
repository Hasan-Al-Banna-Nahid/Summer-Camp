import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "../Layout";
import Registration from "../../Authorization/Registration/Registration";

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
    ],
  },
]);
export default router;
