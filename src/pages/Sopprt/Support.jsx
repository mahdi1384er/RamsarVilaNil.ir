import HeaderSupport from "./HeaderSupport";
import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import SupportItems from "./SupportItems";
import DataSopprt from "./Data/DataSopprt";
import { React, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/scaleloader";
const Support = () => {
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
          <HeaderSupport />
          <DrawerPlacement />
          <SupportItems />
          <DataSopprt />
          <Footer />
        </>
      )}
    </>
  );
};

export default Support;
