import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="overflow-hidden mx-3 md:mx-0">
      <div className="md:flex gap-2 max-w-6xl mx-auto m-4">
        <div className="w-full md:w-72">
          <Sidebar></Sidebar>
        </div>
        <div className="md:flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
