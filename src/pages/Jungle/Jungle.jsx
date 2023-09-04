import JungleItems from "./Jungletems";
import Footer from "../../components/Footer/Footer";
import Junglepool from "./junglepool/junglepool";
import JungleJacuzzi from "./jungleJacuzzi/jungleJacuzzi";
import DrawerPlacement from "../../components/navbars/Drawer";
import JunglExcellent from "./junglExcellent/junglExcellent";
import JungleItemsData from "./Data/JungleItemsData";
import Junlehost from "./Junlehost/Junlehost";

const Jungle = () => {
  return (
    <>
      <JungleItems />
      <DrawerPlacement />
      <Junglepool />
      <JungleJacuzzi />
      <JunglExcellent />
      <JungleItemsData />
      <Junlehost />
      <Footer />
    </>
  );
};

export default Jungle;
