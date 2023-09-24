import "../../css/index.css";
import NavBarsScrool from "../navbars/NavBars";
import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const b = false;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://my-json-server.typicode.com/mahdi1384er/serchs/serchs/?q=${query}`);
      setData(res.data);
    };

    if (query.length === 0 && query.length == 0) b;
    else if (query.length === 1 || query.length > 1) fetchData();
    else if(query.length === 0 && query.length == 0) b
  }, [query]);

  return (
    <header className="HeaderBg  bg-fixed bg-contain overflow-auto  h-[331px] w-full">
      <div className="w-[94%] h-full m-auto">
        {/* Navigation */}
        <NavBarsScrool />

        <div className="flex items-center flex-col justify-center mt-0 relative top-[114px]">
          <div>
            <h2 className="text-[19px] text-white">
              اجاره ویلا در شمال ایران رامسر
            </h2>
          </div>
          <div>
            <form className="flex items-center">
              <input
                className="search h-[18px] w-[284px]  p-[11px] pt-[19px] pb-[17px] rounded-[16px] bg-white text-[#8D8E8F] text-[12px] font-bold focus:outline-none"
                placeholder="کد ویلاتو سرچ کن ...."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
              <div className="w-[28px] h-[28px] rounded-[100px] bg-blue-600 flex items-center justify-center relative left-[33px]">
                <BiSearch className="text-white text-[20px] "/>
              </div>
            </form>
            <Table data={data} />
          </div>
          <div className="mt-[10px]">
            <h2 className="text-white text-[19px]">رامسر باما</h2>
          </div>
          <div>
            <div className="animate-bounce  mt-[5px]">
              <svg
                className="w-[26px]  h-[24px] text-[#ffff]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
