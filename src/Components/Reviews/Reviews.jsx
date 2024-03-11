import Image from 'next/image'
import React from 'react'
import img from '../../../Images/1.webp'
import img1 from '../../../Images/2.webp'
import img2 from '../../../Images/3.webp'
import { FaCircleCheck } from "react-icons/fa6";



export default function Reviews() {
  return (
    <div className='md:px-24 mb-10 ' >
      <p className='text-center pt-10 text-[48px] font-[600]  ' >Used by <span className='text-[#5F2EEA]'>pros</span>, built for <span className='text-[#5F2EEA]' >everyone</span> </p>
 <br />
   <div className='grid md:grid-cols-3 sm:grid-cols-1 space-x-4 ' >
<div className='bg-[#F3F4F6] flex justify-center items-center flex-col p-4 rounded-xl ' >
<Image src={img} className='rounded-full h-[150px] w-[150px] ' />
<p className='text-center mt-2 ' >“Releese streamlines my entire release process so I can spend more time on the creative side of music, and less time planning my next rollouts. It's a game changer.”</p>
<div className='flex gap-x-2 mt-2' >
  <p className='text-[20px] ' ><b>Arman Cekin</b></p>
  <FaCircleCheck className='mt-2 text-[#1CC8EE] ' />
</div>
  <p>Artist, 1m+ monthly listeners</p>
</div>
<div className='bg-[#F3F4F6] flex justify-center items-center flex-col p-4 rounded-xl ' >
<Image src={img1} className='rounded-full h-[150px] w-[150px] ' />
<p className='text-center mt-2 ' >“I have never seen such a well put together all-in-one solution that covers all the bases from track inception to distribution & beyond. I can’t recommend it enough.”</p>
<div className='flex gap-x-2 mt-2' >
  <p className='text-[20px] ' ><b>musicbyLukas</b></p>
  <FaCircleCheck className='mt-2 text-[#1CC8EE] ' />
</div>
  <p>Founder, TEAMMBL®, 300k+ followers</p>
</div>
<div className='bg-[#F3F4F6] flex justify-center items-center flex-col p-4 rounded-xl ' >
<Image src={img2} className='rounded-full h-[150px] w-[150px] ' />
<p className='text-center mt-2 ' >“With Releese, we're in full control of our label management journey, effortlessly organized, and always in tune. There is truly no alternative to Releese on the market.”</p>
<div className='flex gap-x-2 mt-2' >
  <p className='text-[20px] ' ><b>Trap City</b></p>
  <FaCircleCheck className='mt-2 text-[#1CC8EE] ' />
</div>
  <p>Record Label, 15m+ followers</p>
</div>
   </div>
   
    </div>
  )
}
