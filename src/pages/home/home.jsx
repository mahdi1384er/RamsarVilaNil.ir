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
import UzerConte from "../../components/uzer/uzersco";
import About from "../../components/about/about";

import { React, useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";


const Home = () => {
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

        <HashLoader
        color="#0e7ad3"
        loading={loddings}
        size={106}
        speedMultiplier={1.2}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="relative right-[170px] top-[170px]"
          />
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
          <Reservcontext  />
          <UzerConte />
          <TripContext />
          <About />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
