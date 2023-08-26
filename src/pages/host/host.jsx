import HraderHost from "./HraderHost";
import Footer from "../../components/Footer/Footer";
import DrawerPlacement from "../../components/navbars/Drawer";
import Hostsection from "./hostsection/hostsection";
import Record from "./Record/Record";

const Host = () => {
  return (
    <>
      <HraderHost />
      <DrawerPlacement />
      <Hostsection />
      <Record />
      <Footer />
    </>
  );
};

export default Host;
