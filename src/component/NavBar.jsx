import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function myFunction(x) {
    x.classList.toggle("change");

    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
  return (
    <section className="font-[Poppins] box-border p-0 m-0 w-full flex justify-center mt-[48px] flex-wrap px-[30px]">
      <div className=" w-[1173px] h-[84px] flex justify-between items-center flex-wrap">
        <div className=" h-[58px] flex items-center justify-between">
          <Link className="w-full">
            <span className="text-[25px] font-bold tracking-[5.12px] text-[#472d30]">
              My Port
            </span>
            <span className="text-[25px] tracking-[5.12px] text-[#69585f]">
              folio
            </span>
          </Link>
        </div>
        <div
          className={`menu flex justify-between items-center w-[675px] text-[25px] tracking-wider text-[#69585f] max-xl:hidden ${
            menuOpen ? "menu-active" : ""
          }`}
        >
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
        <div
          className="container xl:hidden w-10 ml-auto"
          onClick={(event) => {
            myFunction(event.currentTarget);
          }}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
