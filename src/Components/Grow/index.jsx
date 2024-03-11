import Image from 'next/image'
import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import img from '../../../Images/11.png'

export default function Grow() {
  return (
    <div className='md:px-24 mt-5' >
      <br />
      <div className='grid md:grid-cols-2 grid-cols-1 ' >
      <div className="px-4 md:pt-14 " >
          <p className="text-[#5F2EEA] mt-3 ">SCALE – MARKETING CLOUD</p>
          <p className="text-[30px] font-[400] ">
            <b>Boost reach & grow engagement</b>
          </p>
          <p className="text-[16px] leading-[24px] font-[400] ">
          Marketing Cloud is your key to cultivating a dedicated fanbase. Grow your streams with intuitive optimization tools and harness the power of conversion-based technology for social media promotion. Gather valuable data, comprehend fan interactions, and strategize your next marketing moves.
          </p>
          <div className="flex gap-x-2 flex-wrap ">
            <p className="bg-[#F97316] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Pre-saves & subscriptions
            </p>
            <p className="bg-[#F97316] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-evenly ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Real-time audience insights
            </p>
            <p className="bg-[#F97316] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Marketing strategy{" "}
            </p>
            <p className="bg-[#F97316] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              TikTok Events API{" "}
            </p>
            <p className="bg-[#F97316] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Meta Conversions API
{" "}
            </p>
          </div>
        </div> 
        
        <div className='bg-[#F3F4F6] pt-4 my-5 rounded-xl ' >
 <Image src={img} className='mx-auto' />
        </div>
      </div>

    </div>
  )
}
