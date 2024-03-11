import Image from 'next/image';
import React from 'react';
import img from '../../../Images/download.png';
import { FaCircleCheck } from 'react-icons/fa6';


export default function Services() {
  return (
    <div className='bg-[#3F1D95] md:h-[500px]'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='md:pl-28 mt-12 text-white p-2 ' >
          <div>
            <p>PERSONALIZED SERVICE</p>
            <p className='text-[32px] font-bold ' >24/7 dedicated support</p>
            <p>Our worldwide team is available whenever you require assistance or have a question. One-on-one sessions help you get maximum value from Releese, guiding you through branding, marketing, promotions, and more.</p>
          </div>
          <br />
          <hr />
          <br />
          <div>
<div className='flex' >
<FaCircleCheck className="mt-[15px]  mr-2 text-[18px] " />
<p className='text-[30px] font-bold ' >Onboarding</p>
</div>
<p>Tailored onboarding and training to get you set up as quickly as possible</p>
<div className='flex mt-2' >
<FaCircleCheck className="mt-[15px]  mr-2 text-[18px] " />
<p className='text-[30px] font-bold ' >Support</p>
</div>
<p>Always available chat and phone support for your music and tech needs</p>
<div className='flex' >
<FaCircleCheck className="mt-[15px]  mr-2 text-[18px] " />
<p className='text-[30px] font-bold ' > Distribution</p>
</div>
<p>Customized distribution services to help you navigate playlisting</p>
          </div>
        </div>
        <div className='overflow-hidden'> {/* Apply inline style */}
          <Image src={img} className='md:h-[500px] md:w-[900px] w-full md:ml-10  ' />
        </div>
      </div>
    </div>
  );
}
