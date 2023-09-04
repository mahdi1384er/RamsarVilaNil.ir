import NavBarsBottoms from "../../components/navbars/NavBarsBottom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet/>
      <NavBarsBottoms />
    </>
  );
};

export default Layout;
