import { AiFillStar } from "react-icons/ai";

const Populsr = ({ src, title, author, star, SevedData }) => {
  return (
    <>
      <div className="m-[10px] flex items-center w-[100%]" onClick={SevedData}>
        <div className="rounded-[15px]">
          <div className="flex items-center justify-between w-[267px]">
            <img
              src={src}
              alt=""
              className="w-[267px] h-[150px] rounded-[12px]"
            />
          </div>

          <div className="flex items-center justify-between relative bottom-[63px] right-[8px]">
            <div className="flex flex-col">
              <div className="relative top-[10px]">
                <h2 className="color-white text-[17px] ">{title}</h2>
              </div>
              <div className="relative  bottom-[4px] left-[2px]">
                <p className="color-white text-[10px]  pr-[2px]">{author}</p>
              </div>
            </div>
            <div className="flex items-center w-[26%] mt-[16px]">
              <div>
                <AiFillStar className="text-[#F7B701] w-[13px] " />
              </div>
              <div>
                <span className="text-[13px] m-[2px] pt-[2px] text-white">{star}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Populsr;
