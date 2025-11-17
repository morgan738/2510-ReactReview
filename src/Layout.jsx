import { Outlet } from "react-router";
import NavBar from "./NavBar";
import "./App.css";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
