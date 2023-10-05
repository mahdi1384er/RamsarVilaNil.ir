import HeaderSupport from "./HeaderSupport";
import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import SupportItems from "./SupportItems";
import DataSopprt from "./Data/DataSopprt";
import { React, useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
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
