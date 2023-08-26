import HeaderRooms from "./HeaderRoom";
import Footer from "../../components/Footer/Footer";
import PoolContext from "./Pool/poolContext";
import CottagelContext from "./cottage/cottageContext";
import CoastalContext from "./coastal/CoastalContext";
import DrawerPlacement from "../../components/navbars/Drawer";
import Support from "./Support/Support";
import SpecialContext from "./special/SpecialContext";
import JungleContext from "./JungleRooms/JungleContext";

const Rooms = () => {
  return (
    <>
      <HeaderRooms />
      <DrawerPlacement />
      <PoolContext />
      <CottagelContext />
      <CoastalContext />
      <JungleContext/>
      <Support />
      <SpecialContext />
      <Footer />
    </>
  );
};

export default Rooms;
