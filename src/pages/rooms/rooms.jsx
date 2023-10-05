import HeaderRooms from "./HeaderRoom";
import Footer from "../../components/Footer/Footer";
import PoolContext from "./Pool/poolContext";
import CottagelContext from "./cottage/cottageContext";
import DrawerPlacement from "../../components/navbars/Drawer";
import Support from "./Support/Support";
import SpecialContext from "./special/SpecialContext";
import JungleContext from "./JungleRooms/JungleContext";

import { React, useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const Rooms = () => {
  const [loddings, setlodding] = useState(false);

  useEffect(() => {
    setlodding(true);
    setTimeout(() => {
      setlodding(false);
    }, 3000);
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
          <HeaderRooms />
          <DrawerPlacement />
          <PoolContext />
          <CottagelContext />
          <JungleContext />
          <Support />
          <SpecialContext />
          <Footer />
        </>
      )}
    </>
  );
};

export default Rooms;
