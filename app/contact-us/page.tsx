import ContactUs from "@/container/contact-us/form-container";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-[#96b9c6] to-[#ffffff] h-full pb-[5rem]"
      >
        <div
          className="h-full pt-[150px] pb-[20px] sm:w-full md:w-[90%] lg:w-[70%] flex-col 
        justify-center mx-auto"
        >
          <div className="px-5">
            <div className="h-full w-full md:ml-[-4rem] lg:ml-[-4rem]">
              <div className=" w-full h-full rounded-md">
                <ContactUs></ContactUs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
