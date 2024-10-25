"use client";

import Clients from "@/container/home-page/review/Clients";
import Expectations from "@/container/service-page/Expectations";
import ClientsReviewExpectations from "@/container/service-page/clients-review";
import ServiceHeroSection from "@/container/service-page/service-hero";
import ServiceProcess from "@/container/service-page/service-process";

export default function APP() {
  return (
    <>
      <div
        className=" w-full 
      bg-white"
      >
        <div
          className="py-[10rem] w-[80%] mx-auto  h-full
         pt-[10rem]"
        >
          <div>
            <h2
              className="w-full  pt-[20px] text-[60px] text-gray-700
          font-gvf font-bold"
            >
              SERVICES
            </h2>
            <hr className="h-[5px] px-10 w-full"></hr>
          </div>

          <ServiceHeroSection></ServiceHeroSection>
          <div className="mt-[10rem]">
            <ServiceProcess></ServiceProcess>
          </div>

          <div className="mt-[10rem]">
            <Expectations></Expectations>
          </div>

          <div className="mt-[10rem]">
           <ClientsReviewExpectations></ClientsReviewExpectations>
          </div>
        </div>
      </div>
    </>
  );
}
