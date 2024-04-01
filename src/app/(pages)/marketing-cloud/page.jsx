import React from 'react'
import {  MdOutlinePhonelink } from 'react-icons/md'
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
        <div className="bg-[#FEE2E2] h-16 w-16 rounded-2xl flex justify-center items-center">
                            {" "}
                            <MdOutlinePhonelink className="text-[#F97316] text-[40px]  " />{" "}
                          </div>
        <p className="text-[#FFF7ED] text-[14px] mt-1 ">Marketing Cloud</p>
        <p className="text-[64px] leading-[72px] max-w-3xl text-center font-[600] text-[#111827] ">
        Turn followers into fans
        </p>
        <p className="text-[22px]  text-center text-[#111827] mt-2 ">
        Connect with your audience, share your music, and grow your streams, all on Releese
        </p>
        <button className="hover:bg-[#3F1D95] text-[13px] bg-[#5F2EEA] px-4 mt-3 py-3 text-white rounded-lg ">
          Get Started for free{" "}
        </button>
      </div>
      <br />
      <div className="flex justify-center items-center mt-2 ">
        <Image src={img} className=" rounded-xl shadow-2xl  " />
      </div>
     <Join/>

<Fanbase/>
     <Comment/>
      <Collaborate/>
      <Resources/>
    </div>
  )
}
