"use client";
import { useState } from "react";
import { expectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import TextHoverSingle from "@/animation/TextHoverSingle";

export default function Expectations() {
  const [openItemId, setOpenItemId] = useState(null);

  const handleButtonClick = (id: any) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="w-full  rounded-t-[20px]">
      <div className="w-full padding-x py-[20px]">
        <div className="w-full padding-x mb-[40px]">
          <h1
            className="sub-heading font-bold 
                font-NeueMontreal text-btn_clr uppercase text-[40px]"
          >
            Expectations
          </h1>
          <hr className=" mt-5"></hr>
        </div>
        <div className="w-full flex justify-end ">
          <div className="flex justify-end w-[80%]">
            <div className="w-full  flex flex-wrap gap-[20px] ">
              {expectationsItems.map((item) => (
                <div
                  className="w-[345px] flex justify-between gap-x-[20px] sm:flex-col xm:flex-col gap-[20px]"
                  key={item.id}
                >
                  <div className="bg-purple w-full flex flex-col rounded-[20px] px-[30px] py-[20px]">
                    <div className="flex gap-x-[10px] items-center pb-[10px] mb-[100px] ">
                      <h1 className="sub-heading font-normal font-NeueMontreal text-white">
                        {item.title1}
                      </h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <button className="small-text font-normal font-NeueMontreal text-white">
                        <TextHoverSingle
                          title1={item.subTitle1}
                          title2={item.subTitle1}
                          subTitle1=""
                          subTitle2=""
                        />
                      </button>
                      <button
                        onClick={() => handleButtonClick(item.id)}
                        className="small-text uppercase font-normal font-NeueMontreal text-white"
                      >
                        {openItemId === item.id ? (
                          "hide"
                        ) : (
                          <TextHoverSingle
                            title1={item.btn}
                            title2={item.btn}
                            subTitle1=""
                            subTitle2=""
                          />
                        )}
                      </button>
                    </div>
                    <AnimatePresence>
                      {openItemId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            ease: [0.4, 0, 0.2, 1],
                            duration: 1,
                          }}
                        >
                          <div className="border-t border-[#f1f1f155] pt-[20px] text-white mt-[10px]">
                            {item.para1}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
