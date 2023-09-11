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
const Home = () => {
  return (
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
      <TripContext />
      <Footer />
    </>
  );
};

export default Home;
