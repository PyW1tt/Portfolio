function Body() {
  return (
    <section className="font-[Poppins] box-border p-0 m-0 w-full flex justify-center mt-[118px] h-fit px-[30px]">
      <div className=" w-[1173px] items-center ">
        <div className="mb-[168px] w-full">
          <div className="text-[35px] tracking-widest mb-[60px] text-center max-sm:text-[25px]">
            <span className="text-[#69585f]">Additional</span>
            <span className="font-semibold text-[#472d30]"> passions</span>
          </div>
          <div className="flex justify-between flex-wrap text-center max-sm:items-center">
            <span className="w-[347px] h-[280px] bg-white rounded-[13px] shadow-xl hover:translate-y-[-15px] max-sm:mb-10 ">
              <img
                src="./src/img/undraw_Wireframing_re_q6k6 1.png"
                className="mt-[20px] ml-[61px] mb-[10px]"
              />
              <p className="text-[25px] mb-[10px]">
                <span className="font-semibold tracking-wider text-[#472d30]">
                  Front-End{" "}
                </span>
                <span className="text-lg tracking-wide text-[#69585f]">
                  Developer
                </span>
              </p>
              <p className="text-lg tracking-wide text-[#69585f]">
                (Sass, Bootstrap, Tailwind)
              </p>
            </span>
            <span className="w-[347px] h-[280px] bg-white rounded-[13px] shadow-xl hover:translate-y-[-15px] max-sm:mb-10">
              <img
                src="./src/img/undraw_Detailed_analysis_re_tk6j 1.png"
                className="mt-[20px] ml-[61px] mb-[10px]"
              />
              <p className="text-[25px] mb-[10px]">
                <span className="font-semibold tracking-wider text-[#472d30]">
                  Back-End{" "}
                </span>
                <span className="text-lg tracking-wide text-[#69585f]">
                  Developer
                </span>
              </p>
              <p className="text-lg tracking-wide text-[#69585f]">
                (NodeJS, Laravel, Codeigniter)
              </p>
            </span>
            <span className="w-[347px] h-[280px] bg-white rounded-[13px] shadow-xl hover:translate-y-[-15px] max-sm:mb-10">
              <img
                src="./src/img/undraw_Design_process_re_0dhf 1.png"
                className="mt-[20px] mb-[10px] ml-[61px]"
              />
              <p className="text-[25px] mb-[10px]">
                <span className="font-semibold tracking-wider text-[#472d30]">
                  UI/UX{" "}
                </span>
                <span className="text-lg tracking-wide text-[#69585f]">
                  Designer
                </span>
              </p>
              <p className="text-lg tracking-wide text-[#69585f]">
                (Figma, Zeplin, Adobe XD)
              </p>
            </span>
          </div>
        </div>
        <div className="w-full">
          <div className="text-[35px] tracking-widest mb-[60px] text-center max-sm:text-[25px]">
            <span className="text-[#69585f]">My</span>
            <span className="font-semibold text-[#472d30]"> Portfolio</span>
          </div>
          <div className="flex justify-between flex-wrap ">
            <span className="w-[347px] h-[266px] bg-white rounded-[13px] shadow-xl hover:translate-y-[-15px] max-sm:mb-10 relative">
              <img
                src="./src/img/Ellipse 6.png"
                className="ml-[17px] mt-[19px]"
              />
              <span className="text-indigo-500 text-[25px] font-semibold absolute top-[29px] left-[17px]">
                <div className="flex items-center">
                  {" "}
                  <img
                    src="./src/img/emojione_e-mail.png"
                    className="mr-[14px]"
                  />
                  Sendpay
                </div>
              </span>
              <img
                src="./src/img/SendPay 1.png"
                className=" absolute bottom-1 right-0"
              />
            </span>
            <span className="w-[347px] h-[266px] bg-white rounded-[13px] shadow-xl hover:translate-y-[-15px] max-sm:mb-10 relative">
              <img
                src="./src/img/Ellipse 6 (1).png"
                className="ml-[17px] mt-[19px]"
              />
              <span className="text-blue-500 text-[25px] font-semibold absolute top-[29px] left-[18px]">
                E- Commerce
              </span>
              <span className="text-blue-500 text-[13px]  absolute top-[55px] left-[138px]">
                Website
              </span>
              <img
                src="./src/img/e-commerce 1 1.png"
                className=" absolute bottom-1 right-0"
              />
            </span>
            <span className="w-[347px] h-[266px] bg-white rounded-[13px] shadow-xl hover:translate-y-[-15px] max-sm:mb-10 relative">
              <img
                src="./src/img/Ellipse 6 (2).png"
                className="ml-[17px] mt-[19px]"
              />
              <span className="text-gray-700 text-[25px] font-semibold absolute top-[29px] left-[17px]">
                BeatsLearning
              </span>
              <span className="text-gray-700 text-[13px] absolute top-[55px] left-[17px]">
                A symphony of skill
              </span>
              <img
                src="./src/img/Edtech 1.png"
                className=" absolute bottom-1 right-0"
              />
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Body;
