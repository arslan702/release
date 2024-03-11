"use client"
import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6';
import { MdAutoAwesome } from "react-icons/md";
import { ReactTyped } from "react-typed";



export default function Automate() {

  
  return (
    <div className='md:px-24 mt-10 mb-5  ' >
      <div className='grid md:grid-cols-2 grid-cols-1 ' >
      <div className="px-4 md:pt-14 " >
          <p className="text-[#5F2EEA] mt-3 ">AUTOMATE – RELEESE AI</p>
          <p className="text-[30px] font-[400] ">
            <b>Your AI productivity toolkit</b>
          </p>
          <p className="text-[16px] leading-[24px] font-[400] ">
          Take advantage of artificial intelligence to generate lyrics, plan projects, create marketing strategies, and more. From crafting compelling press kits to producing engaging social media posts, Releese AI helps you turn ideas into reality faster, supercharging your processes.
          </p>
          <div className="flex gap-x-2 flex-wrap ">
            <p className="bg-[#F3F4F6] text-[#4B5563]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-[#4B5563] mr-2 " />
              Faster project planning
            </p>
            <p className="bg-[#F3F4F6] text-[#4B5563]  px-2 leading-[30px] mt-5 rounded-md flex justify-evenly ">
              {" "}
              <FaCircleCheck className="mt-2 text-[#4B5563] mr-2 " />
              Marketing plans
            </p>
            <p className="bg-[#F3F4F6] text-[#4B5563]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-[#4B5563] mr-2 " />
              Social media content{" "}
            </p>
            <p className="bg-[#F3F4F6] text-[#4B5563]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-[#4B5563] mr-2 " />
              Presskit composition{" "}
            </p>
            <p className="bg-[#F3F4F6] text-[#4B5563]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-[#4B5563] mr-2 " />
              Email pitches{" "}
            </p>
          </div>
        </div> 
        {/* 2nd part */}
        <div className='bg-[#F3F4F6] md:w-[85%] mx-auto p-4  md:h-[600px] h-[800px] ' >
<div className='flex gap-2 ' >
<MdAutoAwesome className='mt-1 text-[#9CA3AF] text-[13px]' />
<p className='text-[#9CA3AF] text-[13px] mb-2 ' >AI Assisted Releese Doc</p>
</div>
<p>Generate a marketing plan for an album release, including social media and streaming platforms</p>
<div className='mt-2 flex gap-2 ' >
  <button className='bg-[#3B82F6] text-white px-3 py-1 flex gap-2 rounded-md ' > <MdAutoAwesome className='mt-1 text-[white] text-[13px] ' />Generate  </button>
  <button className=' border-black border-[1px] px-3 py-1 flex gap-2 rounded-md ' > Cancel  </button>
</div>
<br />
<hr />
<br />
<div className='' >
  <p className='text-[20px] ' ><b>Marketing Plan</b></p>
  
  <div className='text-[13px]'>
  <ReactTyped
    strings={[
      "1. Develop a comprehensive marketing campaign: Create a comprehensive marketing campaign to communicate the album’s message and build anticipation for the album’s release. Utilize both traditional and digital marketing channels to reach the widest possible audience. <br/> <br/> 2. Social media: Implement a targeted social media campaign to create buzz and engage fans. Leverage popular platforms like Twitter, Facebook, and Instagram to share teaser content, behind-the-scenes production insights, and interviews with the artist to build interest in advance of the album’s release. <br/><br/> 3. Video content: Create short video clips to highlight key tracks from the album and visually capture the artist’s creative process. Leverage YouTube and other platforms to reach the widest possible audience. <br/><br/> 4. Targeted advertising: Utilize both traditional (television, radio) and digital channels (online streaming platforms) to run advertisements for the album. Select channels that are most likely to reach your target audience. <br/> 5. Physical edition: Consider producing a physical edition of the album."
    ]}
    typeSpeed={10}
    showCursor={false}
    backDelay={1000}
    loop
  />
</div>
  
  
</div>


        </div>
      </div>
    </div>
  )
}
