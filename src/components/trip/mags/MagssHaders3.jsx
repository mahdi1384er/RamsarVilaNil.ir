import { NavLink } from "react-router-dom";
import NilRamsarItemss from "../NilRamsar/NilRamsarItems";
import Junlehost from "../../../pages/Jungle/Junlehost/Junlehost";
import DrawerPlacement from "../../navbars/Drawer";

const MagssHaders3 = () => {
  return (
    <>
      <section className="m-auto mt-[20px] w-[95%] h-[1190px] rounded-[8px] p-2 shadow-xl border-1 border-solid border-gray-300 ">
        <div>
          <div className="leading-[26px] text-justify">
            <span className="text-[17px] font-bold text-black">
              کسب و کار رامسر باما
            </span>
            <br />
            <br />

            <div className="text-[16px]">
              <span>
                کسب و کار "رامسر باما" مبتنی است برفناوری اطلاعات و ارتباطات ,
                لذا با ساز و کاری مبتنی بر وب به بازاریابی , بازارسازی و فروش
                اینترنتی خدمات خود می پردازد
              </span>
              <br />
              <span>
                ما قصد داریم از طریق وبسایت “رامسر باما” بستری جذاب و امن را
                فراهم آوریم تا صاحبان خانه ها /ویلاها/آپارتمان ها/کلبه ها و سایر
                اماکن مسکونی بتوانند ملک مبله خود را در تاریخی که خود تعیین می
                کنند و با منظقه شمال ایران رامسر شرایط و نرخی که خود معین می
                کنند, جهت اجاره موقت و روزانه در اختیار گردشگران داخلی و خارجی
                قرار دهند. گردشگرانی که اقامت در خانه های شخصی را به اقامت در
                هتل ها ترجیح می دهند.
              </span>
              <br />
              <span>
                کسب و کار “رامسر باما” سازو کاری پیشرفته و پیشرو می‌باشد که قصد
                دارد با بهره گیری از آخرین فناوریهای حال حاضر دنیای وب, فضایی
                کاربردی و جذاب را برای کاربران خود مهیا سازد و بدین وسیله فرصت
                مغتنمی را برای کسب روزی حلال , در امنیت کامل و به صورت قانونی ,
                برای هزاران نفر از مردمان میهمان نواز "رامسر" این سرزمین کهن
                فراهم آورد.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          <Junlehost />
          <NilRamsarItemss />
          <DrawerPlacement/>
        </div>
      </section>
    </>
  );
};

export default MagssHaders3;
