import HeaderSupport from "./HeaderSupport";
import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import SupportItems from "./SupportItems";
import DataSopprt from "./Data/DataSopprt";

const Support = () => {
  return (
    <>
      <HeaderSupport />
      <DrawerPlacement />
      <SupportItems />
      <DataSopprt />
      <Footer />
    </>
  );
};

export default Support;
