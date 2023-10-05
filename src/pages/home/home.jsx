import PopularIContext from "../../components/PopularI/PopularIContext";
import ExcellentContext from "../../components/Excellent/ExcellentContext";
import Trust from "../../components/trust/TrustItems";
import SpecialContext from "../../components/special/specialContext";
import LuxuryContext from "../../components/luxury/luxuryContext";
import TripContext from "../../components/trip/TripContext";
import ReservationContext from "../../components/Reservation/ReservationContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import DataWebsite from "../../components/DataWebsite/DataWebsite";
import Reservcontext from "../../components/reserv/reservcontext";
import About from "../../components/about/about";
import Uzer from "../../components/uzer/uzer";
import { React, useState, useEffect } from "react";
import ScaleLoader from "react-spinners/scaleloader";

const Home = () => {
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
          <Header />
          <PopularIContext />
          <DrawerPlacement />
          <ExcellentContext />
          <Trust />
          <SpecialContext />
          <LuxuryContext />
          <DataWebsite />
          <ReservationContext />
          <Reservcontext />
          <Uzer />
          <TripContext />
          <About />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
