import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import NavBarsScrool from "./NavBarsJungle";
import CottageItemsData from "./Cottage/Cottage";
import CottageHeader from "./CottageHeader";
import CottageElemnt from "./CottageElemnt/CottageElemnt";
import Cottages from "./coastalexcellent/exceltems";
import NilRamsarItems from "./NilRamsar/NilRamsarItems";

const Cottage = () => {
  return (
    <>
      <DrawerPlacement />
      <NavBarsScrool />
      <CottageHeader />
      <CottageItemsData />
      <CottageElemnt />
      <Cottages />
      <NilRamsarItems />
      <Footer />
    </>
  );
};

export default Cottage;
