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
        </Route>
      </Routes>
    </>
  );
};

export default AppNav;
