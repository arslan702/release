import React from 'react'
import img1 from "../../../../Images/bg.webp";
import Image from 'next/image';


export default function Join() {
  return (
    <div>
       <div className=" relative  ">
        <Image
          src={img1}
          className=" rounded-xl shadow-xl w-full h-screen  brightness-[0.5] bg-cover center "
        />
        <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white text-center">
          <p className="text-[35px] font-[700] text-center ">
            Join the best music management <br /> platform
          </p>
          <h6 className="text-[17px] font-[500] ">
            Elevate your music and career by using the platform that was
            designed to make music <br /> business more efficient,
            collaborative, and transparent.
          </h6>
          <button className="bg-white px-3 py-2 mt-2 hover:bg-[#EBE9FE] transition-all duration-1000 text-[#7EA2F5] text-[12px] rounded-md ">
            Learn more about Releese
          </button>
        </div>
      </div>
    </div>
  )
}
