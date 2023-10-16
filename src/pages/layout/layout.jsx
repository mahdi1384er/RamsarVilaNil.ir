import NavBarsBottoms from "../../components/navbars/NavBarsBottom";
import { Outlet } from "react-router-dom";
import Supports from "../../components/navbars/support";

const Layout = () => {
  return (
    <>
      <Outlet/>
      {/* <Supports/> */}
      <NavBarsBottoms />
    </>
  );
};

export default Layout;
