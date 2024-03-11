"use client"
import React, {useState} from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import img from '../../../Images/15.svg'
import img1 from '../../../Images/16.svg'
import Image from "next/image";



export default function Navbar() {
 const [toggle,setToggle] = useState(false);
  return (
    <div className="  p-4  ">
      <div className=" px-8 text-black flex justify-between  items-center  ">
        <div className='flex gap-3 w-1/4 ' >
<Image src={img1} className='h-6 w-5 ' />
<Image src={img} className='h-6 w-[100px] ' />
</div>

        {
          toggle ? 
          < IoMdClose onClick={() => setToggle(!toggle) } className="text-black text-2xl cursor-pointer md:hidden block transition-all duration-100 " />
         :
        < CiMenuFries onClick={() => setToggle(!toggle) } className="text-black text-2xl cursor-pointer md:hidden block transition-all duration-100" />
        }

        <div className="md:flex hidden space-x-12 " >
        <ul className="flex  gap-12 items-center cursor-pointer text-black " >
          <li >Product</li>
          <li>Releese for</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="ml-5 space-x-5 " >
        <button className="bg-slate-50 hover:bg-slate-200  h-10 px-3 rounded-md text-[#5F2EEA]" >Log in</button>
        <button className="bg-[#5F2EEA] h-10 px-3 rounded-md text-white hover:bg-[#3F1D95] text-[14px]  " >Get Started for free  </button>
        </div>
        </div>
        {/* responsive  */}
        <ul className= {`cursor-pointer text-center  fixed bg-black text-white top-[67px] md:hidden w-full h-screen  transition-all duration-1000
              ${toggle ? 'left-[0]' :  'left-[-100%]' }`} >
          <li className="p-5" >Why Webflow</li>
          <li className="p-5">Why us</li>
          <li className="p-5">Pricing</li>
          <li className="p-5">Faqs</li>
        <button className="bg-white  text-black h-10 px-5 m-5 rounded-md hover:bg-white hover:text-black " >Contact Us</button>
        </ul>
      </div>

    </div>
  );
}


 
