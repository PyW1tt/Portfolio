import "../App.css";
import { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-center  border-gray-400 py-8 mt-[48px] font-[Poppins] px-[30px]">
      <div className=" w-[1173px] h-[84px] flex justify-between items-center">
        <a href="/">
          <span className="text-[25px] font-bold tracking-[5.12px] text-[#472d30]">
            My Port
          </span>
          <span className="text-[25px] tracking-[5.12px] text-[#69585f]">
            folio
          </span>
        </a>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Passions</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Portfolio</a>
                </li>
              </ul>
              <a
                href="http://"
                className=" w-[196px] h-[58px] px-[18px] py-2.5 bg-emerald-300 rounded-[10px] items-start gap-2.5 justify-center hover:opacity-80"
              >
                <p className="text-center font-bold text-white text-[23px] tracking-wider">
                  Contact Me
                </p>
              </a>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex  justify-between items-center w-[675px] text-[25px] tracking-wider text-[#69585f]">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Passions</a>
            </li>
            <li>
              <a href="/contact">Portfolio</a>
            </li>
            <a
              href="http://"
              className=" w-[196px] h-[58px] px-[18px] py-2.5 bg-emerald-300 rounded-[10px] items-start gap-2.5 justify-center hover:opacity-80"
            >
              <p className="text-center font-bold text-white text-[23px] tracking-wider">
                Contact Me
              </p>
            </a>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  );
}

export default Navbar;
