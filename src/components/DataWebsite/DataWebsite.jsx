// import img from '../../../public/img/imgs/8888888888888.jpg'
// import imgs from '../../../public/img/imgs/5555555.jpg'
import { React, useState, useEffect } from "react";
import axios from "axios";

const DataWebsite = () => {
  const [data, setdata] = useState([]);

  return (
    useEffect(() => {
      axios
        .get("https://my-json-server.typicode.com/mahdi1384er/imgsweb/imgsweb")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <section className="w-[105%] mt-[60px] mb-[10px] m-auto h-[140px] flex items-center justify-around relative right-[13px]">
          {data.map((item) => {
            return (
              <div className="w-[105%]  h-full">
                <img src={item.imgs} alt="" className="rounded-[5px]" />
              </div>
            );
          })}
        </section>
      </>
    )
  );
};

export default DataWebsite;
