import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";

const Layout = () => {
    return (
        <div className="flex gap-2 max-w-6xl mx-auto m-4">
            <div className="w-72">
            <Sidebar></Sidebar>
            </div>
            <div className="flex-1">
            <Outlet></Outlet>
            </div>            
        </div>
    );
};

export default Layout;