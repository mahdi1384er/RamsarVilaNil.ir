import HraderHost from "./HraderHost";
import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import Hostsection from "./hostsection/hostsection";
import Record from "./Record/Record";

import { React, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/scaleloader";

const Host = () => {
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
          <HraderHost />
          <DrawerPlacement />
          <Hostsection />
          <Record />
          <Footer />
        </>
      )}
    </>
  );
};

export default Host;
