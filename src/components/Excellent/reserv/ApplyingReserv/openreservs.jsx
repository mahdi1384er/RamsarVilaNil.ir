import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSprayCan } from "react-icons/bi";
import axios from "axios";
import { Rate } from "rsuite";
import { GiHouseKeys } from "react-icons/gi";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";

const Openreservs = () => {
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
                ضمانت تحویل اقامتگاه
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="h-[685px] max-h-[441.75px] text-justify">
            <table>
              <tbody className="relative top-[17px]">
                <div className="text-center text-[16px]">
                  <span>
                    پس از تحویل اقامتگاه به شما و اطمینان از صحیح بودن رزرو،
                    مبلغ اجاره بها به میزبان واریز می‌شود.
                  </span>
                </div>
              </tbody>
            </table>

            <table className="mt-[30px] flex items-center justify-center">
              <tbody className="relative top-[17px]">
                <div className="text-center text-[17px] text-black">
                  <span>ضمانت برگشت وجه پرداختی شما</span>
                </div>
              </tbody>
            </table>

            <table className="w-[100%] mt-[48px] h-[340px] m-auto flex items-center justify-center shadow-xl rounded-[15px]">
              <tbody className="relative ">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="kes">
                      <div className="relative top-[10px] right-[12px]">
                        <GiHouseKeys className="text-[40px] text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[10px] text-center">
                    <span className="text-[17px] text-black">
                      اقامتگاه به من تحویل داده نشده!
                    </span>
                  </div>

                  <div className="mt-[10px]">
                    <span>
                      مبلغ پرداختی شما نزد رامسر باما محفوظ است. درصورتی که
                      اقامتگاهِ رزرو شده، در تاریخ و ساعت درج شده در سند رزرو،
                      به شما تحویل نشده باشد، حداکثر تا ساعت 9 صبح روز بعد از
                      تاریخ شروع رزرو مهلت دارید تا با ثبت شکایت امکان پیگیری را
                      برای پشتیبانی رامسر باما فراهم نمایید. (نکته: پس از پایان
                      مهلت مذکور، مبلغ اجاره بها با میزبان تسویه خواهد شد).
                    </span>
                  </div>

                  <div class="w-[170px] h-[40px] p-2 rounded-[160px] m-auto mt-[20px] bg-blue-600 text-white relative top-[10px] flex items-center justify-center">
                    <span>ثبت شکایت</span>
                  </div>
                </div>
              </tbody>
            </table>

            <table className="w-[100%] mt-[48px] h-[370px] m-auto flex items-center justify-center shadow-xl rounded-[15px]">
              <tbody className="relative ">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="kes">
                      <div className="relative top-[10px] right-[12px]">
                        <HiOutlineClipboardDocument className="text-[40px] text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[10px] text-center">
                    <span className="text-[17px] text-black">
                      اقامتگاه با مشخصات مطابقت ندارد!
                    </span>
                  </div>

                  <div className="mt-[10px]">
                    <span>
                      مبلغ پرداختی شما نزد جاجیگا محفوظ است. درصورتی که اقامتگاه
                      تحویل داده شده با مشخصات و آدرس ثبت شده در سند رزرو اختلاف
                      فاحش داشته باشد، حداکثر تا ساعت 9 صبح روز بعد از تاریخ
                      شروع رزرو مهلت دارید تا با ثبت شکایت و ارائه مدارک لازم،
                      امکان پیگیری را برای پشتیبانی جاجیگا فراهم نمایید. (پس از
                      پایان مهلت مذکور، مبلغ اجاره با میزبان تسویه خواهد شد).
                    </span>
                  </div>

                  <div class="w-[170px] h-[40px] p-2 rounded-[160px] m-auto mt-[20px] bg-blue-600 text-white relative top-[10px] flex items-center justify-center">
                    <span>ثبت شکایت</span>
                  </div>
                </div>
              </tbody>
            </table>

            <table className="w-[100%] mt-[48px] h-[370px] m-auto flex items-center justify-center shadow-xl rounded-[15px]">
              <tbody className="relative ">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="kes">
                      <div className="relative top-[10px] right-[9px]">
                        <BiSprayCan className="text-[40px] text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[10px] text-center">
                    <span className="text-[17px] text-black">
                      اقامتگاه با مشخصات مطابقت ندارد!
                    </span>
                  </div>

                  <div className="mt-[10px]">
                    <span>
                      مبلغ پرداختی شما نزد جاجیگا محفوظ است. درصورتیکه اقامتگاه
                      تحویل داده شده بصورت مناسب نظافت نشده و بصورت واضحی کثیف
                      است، حداکثر تا ساعت 9 صبح روز بعد از تاریخ شروع رزرو مهلت
                      دارید تا با ثبت شکایت و ارائه مدارک لازم، امکان پیگیری را
                      برای پشتیبانی جاجیگا فراهم نمایید. (پس از پایان مهلت
                      مذکور، مبلغ اجاره با میزبان تسویه خواهد شد).
                    </span>
                  </div>

                  <div class="w-[170px] h-[40px] p-2 rounded-[160px] m-auto mt-[20px] bg-blue-600 text-white relative top-[10px] flex items-center justify-center">
                    <span>ثبت شکایت</span>
                  </div>
                </div>
              </tbody>
            </table>
          </Modal.Body>
          <table className="flex items-center justify-center relative top-[10px]">
            <tbody>
              <div className="w-[192px] h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[10px] flex items-center justify-between">
                <a href="https://wa.me/9809300616152" class="bt text-white flex items-center justify-between w-[100%]">
                  <button className="btnAfter">
                    تماس با پشتیبانی رامسر باما
                  </button>
                  <span>
                    <BsTelephone />
                  </span>
                </a>
              </div>
            </tbody>
          </table>

          <Modal.Footer className="w-[63px]">
            <Button onClick={handleClose} appearance="primary"></Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Openreservs;
