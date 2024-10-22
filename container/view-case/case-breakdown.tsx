import React from "react";

export default function CaseBreakDown() {
  return (
    <div>
      <div className=" h-full w-full">
        <div className="h-[5rem] "></div>

        <div
          className="w-full px-[2rem] 
          flex sm:flex-col sm:space-y-5 justify-between"
        >
          <div>
            <div
              className="text-[20px] text-[500] font-NeueMontreal
              text-gray-700"
            >
              <h2
                className="ml-[-1rem] font-bold
                    text-[20px] font-gvf "
              >
                Services
              </h2>
              <ul
                className="list-disc  mt-4 space-y-1
                  text-[15px] font-gmvf"
              >
                <li>Discovery</li>
                <li>Design</li>
                <li>Development</li>
                <li>Care & Growth</li>
              </ul>
            </div>
          </div>

          <div
            className="w-[3px] h-auto 
            rounded-lg bg-customDark"
          />

          <div>
            <div
              className="text-[20px] text-[500] font-NeueMontreal
              text-gray-700"
            >
              <h2
                className="ml-[-1rem] font-bold
                    text-[20px] font-gvf "
              >
                Product type
              </h2>
              <ul
                className="list-disc  mt-4 space-y-1
                  text-[15px] font-gmvf"
              >
                <li>MVP</li>
              </ul>
            </div>
          </div>

          <div
            className="w-[3px] h-auto 
            rounded-lg bg-customDark"
          />

          <div>
            <div
              className="text-[20px] text-[500] font-NeueMontreal
              text-gray-700"
            >
              <h2
                className="ml-[-1rem] font-bold
                    text-[20px] font-gvf "
              >
                Expertise
              </h2>
              <ul
                className="list-disc  mt-4 space-y-1
                  text-[15px] font-gmvf"
              >
                <li>Next JS</li>
                <li>SUPABASE</li>
                <li>Next Auth</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>

          <div
            className="w-[3px] h-auto 
            rounded-lg bg-customDark"
          />

          <div>
            <div
              className="text-[20px] text-[500] font-NeueMontreal
              text-gray-700"
            >
              <h2
                className="ml-[-1rem] font-bold
                    text-[20px] font-gvf "
              >
                Industry
              </h2>
              <ul
                className="list-disc  mt-4 space-y-1
                  text-[15px] font-gmvf"
              >
                <li>E-Commerse</li>
                <li>CMS</li>
              </ul>
            </div>
          </div>

          <div
            className="w-[3px] h-auto 
            rounded-lg bg-customDark"
          />

          <div>
            <div
              className="text-[20px] text-[500] font-NeueMontreal
              text-gray-700"
            >
              <h2
                className="ml-[-1rem] font-bold
                    text-[20px] font-gvf "
              >
                Year
              </h2>
              <ul
                className="list-disc  mt-4 space-y-1
                  text-[15px] font-gmvf"
              >
                <li>2023- Ongoing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
