import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "../Layout";
import Registration from "../../Authorization/Registration/Registration";
import Login from "../../Authorization/Login/Login";
import Instructors from "../../Instructors/Instructors";
import Classes from "../../Classes/Classes";
import Dashboard from "../../Dashboard/Dashboard";
import MyClasses from "../../Dashboard/Student/MyClasses/MyClasses";
import AllUsers from "../../Dashboard/Admin/AllUsers/AllUsers";
import AddClass from "../../Dashboard/Instructors/AddClass/AddClass";
import MyClass from "../../Dashboard/Instructors/MyClass/MyClass";

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
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "myclasses",
        element: <MyClasses />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "myClass",
        element: <MyClass />,
      },
    ],
  },
]);
export default router;
