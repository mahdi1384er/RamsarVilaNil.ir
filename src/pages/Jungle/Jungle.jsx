import JungleItems from "./Jungletems";
import Footer from "../../components/Footer/Footer";
import Junglepool from "./junglepool/junglepool";
import JungleJacuzzi from "./jungleJacuzzi/jungleJacuzzi";
import DrawerPlacement from "../../components/navbars/Drawer";
import JunglExcellent from "./junglExcellent/junglExcellent";
import JungleItemsData from "./Data/JungleItemsData";
import Junlehost from "./Junlehost/Junlehost";

import { React, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/scaleloader";

const Jungle = () => {
  const [loddings, setlodding] = useState(false);

  useEffect(() => {
    setlodding(true);
    setTimeout(() => {
      setlodding(false);
    }, 4000);
  }, []);
  return (
    <>
      {loddings ? (
       <div style={{ textAlign: "center" }}>
       <ScaleLoader
         color="#0e7ad3"
         loading={loddings}
         size={136}
         speedMultiplier={1.2}
         aria-label="Loading Spinner"
         data-testid="loader"
         className="flex items-center justify-center mt-[150px]"
       />
     </div>
      ) : (
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
      )}
    </>
  );
};

export default Jungle;
