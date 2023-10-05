import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import NavBarsScrool from "./NavBarsJungle";
import CoastalHeader from "./Jungletems";
import CoastalPool from "./excellent/excellent";
import CoastalElemntItems from "./coastalElemnt/coastalElemnt";
import Excellent from "./excellent/excellent";
import HostItems from "./host/hostItems";
import Junlehost from "./Junlehost/Junlehost";
import { React, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/scaleloader";

const Coastal = () => {
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
      )}
    </>
  );
};

export default Coastal;
