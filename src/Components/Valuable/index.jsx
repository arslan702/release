import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

export default function Valuable() {
  return (
    <div className='md:px-32 md:pt-10 ' >
      <br />
      <br />
      <div className='grid md:grid-cols-2  grid-cols-1 ' >
<div  className='bg-[#F3F4F6] rounded-xl ' >

</div>
<div className="px-4 md:pt-14 " >
          <p className="text-[#5F2EEA] mt-3 ">MEASURE – ANALYTICS CLOUD</p>
          <p className="text-[30px] font-[400] ">
            <b>Valuable data at your fingertips</b>
          </p>
          <p className="text-[16px] leading-[24px] font-[400] ">
          Access real-time performance streaming and social media data via Analytics Cloud’s intuitive visuals. See where your tracks chart, which playlists feature them, and which influencers use them. Understand where your music resonates most, and adjust your marketing strategy accordingly.
          </p>
          <div className="flex gap-x-2 flex-wrap cursor-pointer ">
            <p className="bg-[#1CC8EE] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Playlist tracking
            </p>
            <p className="bg-[#1CC8EE] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-evenly ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Chart tracking
            </p>
            <p className="bg-[#1CC8EE] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Influencer engagement tracking{" "}
            </p>
            <p className="bg-[#1CC8EE] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              YouTube video tracking{" "}
            </p>
            <p className="bg-[#1CC8EE] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Historical data access
{" "}
            </p>
          </div>
        </div> 
      </div>
    </div>
  )
}
