import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";
import Navbar from "../Components/Navbar";
// import bgImg from "../assets/pngegg.png";

const Layout = () => {
  return (
    <div
    //   className="bg-fixed"
    //   style={{
    //     backgroundImage: `url(${bgImg})`,
    //   }}
    >
      {/* <div className="h-full w-full bg-zinc-900 bg-opacity-60"></div> */}
      <div className="flex gap-2 max-w-6xl mx-auto m-4">
        <div className="w-72">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-1">
          <div className="fixed z-10 max-w-[calc(1152px-296px)] w-full">
            <Navbar></Navbar>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
