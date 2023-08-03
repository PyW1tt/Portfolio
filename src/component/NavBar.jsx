import { Link } from "react-router-dom";
function Navbar() {
  return (
    // <section className="font-[Poppins] box-border p-0 m-0 w-full flex justify-center mt-[48px]">
    //   <div className=" w-[1173px] h-[84px] flex justify-between items-center ">
    //     <div className="w-full h-[58px] flex items-center ">
    //       <Link>
    //         <span className="text-[25px] font-bold tracking-[5.12px] text-[#472d30]">
    //           My Port
    //         </span>
    //         <span className="text-[25px] tracking-[5.12px] text-[#69585f]">
    //           folio
    //         </span>
    //       </Link>
    //     </div>
    //     <div className=" w-full flex justify-between items-center text-[25px] tracking-wider text-[#69585f] flex-wrap">
    //       <Link to="" className="">
    //         About
    //       </Link>
    //       <Link to="" className="">
    //         Passions
    //       </Link>
    //       <Link to="" className="">
    //         Portfolio
    //       </Link>
    //       <a
    //         href="http://"
    //         className=" w-[196px] h-[58px] px-[18px] py-2.5 bg-emerald-300 rounded-[10px] items-start gap-2.5 justify-center hover:opacity-80"
    //       >
    //         <p className="text-center font-bold text-white text-[23px] tracking-wider">
    //           Contact Me
    //         </p>
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section className="font-[Poppins] box-border p-0 m-0 w-full flex justify-center mt-[48px] flex-wrap">
      <div className=" w-[1173px] h-[84px] flex justify-between items-center flex-wrap">
        <div className="w-fit h-[58px] flex items-center">
          <Link>
            <span className="text-[25px] font-bold tracking-[5.12px] text-[#472d30]">
              My Port
            </span>
            <span className="text-[25px] tracking-[5.12px] text-[#69585f]">
              folio
            </span>
          </Link>
        </div>
        <div className=" w-[675px] flex justify-between items-center text-[25px] tracking-wider text-[#69585f] ">
          <Link to="" className="">
            About
          </Link>
          <Link to="" className="">
            Passions
          </Link>
          <Link to="" className="">
            Portfolio
          </Link>
          <a
            href="http://"
            className=" w-[196px] h-[58px] px-[18px] py-2.5 bg-emerald-300 rounded-[10px] items-start gap-2.5 justify-center hover:opacity-80"
          >
            <p className="text-center font-bold text-white text-[23px] tracking-wider">
              Contact Me
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
