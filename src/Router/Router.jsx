import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Layout from "../Layout/Layout";
import Projects from "../Components/Projects/Project2";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project",
        element: <Projects></Projects>,
      },
    ],
  },
]);
export default Router;
