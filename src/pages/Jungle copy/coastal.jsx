import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import NavBarsScrool from "./NavBarsJungle";
import CoastalHeader from "./Jungletems";
import CoastalPool from "./excellent/excellent";
import CoastalElemntItems from "./coastalElemnt/coastalElemnt";
import Excellent from "./excellent/excellent";
import HostItems from "./host/hostItems";
import Junlehost from "./Junlehost/Junlehost";

const Coastal = () => {
  return (
    <>
      <DrawerPlacement />
      <CoastalHeader />
      <NavBarsScrool />
      <CoastalPool />
      <CoastalElemntItems />
      <Excellent />
      <HostItems />
      <Junlehost />
      <Footer />
    </>
  );
};

export default Coastal;
