"use client"
import Image from 'next/image'
import React from 'react'
import img from '../../../../Images/1.webp'
import img1 from '../../../../Images/2.webp'
import img2 from '../../../../Images/a.webp'



export default function Collaborate() {
 
  return (
    <div className='bg-[#000000] h-screen w-full ' >
<div className='mx-auto  md:w-[80%] pt-10 ' >
<p className='text-white text-[30px] font-bold ' >Collaborate on projects in realtime</p>
<p className='text-white text-[14px] ' >Work with creators, labels, and managers on everything you and your team need to get done</p>


<div className='mt-3 flex justify-between ' >
  <div className='flex flex-col gap-16 text-center ' >
    <div>
      <Image src={img} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Promoter</p>
    </div>
    <div>
      <Image src={img1} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >A&R</p>
    </div>
    <div>
      <Image src={img} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Artist relations</p>
    </div>  
  </div>
  <div className='flex flex-col justify-center gap-16 text-center ' >
    <div>
      <Image src={img} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Record label</p>
    </div> 
  </div>
  <div className='flex flex-col justify-center gap-16 text-center ' >
    <div>
      <Image src={img2} className='h-[100px] w-[100px] rounded-md  border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Project</p>
    </div> 
  </div>
  <div className='flex flex-col justify-center gap-16 text-center ' >
    <div>
      <Image src={img} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Artist team</p>
    </div> 
  </div>
  <div className='flex flex-col gap-16 text-center ' >
    <div>
      <Image src={img} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Creater</p>
    </div>
    <div>
      <Image src={img1} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Manager</p>
    </div>
    <div>
      <Image src={img} className='h-[70px] w-[70px] rounded-full border-[2px] border-white ' />
      <p className='bg-white border mt-2 px-1   rounded-md text-[12px]  ' >Designer</p>
    </div>  
  </div>
</div>

</div>
    </div>
  )
}
