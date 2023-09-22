import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Rooms from "./rooms/rooms";
import Home from "./home/home";
import Host from "./host/host";
import Support from "./Sopprt/Support";
import Jungle from "./Jungle/Jungle";
// import Jungle from "./Jungle/Jungle";
import Coastal from "./Jungle copy/coastal";
import Cottage from "./Cottage/coastal";
import Blogs1 from "../components/Excellent/blogs";
import ScrollToTop from "../components/scrool/scrool";
import Blogs2 from "../components/Excellent/blogs2";
import Blogs3 from "../components/Excellent/blogs3";
import Blogs4 from "../components/Excellent/blogs4";
import Blogs5 from "../components/Excellent/blogs5";
import Blogs6 from "../components/Excellent/blogs6";
import Blogs7 from "../components/Excellent/blogs7";
import Blogs8 from "../components/Excellent/blogs8";
import Blogs9 from "../components/Excellent/blogs9";
import Blogs10 from "../components/Excellent/blogs10";
import MagssHaders from "../components/trip/mags/magseHeader";
import Headersmages2 from "../components/trip/mags/Headersmages2";
import Headersmages3 from "../components/trip/mags/headersmages3";




const AppNav = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/host" element={<Host />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Jungle" element={<Jungle />} />
          <Route path="/Coastal" element={<Coastal />} />
          <Route path="/Cottage" element={<Cottage />} />
          <Route path="/blogs/:id" element={<Blogs1 />} />
          <Route path="/special/:id" element={<Blogs2 />} />
          <Route path="/luxury/:id" element={<Blogs3 />} />
          <Route path="/booking/:id" element={<Blogs4 />} />
          <Route path="/jangle/:id" element={<Blogs5 />} />
          <Route path="/janglepool/:id" element={<Blogs6 />} />
          <Route path="/excellent/:id" element={<Blogs7 />} />
          <Route path="/Cottage/:id" element={<Blogs8 />} />
          <Route path="/Cottages/:id" element={<Blogs9 />} />
          <Route path="/Popular/:id" element={<Blogs10 />} />
          <Route path="/Mags" element={<MagssHaders />} />
          <Route path="/Mags2" element={<Headersmages2 />} />
          <Route path="/Mags3" element={<Headersmages3/>} />
        </Route>
      </Routes>
        
    </>
  );
};

export default AppNav;
