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


const Blogs1 = ({ id }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();


  useEffect(() => {
    fetch(`http://localhost:3000/Cottages/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  });


 


  return (
    <div className="w-full h-[900px] bg-gray-200">
      <div className="imgsdata h-[300px] post-container">
        <img
          src={post.img} // <----- HERE
          alt="2"
          className="sticky h-[547px] w-full bottom-[14px] opacity-90"
        />

        <div className=" relative bottom-[168px]">
          <div>
            <span className="text-[30px] text-white relative right-[10px]">
              {post.title}
            </span>
          </div>
          <div className="flex w-[165px] mt-[10px] justify-between">
            <div>
              <span className="text-[17px] relative right-[10px] text-white">
                {post.author}
              </span>
            </div>
            <div>
              <div>
                <Rate
                  readOnly
                  defaultValue={5}
                  allowHalf
                  className="text-[18px] h-[20px] w-[100px] mb-[5px]"
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
        <NavBarsScrool />
        <DrawerPlacement />
        <Accommodations />
        <SpecialContexts titels={post.titels} />
        <Footers />
      </div>
    </div>
  );
};

export default Blogs1;
