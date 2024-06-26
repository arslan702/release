import Image from 'next/image'
import React from 'react'
import img from '../../../Images/15.svg'
import img1 from '../../../Images/16.svg'
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';



export default function Footer() {
  return (
    <>
    <div className='bg-[#FCFCFD] md:px-32 py-14 cursor-pointer ' >
<div className='flex flex-wrap ' >
  <div className='md:w-2/6 md:px-4 px-2 ' >
<div className='flex gap-3 ' >
<Image src={img1} className='h-5 w-5 mt-1 ' />
<Image src={img} className='h-6 w-[100px] ' />
</div>
<p className='text-[#4B5563] mt-3 mb-2 ' >We connect all layers of the music industry with a creator first mindset</p>
<hr />
<p className='text-[14px] text-[#4B5563] mt-2  ' >Follow us to discover how you can manage your music business better</p>

 <div className='flex mt-3 gap-5 text-[20px] text-[#5F2EEA] ' >
 <FaFacebookSquare />
 <IoLogoInstagram />
 <FaTiktok />
 <RiTwitterXFill />
 <FaYoutube />
 <FaLinkedin />

 </div>
  </div>
  <div className='4/6 grid md:grid-cols-4 grid-cols-2 px-2 ' >
<div>
<p className='text-[14px] text-[#9CA3AF] font-[500] ' >Product</p>
<p className='mt-3 text-[13px] font-normal ' >Music Cloud</p>
<p className='mt-3 text-[13px] font-normal ' >Calendar Cloud</p>
<p className='mt-3 text-[13px] font-normal ' >Marketing Cloud</p>
<p className='mt-3 text-[13px] font-normal ' >Distribution Cloud</p>
<p className='mt-3 text-[13px] font-normal ' >Rights Cloud</p>
<p className='mt-3 text-[13px] font-normal ' >Analytics Cloud</p>
<p className='mt-3 text-[13px] font-normal ' >Releese AI</p>
<p className='mt-3 text-[13px] font-normal ' >Pricing</p>
</div>

<div>
<p className='text-[14px] text-[#9CA3AF] font-[500] ' >Releese for</p>
<p className='mt-3 text-[13px] font-normal ' >Artists </p>
<p className='mt-3 text-[13px] font-normal ' >Labels </p>
<p className='mt-3 text-[13px] font-normal ' >Artist Managers</p>
<p className='mt-3 text-[13px] font-normal ' >Publishers</p>
<p className='mt-3 text-[13px] font-normal ' >Producers</p>
<p className='mt-3 text-[13px] font-normal ' >Songwriters</p>
</div>

<div>
<p className='text-[14px] text-[#9CA3AF] font-[500] ' >Company</p>
<p className='mt-3 text-[13px] font-normal ' >About</p>
<p className='mt-3 text-[13px] font-normal ' >Blog</p>
<p className='mt-3 text-[13px] font-normal ' >Feature Roadmap</p>
<p className='mt-3 text-[13px] font-normal ' > Brand guidelines</p>
</div>

<div>
<p className='text-[14px] text-[#9CA3AF] font-[500] ' >Support</p>
<p className='mt-3 text-[13px] font-normal ' >Help Center </p>
<p className='mt-3 text-[13px] font-normal ' > Privacy Center</p>
<p className='mt-3 text-[13px] font-normal ' >Status</p>
<p className='mt-3 text-[13px] font-normal ' > Refer-a-Creator Program</p>
<p className='mt-3 text-[13px] font-normal ' > Schedule a demo</p>
<p className='mt-3 text-[13px] font-normal ' > Privacy Policy</p>
<p className='mt-3 text-[13px] font-normal ' > Cookie Policy</p>
<p className='mt-3 text-[13px] font-normal ' >Terms and conditions</p>
</div>
  </div>
</div>
    </div>
<div className='h-20 bg-[#F3F4F6] text-center flex items-center justify-center text-[14px] text-[#4B5563] ' >
<p>© 2024 Releese Innovations, Ltd. All rights reserved.</p>
</div>
</>
  )
}
