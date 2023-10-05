import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div
      className="hero min-h-screen items-start "
      style={{
        backgroundImage: "url(https://i.ibb.co/R0X6Y3r/Rectangle-1.png)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
