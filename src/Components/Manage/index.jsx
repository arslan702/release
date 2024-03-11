import React from 'react'
import Image from 'next/image'
import img from '../../../Images/14.png'

export default function Manage() {
  return (
    <div className='bg-[#5F2EEA] h-[460px] ' >
<div className='flex flex-col justify-between items-center md:pt-24 pt-10 ' >
<Image src={img} className='rounded-lg  '  />
<p className='mt-2 text-[40px] max-w-lg text-center leading-tight text-white '> <b>Manage your entire music business in one place</b> </p>
<br />
<button className="bg-[white] h-10 px-3 rounded-md text-[#5f2eea] text-[14px]  " >Get Started for free  </button>
</div>
    </div>
  )
}
