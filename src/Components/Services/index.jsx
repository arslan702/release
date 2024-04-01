import Image from 'next/image';
import React from 'react';
import img from '../../../Images/download.png';
import { FaCircleCheck } from 'react-icons/fa6';


export default function Services() {
  return (
    <div className='bg-[#3F1D95] md:h-[500px]'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='md:pl-32 mt-12 text-white p-2 ' >
          <div>
            <p>PERSONALIZED SERVICE</p>
            <p className='text-[32px] font-bold ' >24/7 dedicated support</p>
            <p className='text-[#BDB5FD] text-[15px] ' >Our worldwide team is available whenever you require assistance or have a question. One-on-one sessions help you get maximum value from Releese, guiding you through branding, marketing, promotions, and more.</p>
          </div>
          <br />
          <hr />
          <br />
          <div>
<div className='flex' >
<FaCircleCheck className="mt-[15px]  mr-2 text-[22px] " />
<p className='text-[26px] font-bold mt-2 ' >Onboarding</p>
</div>
<p className='text-[14px] ' >Tailored onboarding and training to get you set up as quickly as possible</p>
<div className='flex mt-2' >
<FaCircleCheck className="mt-[15px]  mr-2 text-[22px] " />
<p className='text-[26px] font-bold mt-2 ' >Support</p>
</div>
<p className='text-[14px] '>Always available chat and phone support for your music and tech needs</p>
<div className='flex ' >
<FaCircleCheck className="mt-[15px]  mr-2 text-[22px] " />
<p className='text-[26px] font-bold mt-2 ' > Distribution</p>
</div>
<p className='text-[14px] '>Customized distribution services to help you navigate playlisting</p>
          </div>
        </div>
        <div className='overflow-hidden'> {/* Apply inline style */}
          <Image src={img} className='md:h-[500px] md:w-[900px] w-full md:ml-10  ' />
        </div>
      </div>
    </div>
  );
}
