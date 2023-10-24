import {
  Modal,
  ButtonToolbar,
  Button,
  DateRangePicker,
  InputPicker,
} from "rsuite";
import { useEffect, useState } from "react";
import { LuBookMarked } from "react-icons/lu";
import { BsShieldCheck } from "react-icons/bs";
import Openreserv from "./openEmeail";
import Openreservs from "./openreservs";

const ApplyingReserv = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(0);
  const handleOpen = () => setOpen(true);
  const [query, setQuery] = useState("");
  const data = [
    "1 نفر",
    "2 نفر",
    "3 نفر",
    "4 نفر",
    "5 نفر",
    "7 نفر (6 نفر + 1 نفر اضافه)",
  ].map((item) => ({ label: item, value: item }));
  const [value, setValue] = useState(null);

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
          className="relative bottom-[35px] w-[130px] h-[50px]"
        >
          <Button></Button>
        </ButtonToolbar>

        <Modal
          open={open}
          onClose={handleClose}
          className="relative bottom-[-28px]"
          onEntered={handleEntered}
          onExited={() => {
            setRows(0);
          }}
        >
          <Modal.Body>
            <table className="mb-[10px]">
              <tbody className="relative ">
                <div>
                  <span className="text-[17px] ">تاریخ سفر</span>
                </div>
                <div className="relative top-[5px]">
                  <DateRangePicker
                    showOneCalendar
                    className="w-[335px]"
                    placeholder={["تاریخ ورود", "", "/", "", "تاریخ خروج"]}
                  />
                </div>
              </tbody>
            </table>
            <table>
              <tbody className="relative top-[10px] ">
                <div>
                  <span className="text-[17px]">تعداد نفرات</span>
                </div>
                <div className="relative top-[5px]">
                  <InputPicker
                    value={value}
                    onChange={setValue}
                    data={data}
                    className="w-[335px]"
                  />
                </div>
              </tbody>
            </table>
          </Modal.Body>

          <Modal.Body>
            <table className="flex items-center justify-center">
              <tbody>
                <a href="https://wa.me/9809300616152" class="bt text-white">
                  <div className="w-[323px] h-[40px] p-2 rounded-[30px] bg-blue-600 text-white relative top-[10px] flex items-center justify-center">
                    <button className="">
                      ثبت درخواست رزرو
                      <span className="text-[13px] font-normal">(رایگان)</span>
                    </button>
                  </div>
                </a>
              </tbody>
            </table>
          </Modal.Body>

          <Modal.Body className="flex items-center w-[104%] justify-between">
            <table className="flex items-center justify-center">
              <tbody>
                <div className="shadoboxRomms  w-[167px] h-[40px] p-2 rounded-[7px] bg-white  text-black relative top-[10px] flex items-center justify-center">
                  <span className="relative left-[5px] top-[2px]">
                    <LuBookMarked />
                  </span>
                  <span>راهنمای رزرو</span>
                </div>
                <div>
                  <Openreserv />
                </div>
              </tbody>
            </table>
            <table className="flex items-center justify-center">
              <tbody>
                <div className="shadoboxRomms  w-[167px] h-[40px] p-2 rounded-[7px] bg-white  text-black relative top-[10px] flex items-center justify-center">
                  <span className="relative left-[5px] top-[2px]">
                    <BsShieldCheck />
                  </span>
                  <span>ظمانت تحویل</span>
                </div>
                <div>
                  <Openreservs />
                </div>
              </tbody>
            </table>
          </Modal.Body>
            <table class="flex items-center justify-center">
              <tbody>
                <a href="tel:09300616152" class="bt text-white">
                  <div class="w-[192px] h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[10px] flex items-center justify-between">
                    <button>تماس با پشتیبانی رامسر باما</button>
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
          <Modal.Footer className="w-[63px]">
            <Button onClick={handleClose} appearance="primary"></Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ApplyingReserv;
