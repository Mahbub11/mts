import { footerItems, footernavbarItems } from "@/constants";
import LinkHover from "@/animation/LinkHover";
import MeghNameFooter from "./company-name";

export default function Footer() {
  const phrase = ["Eye-", "opening"];
  const phrase1 = ["PRESENTATIONS"];
  return (
    <footer
      className="xl:px-[12rem] lg:px-[10rem] md:px-[5rem] w-full
       bg-gradient-to-b from-[#ffffff] to-[#96b9c6]
     padding-x z-30 relativebg-background 
     flex flex-col justify-between  mt-[-20px] pt-[5rem]"
    >
      <div
        className="w-full flex justify-between items-center
       sm:flex-col xm:flex-col"
      >
        <div>
          <MeghNameFooter></MeghNameFooter>
        </div>
        <div
          className="h-full flex sm:flex-col
         justify-between sm:w-full sm:px-[5rem] w-1/2"
         >
          <div className="flex flex-col">
            <div className="pt-[50px]">
              <h1
                className="paragraph font-medium
               font-NeueMontreal text-secondry pb-[20px]"
              >
                S:
              </h1>
              {footerItems.map((item) => (
                <LinkHover
                  title={item.title}
                  href={item.href}
                  key={item.id}
                  className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                />
              ))}
            </div>
            <div className="flex justify-between">
              <div className="pt-[50px]">
                <h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
                  L:
                </h1>
                <div className="flex flex-col gap-y-[10px]">
                  <LinkHover
                    className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                    title={`202-1965 W 4th Awe`}
                    href="/"
                  />
                  <LinkHover
                    className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                    title={`Vancouver, Canada`}
                    href="/"
                  />
                  <LinkHover
                    className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                    title="30 Avy"
                    href="/"
                  />
                  <LinkHover
                    className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                    title="St Lviv, USA"
                    href="/"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-[50px] ">
            <div className="pt-[10px] flex  gap-x-[20px]">
              <h1
                className="paragraph 
                  font-medium font-NeueMontreal text-secondry"
              >
                E:
              </h1>
              <LinkHover
                title="hello@meghtechltd.com"
                href="/"
                className="before:h-[1px] after:h-[1px] paragraph font-medium before:bottom-[-3px] after:bottom-[-3px]"
              />
            </div>
            <div className="pt-[50px]">
              <h1
                className="paragraph font-medium
                 font-NeueMontreal text-secondry pb-[20px]"
              >
                M:
              </h1>
              {footernavbarItems.map((item) => (
                <LinkHover
                  key={item.id}
                  title={item.title}
                  href={item.href}
                  className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full pt-[40px]
	   pb-[30px] flex justify-center sm:flex-col
	    xm:flex-col sm:gap-[20px] xm:gap-[20px]"
      >
        <div
          className="flex sm:flex-col sm:mx-auto xm:flex-col gap-[10px]
        "
        >
          <h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
            © mT design 2024.
          </h1>
          <LinkHover
            title="Legal Terms"
            href="/"
            className="before:h-[1px] after:h-[1px] sm:w-full sm:ml-5
            paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
          />
        </div>
      </div>
    </footer>
  );
}
