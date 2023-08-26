import NavBarsBottoms from "../../components/navbars/NavBarsBottom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
