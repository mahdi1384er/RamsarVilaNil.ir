import HeaderRooms from "./HeaderRoom";
import Footer from "../../components/Footer/Footer";
import PoolContext from "./Pool/poolContext";
import CottagelContext from "./cottage/cottageContext";
import DrawerPlacement from "../../components/navbars/Drawer";
import Support from "./Support/Support";
import SpecialContext from "./special/SpecialContext";
import JungleContext from "./JungleRooms/JungleContext";

import { React, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/scaleloader";

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
