import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { Rate } from "rsuite";
import { TbHomeDot } from "react-icons/tb";

const OpenEmail = () => {
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
          className="relative bottom-[35px] w-[90px] "
        >
          <Button></Button>
        </ButtonToolbar>

        <Modal
          open={open}
          onClose={handleClose}
          className="relative bottom-[-290px]"
          onEntered={handleEntered}
          onExited={() => {
            setRows(0);
          }}
        >
          <Modal.Header>
            <div></div>
            <Modal.Title className="relative right-[-17px] top-[18px] flex items-center justify-center">
              <span className=" text-[17px] font-bold">
                ارسال ایمیل/نامه به رامسرباما
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <tbody className="relative top-[17px]">
                <div>
                  <span>
                    از ایمیل می‌توانید به منظور ارسال مکاتبات رسمی، ارسال رزومه
                    و پیشنهاد یا انتقاد خود به ما استفاده کنید:
                  </span>
                </div>
              </tbody>
            </table>
            <table></table>
          </Modal.Body>

          <Modal.Body>
            <table className="flex items-center justify-center">
              <tbody >
                <div className="w-[150px] h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[10px] flex items-center justify-center">
                  <span>ramsarbama@.com</span>
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

export default OpenEmail;
