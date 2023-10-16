import JungleItems from "./Jungletems";
import Footer from "../../components/Footer/Footer";
import Junglepool from "./junglepool/junglepool";
import JungleJacuzzi from "./jungleJacuzzi/jungleJacuzzi";
import DrawerPlacement from "../../components/navbars/Drawer";
import JunglExcellent from "./junglExcellent/junglExcellent";
import JungleItemsData from "./Data/JungleItemsData";
import Junlehost from "./Junlehost/Junlehost";

import { React, useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Supports from "../../components/navbars/support";

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
        <HashLoader
            color="#0e7ad3"
            loading={loddings}
            size={106}
            speedMultiplier={1.2}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="relative right-[170px] top-[170px]"
          />
     </div>
      ) : (
        <>
          <JungleItems />
          <Supports/>
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
