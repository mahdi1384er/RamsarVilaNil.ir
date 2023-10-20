import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import CottageItemsData from "./Cottage/Cottage";
import CottageHeader from "./CottageHeader";
import CottageElemnt from "./CottageElemnt/CottageElemnt";
import Cottages from "./coastalexcellent/exceltems";
import NilRamsarItems from "./NilRamsar/NilRamsarItems";
import { React, useState, useEffect } from "react";
import ScaleLoader  from "react-spinners/ScaleLoader";
import Supports from "../../components/navbars/support";

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
         <ScaleLoader 
         color="#0e7ad3"
         loading={loddings}
         size={106}
         speedMultiplier={1.2}
         aria-label="Loading Spinner"
         data-testid="loader"
         className="text-center m-auto flex justify-center relative  top-[170px]"
       />)
      :<>
      <DrawerPlacement />
      <Supports/>
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
