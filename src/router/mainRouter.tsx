/** @format */

import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/common/Layout";
import Homescreen from "../pages/Homescreen";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import DetailScreen from "../pages/DetailScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
      {
        index: true,
        path: "/detail",
        element: <DetailScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
]);
