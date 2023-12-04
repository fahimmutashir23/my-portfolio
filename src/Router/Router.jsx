import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Layout from "../Layout/Layout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default Router;
