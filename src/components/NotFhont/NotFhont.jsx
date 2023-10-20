import NavBarsScrool from "../navbars/NavBars";


const NotFhont = () => {
  return (
    <>
    <NavBarsScrool/>
      <section className="flex flex-col justify-between mt-[20px]">
        <div className="flex items-center justify-center mt-[50px]">
          <span className="text-[18px]">
            متاسفانه صفحه مورد نظر پیدا نشد :(
          </span>
        </div>

        <div>
          <div className="text-center">
            <span>کد خطا : 404</span>
          </div>
        </div>

        <div className="mt-[10px] text-center">
          <span>
            صفحه ای که درخواست کرده اید وجود ندارد. شما می توانید از لینک های
            زیر برای ورود به قسمت های دیگر سایت استفاده کنید.
          </span>
        </div>

        <div className="flex items-center relative right-[6px] w-[108%]">
          <div class=" w-[174px]  h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[20px] flex items-center justify-center m-auto">
            <div class="pl-[9px]">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[19px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"></path>
                </svg>
              </span>
            </div>
            <div>
              <a class="" href="/">
                <span>بازگشت به صفحه اصلی</span>
              </a>
            </div>
          </div>

          <div class=" w-[174px]  h-[40px] p-2 rounded-[6px] bg-blue-600 text-white relative top-[20px] flex items-center justify-center m-auto">
            <div class="pl-[9px]">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  class="text-[19px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
                </svg>
              </span>
            </div>
            <div>
              <a class="" href="/">
                <span>تماس با پشتیبانی</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFhont;
