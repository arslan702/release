import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { HiCalendar } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";




export default function Complete() {
  return (
    
    <div className="md:px-24">
      
      <div className="text-center pt-10 ">
        <h1 className="md:text-[64px] font-[600] text-[32px] ">
          The complete <span className="text-[#5F2EEA]">Releese</span> toolkit
        </h1>
        <p className="text-[18px] max-w-[900px] mx-auto ">
          We’ve packed seven superpowered tools into our platform. They cover
          every aspect of the music business, from pre-release to post-release.
        </p>
      </div>
      <br />
      <br />
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="px-4" >
          <p className="text-[#5F2EEA] mt-3 ">PLAN – CALENDAR CLOUD</p>
          <p className="text-[30px] font-[400] ">
            <b>All your planning in one place</b>
          </p>
          <p className="text-[16px] leading-[24px] font-[400] ">
            Calendar Cloud puts you in control of your projects like never
            before. Streamline your workflows with our integrated planning,
            execution, and tracking tool. Stay on top of tasks, set deadlines,
            and keep your team updated in real-time.
          </p>
          <div className="flex gap-x-2 flex-wrap ">
            <p className="bg-[#4ADE80] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-evenly ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Task management
            </p>
            <p className="bg-[#4ADE80] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-evenly ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Team updates
            </p>
            <p className="bg-[#4ADE80] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Workflow templates{" "}
            </p>
            <p className="bg-[#4ADE80] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Project tracking{" "}
            </p>
            <p className="bg-[#4ADE80] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Release date calendar{" "}
            </p>
          </div>
        </div>

        <div>
          <div className="bg-[#5F2EEA] h-[400px] md:w-[480px] rounded-2xl shadow-2xl mt-5 ml-5 px-2 ">
            {" "}
            <br /> 
            <div className="bg-white h-[345px] md:w-[300px] w-[280px]  mx-auto  rounded-2xl shadow-[100px] p-4 ">
              <p className="text-[24px] ">
                <b>Master track</b>
              </p>
              <br />
              <hr />
              <div className="flex gap-x-4" >
              <div className="py-4 text-slate-400 " >
                <p>Due date</p>
                <br />
                <p>Assigned to</p> 
                <br />
                <p>Priority</p>
                <br />
                <p>Status</p>
                <br />
                <p>Project</p>
              </div>
              <div>
                
<div className="flex gap-x-2 mt-4 " >
<HiCalendar className="mt-1 text-[#EF4444] " />
<p>Tomorrow</p>
</div>
<br />
<div className="flex gap-x-2 ">
<CgProfile className="mt-1"/>
<p>Arman</p>
</div>
<br />
<div className="flex gap-x-2 text-[#F97316] ">
<FaFlag className="mt-1" />
<p>Medium</p>
</div>
<br />

 <p className="bg-[#5F2EEA] text-[white]  px-2 leading-[30px]  rounded-md flex justify-around ">
              {" "}
              <FaPlayCircle  className="mt-2 text-white mr-2 " />
              In progress
            </p>
<br />
<div className="flex gap-x-2 ">
<FaRegImage className="mt-1"/>
<p>Dawn</p>
</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
