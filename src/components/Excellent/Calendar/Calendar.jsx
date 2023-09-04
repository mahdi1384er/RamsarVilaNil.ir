import "../../../css/index.css";
import { React, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Apps = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <section className="w-[97%] relative bottom-[0px]  h-[80px] m-auto">
      <div className="relative top-[0px] w-[95%] h-[500px] m-auto ">
        <div className="mb-[10px] flex items-center justify-between"></div>

        <div className="mt-[25px]">
          <HiCalendar className="headerIcon dateIcon w-full text-blue-600 hidden" />
          <div className="dateDropDown w-[100%] m-auto text-center flex items-center justify-around mb-[10px] ">
            {`${format(date[0].startDate, "MM/dd/yyyy")}    از   ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}
          </div>
          {
            <DateRange
              onChange={(item) => setDate([item.selection])}
              ranges={date}
              className="date w-full mt-[20px]"
              minDate={new Date()}
              moveRangeOnFirstSelection={true}
            />
          }
          <span className="seperator w-full"></span>
        </div>
      </div>
      <div className="w-[95%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[-40px]"></div>
    </section>
  );
};

export default Apps;
