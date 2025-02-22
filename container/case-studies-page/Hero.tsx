import { aboutusbannar, caseBannar } from "@/public";
import Image from "next/image";

export default function HeroCaseStudies() {
  return (
    <section className="w-full bg-gradient-to-b from-[#96b9c6] to-[#ffffff] sticky top-0 h-auto">
      <div className="pt-[50px] pb-[20px] w-full flex-col justify-center mx-auto relative">
        <div>
          <Image
            className="h-[35rem] w-full opacity-70 object-cover"
            alt="mtabout"
            src={caseBannar}
          />
          <div className="absolute top-[-20%] inset-0 flex items-center justify-center">
            <h1
              className="text-[50px]  text-white
                    font-[800] underline
                    "
            >
              Case <span className="text-btn_clr">Studies</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
