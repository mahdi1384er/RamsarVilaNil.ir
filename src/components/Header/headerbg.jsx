import { React, useState, useEffect } from "react";
import axios from "axios";

const Headerbg = () => {
  const [data, setdata] = useState([]);

  return (
    useEffect(() => {
      axios
        .get("https://my-json-server.typicode.com/mahdi1384er/Headerbgs/Headerbg")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        {data.map((item) => {
          return <img src={item.imgs} alt="" className="w-full h-full" />;
        })}
      </>
    )
  );
};

export default Headerbg;
