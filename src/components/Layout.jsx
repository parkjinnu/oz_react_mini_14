import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-18">
        <Outlet />
      </div>
    </div>
  );
};  

export default Layout;
