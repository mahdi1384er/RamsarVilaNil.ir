import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import axios from "axios";
import { Rate } from "rsuite";
import { TbHomeDot } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { GoHome } from "react-icons/go";

const Opendata = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(0);
  const handleOpen = () => setOpen(true);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleClose = () => setOpen(false);
  const b = false;
  const c = false;

  const handleEntered = () => {
    setTimeout(() => setRows(80), 5000);
  };

  return (
    <>
      <div className="">
        <ButtonToolbar
          onClick={handleOpen}
          className="relative bottom-[35px] w-[90px] h-[60px]"
        >
          <Button></Button>
        </ButtonToolbar>

        <Modal
          open={open}
          onClose={handleClose}
          className="relative bottom-[-2px] h-[450px]"
          onEntered={handleEntered}
          onExited={() => {
            setRows(0);
          }}
        >
          <Modal.Header className="">
            <div></div>
            <Modal.Title className="relative right-[-17px] top-[-4px] flex items-center justify-center">
              <span className=" text-[17px] font-bold">راهنمای رامسرباما</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="h-[309px] w-[105%] pl-[20px]">
            <table>
              <tbody className="relative top-[10px]">
                <div>
                  <span className="text-[16px] text-black">
                    کسب و کاری بر اساس به اشتراک گذاشتن اقامتگاه‌های شخصی و
                    مردمی
                  </span>
                </div>
                <div className="mt-[5px] font-bold text-justify leading-[24px]">
                  <div>
                    <span>
                      رامسرباما پلتفرمی ست که در آن صاحبان اقامتگاه‌ها، فضای
                      اقامتی بیش از نیاز روزمره خود را با خاطری ‏آسوده، در
                      روزهایی از سال، با بهایی مناسب و با شرایط مد نظر خود، در
                      اختیار گردشگران و میهمانان علاقه‌مند ‏می گذارند. برای این
                      کار، میزبانان می‌بایست، اقامتگاه‌های خود را، طی مراحلی
                      مشخص و آسان‌سازی شده، با ‏جزییات کامل ثبت کنند. جزییاتی
                      همچون مشخصات، مکان جغرافیایی، امکانات فراهم شده، خدمات
                      قابل ارائه، ‏عکس‌های گویا از داخل و خارج اقامتگاه، مقررات
                      خاص اقامتگاه، تقویم کاری، ساعات تحویل و تخلیه اقامتگاه،
                      ‏اجاره بها به تفکیک هر روز/شب و غیره …
                    </span>
                  </div>

                  <div className="mt-[14px]">
                    <span className="text-[16px] text-black">
                      خدمات شبانه روزی به کاربران
                    </span>
                  </div>
                  <div>
                    <span>
                      قصد سفر دارید و یا می‌خواهید میزبانی کنید، در هر صورت ما،
                      قبل، بعد و در حین سفر و دوره اقامت، در کنارتان خواهیم بود
                      و شما را در تجربیات تان همراهی خواهیم کرد.
                    </span>
                  </div>
                  <div className="mt-[14px]">
                    <span className="text-[16px] text-black">
                      محیطی امن، لذت بخش و حرفه ای، برای اجاره روزانه
                      اقامتگاه‌ها ‏به‌صورت آنلاین
                    </span>
                  </div>
                  <div>
                    <span>
                      رامسرباما به اشتراک گذاشتن اماکن اقامتی را برای کاربران،
                      آسان، لذت بخش و امن می‌کند.
                    </span>
                  </div>
                  <div>
                    <span>
                      با تأیید حساب کاربری افراد پیش از شروع مبادله، اعتماد و
                      تعامل مابین کاربران افزایش می یابد.
                    </span>
                  </div>

                  <div>
                    <span>
                      پاسخ بیشتر سوالات شما درباره رامسرباما در بخش «راهنما»ی
                      سایت فراهم شده است، برای هرآنچه که نیافتید.
                    </span>
                  </div>
                </div>
              </tbody>
            </table>
            <table></table>
          </Modal.Body>

          <Modal.Body>
          <a href="tel:09300616152">
            <table className="flex items-center justify-center">
              <tbody className="w-[159%] flex items-center justify-center">
                <div className="w-[159%]  h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[10px] flex items-center justify-center">
                  <div className="pl-[9px]">
                    <span>
                      <AiOutlinePhone className="text-[19px]" />
                    </span>
                  </div>
                  <div>
                    <span>تماس با تلفن پشتیبانی</span>
                  </div>
                </div>
              </tbody>
            </table>
            </a>
            <div className=" w-[200px]  h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[20px] flex items-center justify-center m-auto">
              <div className="pl-[9px]">
                <span>
                  <GoHome className="text-[19px]" />
                </span>
              </div>
              <div>
                <NavLink to="/">
                  <span>بازگشت به صفحه اصلی</span>
                </NavLink>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="w-[63px]">
            <Button onClick={handleClose} appearance="primary"></Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Opendata;
