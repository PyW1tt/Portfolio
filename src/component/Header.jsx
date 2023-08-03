import img from "../img/heroImg.png";

function Header() {
  return (
    <section className="font-[Poppins] box-border p-0 m-0 w-full flex justify-center mt-[97px] h-fit text-[#69585f]">
      <div className="mt-[54px] w-[1173px] flex flex-wrap justify-between">
        <div className="w-fit">
          <div className="tracking-tight mb-[32px]">
            <span className="text-[35px]"> Hi !</span> <br />
            <span className="text-[50px] ">
              I’m Panyawit S. <br />a Full-Stack Developer
            </span>
          </div>
          <p className="text-[23px] tracking-tight">
            Full-Stack devel oper based in Bangkok,Thailand <br />
            I’am coding with a clean and beautiful problem <br />
            solving in mind.
          </p>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    </section>
  );
}
export default Header;
