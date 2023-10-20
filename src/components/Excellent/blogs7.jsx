import { React, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Rate } from "rsuite";
import DrawerPlacement from "../navbars/Drawer";
import Itemsblogs from "./Itemsblogs";
import NavBarsScrool from "../../pages/Cottage/NavBarsJungle";
import Apps from "./Calendar/Calendar";
import Accommodations from "./accommodations/Accommodations";
import Footers from "./Footer/Footers";
import SpecialContexts from "./special/specialContext";
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import SupportsItemss from "./support";
import NavbarsBlogs from "./navbars/navbarsBlogs";

import Regulation from "./regulation/regulation";


const Blogs7 = ({ id }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/mahdi1384er/excellent/excellent/${params.id}`
    )
      .then((response) => response.json())
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  });
  const [loddings, setlodding] = useState(false);

  useEffect(() => {
    setlodding(true);
    setTimeout(() => {
      setlodding(false);
    }, 3000);
  }, []);

  return (
    <div className="w-[111%] relative right-[-2px] h-[900px] bg-gray-200">
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
          <div className="imgsdata w-[99%] h-[300px] post-container">
            <img
              src={post.img} // <----- HERE
              alt="2"
              className="relative right-[6px] h-[547px] w-[111%] bottom-[14px] opacity-90"
            />

            <div className=" relative bottom-[210px]">
              <div className="relative bottom-[28px] right-[5px]">
                <span class="abousts top-[18px] backdrop-blur-2xl text-[30px] text-white relative right-[10px]">
                  {post.title}
                </span>
              </div>
              <div></div>
              <div className="flex w-[183px] mt-[10px] justify-between">
                <div>
                  <span className="text-[17px] relative right-[17px] text-white rounded-[50px] bg-blue-600 pr-[13px] pl-[13px] pt-[3px] pb-[3px]">
                    {post.author}
                  </span>
                </div>
                <div className="w-[99px] relative bottom-[3px] right-[14px]">
                  <div>
                    <Rate
                      readOnly
                      defaultValue={5}
                      allowHalf
                      className="text-[24px] h-[20px] w-[134px] mb-[5px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Itemsblogs
              TitelReserv={post.TitelReserv}
              TitelAbout={post.TitelAbout}
              StandardCapacity={post.StandardCapacity}
              Maximumcapacity={post.Maximumcapacity}
              Meterage={post.Meterage}
              residence={post.residence}
              bed1={post.bed1}
              bed2={post.bed2}
              author={post.author}
              data={post.data}
              priecs={post.priecs}
              imgsSliders={post.imgsSliders}
              imgsSliders2={post.imgsSliders2}
              imgsSliders3={post.imgsSliders3}
              imgsSliders4={post.imgsSliders4}
              imgsSliders5={post.imgsSliders5}
              imgsSliders6={post.imgsSliders6}
              imgsSliders7={post.imgsSliders7}
              imgsSliders8={post.imgsSliders8}
              imgsSliders9={post.imgsSliders9}
            />

            <Apps />
            <NavbarsBlogs/>
            <SupportsItemss />
            <DrawerPlacement />
            <Accommodations />
            <Regulation />
            <SpecialContexts titels={post.titels} />
            <Footers />
          </div>
        </>
      )}
    </div>
  );
};

export default Blogs7;
