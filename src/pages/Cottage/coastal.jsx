import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import CottageItemsData from "./Cottage/Cottage";
import CottageHeader from "./CottageHeader";
import CottageElemnt from "./CottageElemnt/CottageElemnt";
import Cottages from "./coastalexcellent/exceltems";
import NilRamsarItems from "./NilRamsar/NilRamsarItems";
import { React, useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const Cottage = () => {
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
       />)
      :<>
      <DrawerPlacement />
      <CottageHeader />
      <CottageItemsData />
      <CottageElemnt />
      <Cottages />
      <NilRamsarItems />
      <Footer />  
      </>
      }
    
    </>
  );
};

export default Cottage;
