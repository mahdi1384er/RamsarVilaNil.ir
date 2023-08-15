import Header from "./components/Header/Header";
import PopularIContext from "./components/PopularI/PopularIContext";
import ExcellentContext from "./components/Excellent/ExcellentContext";
import Trust from "./components/trust/TrustItems";
import SpecialContext from "./components/special/specialContext";
import LuxuryContext from "./components/luxury/luxuryContext";
import TripContext from "./components/trip/TripContext";

const App = () => {
  return (
    <div className="w-[100%] m-auto h-[1990px]">
      <Header />
      <PopularIContext />
      <ExcellentContext />
      <Trust />
      <SpecialContext />
      <LuxuryContext />
      <TripContext />
    </div>
  );
};

export default App;
