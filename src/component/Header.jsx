import img from "../img/heroImg.png";

function Header() {
  return (
    <section className="font-[Poppins] box-border p-0 m-0 w-full flex justify-center mt-[97px] h-fit text-[#69585f] px-[30px]">
      <div className="mt-[54px] w-[1173px] flex flex-wrap justify-between max-xl:flex-col-reverse">
        <div className="w-[50%] max-lg:w-fit">
          <div>
            <p className="text-[#472d30] text-[25px] font-semibold mb-[10px] max-sm:text-[20px]">
              Work experiences
            </p>
            <div className="text-[#69585f mb-[10px]">
              <p className="text-[20px] text-end max-sm:text-[15px]">
                Feb 2021 -Aug 2022
              </p>
              <p className="text-[18px] max-sm:text-[15px]">
                Moderator at Digiserve Corporation Co.,Ltd <br />- Check and
                screen contents for the social platform. - Categorize contents
                follow platform’s rule and policies.
              </p>
            </div>
            <div className="text-[#69585f mb-[10px]">
              <p className="text-[20px] text-end max-sm:text-[15px]">
                Nov 2019 - Mar 2020
              </p>
              <p className="text-[18px] max-sm:text-[15px]">
                Trainee at Holiday Inn Pattaya Job Positions : Cook Helper{" "}
                <br />- Prepare the ingredients for cooking. - Takes care
                banquet room, fills the food and cooking for a banque. - Cook a
                la carte menu.
              </p>
            </div>
            <div className="text-[#69585f mb-[10px] max-sm:text-[15px]">
              <p className="text-[20px] text-end">May 2018 - Jul 2018 </p>
              <p className="text-[18px] max-sm:text-[15px]">
                Trainee at N.S. Travel &Tour Co.,Ltd Job Positions : Sale
                Coordinator <br /> - Coordinate between sales and other
                departments. - Prepare quotations documents. - Make travel
                schedule. Job Positions : staff - Service and facilitate
                tourists during the trip.
              </p>
            </div>
            <div>
              <p className="text-[#472d30] text-[25px] font-semibold mb-[10px] max-sm:text-[20px]">
                Education
              </p>
              <p className="text-[#69585f text-[18px] max-sm:text-[15px]">
                Bachelor's degree, of Business Administration in Tourism and
                Hotel Industrial Management ,2020, GPA 2.50 King Mongkut's
                University of Technology North Bangkok, Prachinburi
              </p>
            </div>
          </div>
        </div>
        <div className="max-sm:mb-10">
          <img src={img} />
        </div>
      </div>
    </section>
  );
}
export default Header;
