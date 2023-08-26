import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Rooms from "./rooms/rooms";
import Home from "./home/home";
import Host from "./host/host";
import Support from "./Sopprt/Support";

const AppNav = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/host" element={<Host />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppNav;
