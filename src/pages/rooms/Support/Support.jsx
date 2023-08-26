const SuporttData = [
  {
    id: 1,
    titel: "کم هزینه و باکیفیت",
    imgs: "../../../../public/img/l1.svg",
  },
  {
    id: 2,
    titel: "پاسخگوی 24 ساعته",
    imgs: "../../../../public/img/l2.png",
  },
  {
    id: 3,
    titel: "خاص ترین لوکیشن ها",
    imgs: "../../../../public/img/l3.png",
  },
  ,
  {
    id: 4,
    titel: "بهترین ویلاها رامسر نیل",
    imgs: "../../../../public/img/l4.svg",
  },
];

const Support = () => {
  return (
    <>
      <section className="w-[95%] mt-[10px] h-[100px] m-auto">
        <div className="flex flex-wrap justify-between">
          {SuporttData.map((item, index) => {
            return (
              <div key={index} className="flex items-center flex-wrap justify-evenly mt-[5px] mr-0 ml-0 mb-[6px] p-[2px] w-[188px] h-[46px] bg-[#E4E4E4] rounded-[6px]">
                <div>
                  <img
                    src={item.imgs}
                    alt=""
                    className="w-[26px] h-[26px] mt-[3px]"
                  />
                </div>
                <div>
                  <span className="text-[14px] font-bold">
                        {item.titel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Support;
