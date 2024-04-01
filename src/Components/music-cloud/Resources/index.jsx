import React from "react";
import { MdCopyright, MdOutlinePhonelink, MdPublish, MdTaskAlt } from "react-icons/md";

export default function Resources() {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col py-10 ">
        <p className="text-[#7358EB] text-[14px] ">SOME RESOURCES</p>
        <p className="text-[35px] leading-[45px] font-[600] max-w-lg text-center ">
          Learn about our other features
        </p>
        <p className="text-[#4E5182] text-[14px] ">
          See all the ways you can use Releese.
        </p>
        <div className="grid md:grid-cols-4 py-4 gap-3 md:px-16 ">
          <div className="flex  items-center flex-col  ">
            <div className="bg-[#DCFCE7] h-14 w-14 rounded-lg flex justify-center items-center">
              {" "}
              <MdTaskAlt className="text-[#4ADE80] text-[24px]  " />{" "}
            </div>
            <p className="text-[14px] font-[500] pt-2 " >Calendar Cloud</p>
            <p className="text-[#4b5563] text-[13px] font-normal text-center pt-3 " >A digital workspace to manage your organizations's projects that scales with your team</p>
            <button className="text-[#5f2eea] mt-2 border-[#AB91F3] hover:border-[#5b4e7e] border-[1px] p-2 text-[10px] rounded-md hover:bg-[#F6F4FC] " >Learn more </button>
          </div>
          <div className="flex  items-center flex-col  ">
            <div className="bg-[#DBEAFE] h-14 w-14 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdPublish className="text-[#3B82F6] text-[24px]  " />{" "}
                          </div>
            <p className="text-[14px] font-[500] pt-2 " >Distribution Cloud </p>
            <p className="text-[#4b5563] text-[13px] font-normal text-center pt-3 " >Sell music at scale in one click, share analytics and automate royalty splits
</p>
            <button className="text-[#5f2eea] mt-6 border-[#AB91F3] hover:border-[#5b4e7e] border-[1px] p-2 text-[10px] rounded-md hover:bg-[#F6F4FC] " >Learn more </button>
          </div>
          <div className="flex  items-center flex-col  ">
            
            <div className="bg-[#FFF7ED] h-14 w-14 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdOutlinePhonelink className="text-[#F97316] text-[24px]  " />{" "}
                </div>
            <p className="text-[14px] font-[500] pt-2 " >Marketing Cloud</p>
            <p className="text-[#4b5563] text-[13px] font-normal text-center pt-3 " >Landing pages, audience engagement and activation tools built for the twenty-first century</p>
            <button className="text-[#5f2eea] mt-5 border-[#AB91F3] hover:border-[#5b4e7e] border-[1px] p-2 text-[10px] rounded-md hover:bg-[#F6F4FC] " >Learn more </button>
          </div>
          <div className="flex  items-center flex-col  ">
            <div className="bg-[#FEE2E2] h-14 w-14 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdCopyright className="text-[#EF4444] text-[24px]  " />{" "}
              </div>
            <p className="text-[14px] font-[500] pt-2 " >Rights Cloud</p>
            <p className="text-[#4b5563] text-[13px] font-normal text-center pt-3 " >Simplified global publishing and neighboring rights collection on autopilot</p>
            <button className="text-[#5f2eea] mt-6 border-[#AB91F3] hover:border-[#5b4e7e] border-[1px] p-2 text-[10px] rounded-md hover:bg-[#F6F4FC] " >Learn more </button>
          </div>
         
        </div>
      </div>
      <div className="bg-[#5F2EEA]  w-full rounded-b-[30px] md:px-24  " >
<div className=" py-10 grid md:grid-cols-2 text-center " >
<div className="text-[#fcfcfd] md:text-[28px] text-[15px] font-[600]   " >Start your 14-day free trial. Try now, <br /> decide later.</div>
<div> <button className="bg-[#fcfcfd] rounded-3xl p-2 w-44 h-10  text-[14px] mt-5 hover:bg-[#EFEFF0] transition-all duration-1000 " >Start your free trial </button> </div>
</div>
      </div>
    </div>
  );
}
