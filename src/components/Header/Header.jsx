import "../../css/index.css";
import NavBarsScrool from "../navbars/NavBars";
import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

const Header = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const b = false;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://elegant-yak-tux.cyclic.app/bestItem/?q=${query}`);
      setData(res.data);
    };

    if (query.length === 0 && query.length == 0) b;
    else if (query.length === 1 || query.length > 1) fetchData();
    else if(query.length === 0 && query.length == 0) b
  }, [query]);

  return (
    <header className="HeaderBg  bg-fixed bg-contain overflow-auto  h-[210px] w-full">
      <div className="w-[94%] h-full m-auto">
        {/* Navigation */}
        <NavBarsScrool />

        <div className="flex items-center flex-col justify-center mt-0 relative top-[57px]">
          <div>
            <h2 className="text-[16px] text-white font-bold">
              اجاره ویلا در شمال ایران رامسر
            </h2>
          </div>
          <div>
            <form>
              <input
                className="search h-[18px] w-[209px]  p-[11px] pt-[12px] pb-[13px] rounded-[14px] bg-white text-[#8D8E8F] text-[11px] font-bold focus:outline-none"
                placeholder="کد ویلاتو سرچ کن ...."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
            </form>
            <Table data={data} />
          </div>
          <div>
            <h2 className="text-white text-[14px]">رامسر نیل</h2>
          </div>
          <div>
            <div className="animate-bounce  mt-[4px]">
              <svg
                className="w-4 h-4 text-[#ffff]"
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
