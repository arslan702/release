import React from 'react'
import {  MdCopyright } from 'react-icons/md'
import img from '../../../../Images/Capi.PNG'
import Image from 'next/image'
import Join from '@/Components/music-cloud/join';
import Resources from '@/Components/music-cloud/Resources';
import Collaborate from '@/Components/music-cloud/Collaborate';
import Comment from '@/Components/music-cloud/Comment';
import Fanbase from '@/Components/Fanbase';


export default function page() {
  return (
    <div>
       <div className="flex justify-center items-center flex-col h-auto pt-20 md:px-24 ">
        <div className="bg-[#FEE2E2] h-20 w-20 rounded-2xl flex justify-center items-center">
                            {" "}
                            <MdCopyright className="text-[#EF4444] text-[45px]  " />{" "}
                          </div>
        <p className="text-[#9CABCB] text-[16px] mt-1 ">Rights Cloud</p>
        <p className="text-[64px] leading-[72px] pt-1 max-w-3xl text-center font-[600] text-[#111827] ">
        Royalty collection on autopilot
        </p>
        <p className="text-[22px]  text-center text-[#111827] mt-2 ">
        Cutting edge publishing and neighboring rights collection, monetize your songs in one <br /> click
        </p>
        <button className="hover:bg-[#3F1D95] text-[13px] bg-[#5F2EEA] px-4 mt-3 py-3 text-white rounded-lg ">
          Get Started for free{" "}
        </button>
      </div>
      <br />
      <div className="flex justify-center items-center mt-2 bg-[#F3F4F6] h-screen w-[70%] mx-auto rounded-xl "> </div>
     <Join/>

     <Comment/>
      <Collaborate/>
      <Resources/>
    </div>
  )
}
