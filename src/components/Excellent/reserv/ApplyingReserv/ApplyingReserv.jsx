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
          <Modal.Footer className="w-[63px]">
            <Button onClick={handleClose} appearance="primary"></Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ApplyingReserv;
