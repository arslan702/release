
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import img1 from '../../../Images/4.jpeg';
import img2 from '../../../Images/5.jpeg';
import img3 from '../../../Images/6.jpeg';
import img4 from '../../../Images/7.png';
import img5 from '../../../Images/8.png';
import img6 from '../../../Images/9.png';
import img7 from '../../../Images/10.jpeg';
import { FaCircleCheck } from 'react-icons/fa6';

export default function Simplify() {
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const containerWidth = 350;


  useEffect(() => {
    const interval = setInterval(() => {
      setMarginLeft(prev => (prev + 1) % 400); // Change 400 to adjust the width of the container
    }, 10); // Change the speed as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarginRight(prev => ( prev - 1) % 400 );
    }, 20);

    return () => clearInterval(interval);
  }, [containerWidth]);

  return (
    <div className='md:px-24'>
      <br />
      <br />
      <div className='grid md:grid-cols-2 grid-cols-1 '>
        <div className='h-[400px] w-[90%] bg-[#F3F4F6] rounded-xl p-4 relative overflow-hidden'>
          <div className='flex space-x-4' style={{ marginLeft: `${marginLeft}px` }}>
            <Image src={img1} className='h-[50px] w-[50px]' />
            <Image src={img2} className='h-[50px] w-[50px]' />
            <Image src={img3} className='h-[50px] w-[50px]' />
            <Image src={img4} className='h-[50px] w-[50px]' />
            <Image src={img5} className='h-[50px] w-[50px]' />
            <Image src={img6} className='h-[50px] w-[50px]' />
            <Image src={img7} className='h-[50px] w-[50px]' />
          </div>
          <br />
          <br />
          <div className='flex space-x-4' style={{ marginRight: `${marginRight}px` }}>
            <Image src={img1} className='h-[50px] w-[50px]' />
            <Image src={img2} className='h-[50px] w-[50px]' />
            <Image src={img3} className='h-[50px] w-[50px]' />
            <Image src={img4} className='h-[50px] w-[50px]' />
            <Image src={img5} className='h-[50px] w-[50px]' />
            <Image src={img6} className='h-[50px] w-[50px]' />
            <Image src={img7} className='h-[50px] w-[50px]' />
          </div>
        </div>

        <div className="px-4 md:pt-14 " >
          <p className="text-[#5F2EEA] mt-3 ">RELEASE - DISTRIBUTION CLOUD</p>
          <p className="text-[30px] font-[400] ">
            <b>Simplify and amplify distribution</b>
          </p>
          <p className="text-[16px] leading-[24px] font-[400] ">
          Smoothly deliver your music to top platforms like Spotify, Apple Music, TikTok, and Instagram. Gain valuable insights, accurately distribute your royalties, and efficiently monetize videos through YouTube Content ID. Distribution Cloud offers complete transparency and no unnecessary fees.
          </p>
          <div className="flex gap-x-2 flex-wrap ">
            <p className="bg-[#3B82F6] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Digital distribution
            </p>
            <p className="bg-[#3B82F6] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-evenly ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Royalty splits
            </p>
            <p className="bg-[#3B82F6] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              AI-Assisted pitching{" "}
            </p>
            <p className="bg-[#3B82F6] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-around ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Expense tracking{" "}
            </p>
            <p className="bg-[#3B82F6] text-[white]  px-2 leading-[30px] mt-5 rounded-md flex justify-between ">
              {" "}
              <FaCircleCheck className="mt-2 text-white mr-2 " />
              Real-time sharing{" "}
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
}
