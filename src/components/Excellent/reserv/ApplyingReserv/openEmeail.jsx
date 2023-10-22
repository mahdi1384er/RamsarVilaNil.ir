import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { Rate } from "rsuite";
import { LuBookMarked } from "react-icons/lu";

const Openreserv = () => {
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
          className="relative bottom-[24px] h-[40px] w-[170px] "
        >
          <Button></Button>
        </ButtonToolbar>

        <Modal
          open={open}
          onClose={handleClose}
          className="relative  h-[500px] bottom-[-29px]"
          onEntered={handleEntered}
          onExited={() => {
            setRows(0);
          }}
        >
          <Modal.Header>
            <div></div>
            <Modal.Title className="relative right-[-17px] top-[18px] flex items-center justify-center">
              <span className=" text-[17px] font-bold">
                پرسش و پاسخ راهنمای رزرو رامسرباما
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="h-[100%] text-justify">
            <table>
              <tbody className="relative top-[17px]">
                <div>
                  <span className="text-black text-[16px]">چطور رزرو کنم؟</span>
                  <br />
                  <span>
                    پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست
                    رزرو خود را به‌صورت رایگان ثبت کنید ( لطفا دقت داشته باشید اطلاعات تاریخ ورود و تعداد نفرات را به خاطر بسپارید) تا اطلاعات  برای پشتیبانی رامسر باما ارسال
                    ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را
                    تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال
                    می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت
                    مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب،
                    شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را
                    دریافت کنید.
                  </span>
                </div>
              </tbody>
            </table>
            <table>
              <tbody className="relative top-[37px]">
                <div>
                  <span className="text-black text-[16px]">
                    تایید یا رد درخواست رزرو چقدر طول می‌کشد؟
                  </span>
                  <br />
                  <span>
                    به‌طور میانگین در کمتر از 15 دقیقه به درخواست ها پاسخ داده
                    می‌شود. سابقه زمان پاسخگویی هر میزبان به درخواست های رزرو
                    قبلی با کلیک بر روی تصویر میزبان قابل مشاهده است. حداکثر
                    مهلت پاسخگویی میزبانان به درخواست رزرو در ساعات کاری 30
                    دقیقه است و در ساعات نیمه شب مهلت پاسخگویی تا صبح روز بعد
                    تمدید می‌گردد. مهلت پاسخگویی به صورت لحظه‌ای در صفحه رزرو
                    قابل مشاهده می‌باشد.
                  </span>
                </div>
              </tbody>
            </table>
            <table>
              <tbody className="relative top-[47px]">
                <div>
                  <span className="text-black text-[16px]">
                    رامسر باما دقیقاً چه خدمتی ارائه می‌دهد؟
                  </span>
                  <br />
                  <span>
                    این کسب و کار بستریست تا میزبانان و صاحبان منازل و اقامتگاه
                    ها بتوانند ملک خود را در محیطی امن و پیشرفته، با صرف حداقل
                    زمان و هزینه برای اجاره روزانه عرضه کنند و از سوی دیگر
                    گردشگران بتوانند اقامتگاهی مطابق با سلیقه و شرایط و بودجه
                    مورد نظر خود را به سهولت در منظقه شمال ایران رامسر بیابند و
                    بصورت آنلاین رزرو کنند و سفری بدون دغدغه ی مکان اقامت را در
                    شمال ایران زیبا تجربه کنند.
                  </span>
                </div>
              </tbody>
            </table>
            <table>
              <tbody className="relative top-[57px]">
                <div>
                  <span className="text-black text-[16px]">
                    چه مناطقی از کشور تحت پوشش رامسر باما است؟
                  </span>
                  <br />
                  <span>
                    در حال حاضر اقامتگاه های منطقه شمال ایران رامسر تحت پوشش
                    می‌باشد, و به زودی مناطق شمال کشور ایران را نیز رامسر باما
                    پوشش خواهد داد
                  </span>
                </div>
              </tbody>
            </table>
          </Modal.Body>

          <Modal.Body>
            <table className="flex items-center justify-center">
              <tbody>
              <a href="https://wa.me/9809300616152" class="bt text-white">
                <div class="w-[192px] h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[10px] flex items-center justify-between">
                  <button >تماس با پشتیبانی رامسر باما</button>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                    </svg>
                  </span>
                </div>
                </a>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer className="w-[63px]">
            <Button onClick={handleClose} appearance="primary"></Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Openreserv;
