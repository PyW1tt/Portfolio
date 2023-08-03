import vactor from "../img/Vector.png";
import ig from "../img/Instagram.png";
import git from "../img/github.png";
import message from "../img/fast message.png";
import call from "../img/call.png";

function Footer() {
  return (
    <>
      <section className="font-[Poppins] w-full flex flex-wrap justify-center mt-[168px] ">
        <div className=" w-[1173px] ">
          <div className=" text-center text-[35px] tracking-widest">
            <span className="text-[#69585f]">Contact</span>
            <span className="font-semibold text-[#472d30]"> Me</span>
          </div>
          <div className="flex justify-between flex-wrap mt-[59px] text-[35px] text-[#69585f]">
            <div className="">
              <div className="hover:translate-y-[-15px]">
                <a href="http://" className="relative ">
                  <img src={vactor} />
                  <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src={git}
                  />
                </a>
              </div>
              <p className="mt-[30px] text-center">Github</p>
            </div>
            <div>
              <div className="hover:translate-y-[-15px]">
                <a href="http://" className="relative">
                  <img src={vactor} />
                  <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src={ig}
                  />
                </a>
              </div>
              <p className="mt-[30px] text-center">Instagram</p>
            </div>
            <div>
              <div className="hover:translate-y-[-15px]">
                <a href="http://" className="relative">
                  <img src={vactor} />
                  <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src={message}
                  />
                </a>
              </div>
              <p className="mt-[30px] text-center">Email</p>
            </div>
            <div>
              <div className="hover:translate-y-[-15px]">
                <a href="http://" className="relative">
                  <img src={vactor} />
                  <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src={call}
                  />
                </a>
              </div>
              <p className="mt-[30px] text-center">Telp</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center relative">
        <img className="w-full" src="./src/img/Vector (3).png" />
        <p className=" absolute bottom-[40px] text-[35px] tracking-widest text-white">
          Design By Panaywit
        </p>
      </div>
    </>
  );
}

export default Footer;
