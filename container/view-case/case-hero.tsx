import RoundButton from "@/components/RoundButton";
import { eBananr, pBannar, project1, project3, project4 } from "@/public";
import Image from "next/image";

export default function HeroCaseStudy() {
  return (
    <section
      className="w-full 
      bg-gradient-to-b from-[#9bd6eb] to-[#ffffff]
       sticky top-0 py-5"
    >
      <div className="flex justify-center sm:pt-[90px]
       pt-[130px] pb-[20px] sm:px-5 md:px-10">
        <div
          className="sm:flex-col sm:space-y-10
         items-center flex justify-center md:space-x-[3rem] lg:space-x-[5rem]"
        >
          <div className="sm:w-full w-[30%]">
            <div className="flex flex-col gap-2 sm:justify-center">
              <div className="w-fit flex flex-col gap-1 ">
                <h2 className="text-[18px] font-normal leading-tight tracking-tight">
                  Precision and Quality
                </h2>
                <div className="w-full h-[2px] rounded-lg bg-customDark" />
              </div>

              <h2
                className="text-[40px]  sm:text-[25px] font-bold leading-tight tracking-tighter
                font-gvf text-gray-600  mt-2"
              >
                Design & development of a platform for <span className="text-btn_clr">AI tailored English Proficiency Enhance</span> Startup
                <br />
              </h2>
            </div>
            <div className="w-fit  mt-10">
              <div
                className="flex items-center justify-center
               bg-btn_clr/80 cursor-pointer rounded-full group "
              >
                <RoundButton
                  href="https://practicemania.com/"
                  title="SHOW LIVE"
                  bgcolor="#00B4D8"
                  className="bg-white text-customDark"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>

          <div className="relative sm:self-center sm:w-full sm:mx-auto ">
            <div className="sm:h-auto sm:w-auto h-[30rem] w-[35rem]
             rounded-md">
              <Image
                className="object-cover rounded-md h-full w-full"
                src={pBannar}
                alt="ddd"
              ></Image>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
