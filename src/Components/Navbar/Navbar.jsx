"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdAlert, IoMdClose } from "react-icons/io";
import img from "../../../Images/15.svg";
import img1 from "../../../Images/16.svg";
import Image from "next/image";
import { RiArrowDropDownLine, RiQuestionnaireFill } from "react-icons/ri";
import { MdLibraryMusic, MdOutlinePhonelink, MdCopyright, MdAutoAwesome, MdTaskAlt, MdAnalytics, MdPublish, MdMicExternalOn, MdCurrencyExchange, MdMap  } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";
import { BsSoundwave } from "react-icons/bs";



export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const handleProductMouseEnter = () => {
    setIsProductDropdownOpen(true);
    clearTimeout(submenuTimeout);
  };

  const handleProductMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductDropdownOpen(false);
    }, 100);
    setSubmenuTimeout(timeout);
  };

  const handleResourcesMouseEnter = () => {
    setIsResourcesDropdownOpen(true);
    clearTimeout(submenuTimeout);
  };

  const handleResourcesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsResourcesDropdownOpen(false);
    }, 300);
    setSubmenuTimeout(timeout);
  };
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    clearTimeout(submenuTimeout);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setSubmenuTimeout(timeout);
  };

  return (
    <div className="">
      <div className=" px-8 py-4 text-black flex justify-between items-center bg-[#FCFCFD]   ">
        <div className="flex gap-3 w-1/4 ">
          <Image src={img1} className="h-6 w-5 " />
          <Image src={img} className="h-6 w-[100px] " />
        </div>

        {toggle ? (
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl cursor-pointer md:hidden block transition-all duration-100 "
          />
        ) : (
          <CiMenuFries
            onClick={() => setToggle(!toggle)}
            className="text-black text-2xl cursor-pointer md:hidden block transition-all duration-100"
          />
        )}

        <div className="md:flex hidden space-x-8 ">
          <div className="relative">
            <ul className="flex gap-3  items-center cursor-pointer text-black mt-2 ">
              <li
                className="relative"
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
              >
                <span className="px-4 text-[14px]">Product</span>
                <RiArrowDropDownLine
                  className={`absolute right-0 top-4 transform -translate-y-1/2 h-4 w-4 ${
                    isProductDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                {isProductDropdownOpen && (
                  <ul
                    className="absolute top-full left-1/2 h-auto transform -translate-x-1/2 z-10 bg-[#FCFCFD] shadow-md rounded-2xl  border border-gray-200  py-2 px-4"
                    onMouseEnter={handleProductMouseEnter}
                    onMouseLeave={handleProductMouseLeave}
                    style={{ width: "900px", top: "calc(100% + 15px)" }}
                  >
                    <div className="p-3">
                      <div className="flex  ">
                        {/* 1st section */}
                        <div className="w-[33%] " >
                          <p className="text-[40px] font-bold ">Product</p>
                          <p className="text-[14px] ">
                            Get to know the leader in music business management
                            and see why thousands use releese
                          </p>
                        </div>
                        {/* 2nd section */}
                        <div className="w-[33%] "  >
                   <a href="/music-cloud "> 
                       <div className=" mt-4  flex gap-3 hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2 ">
                          <div className="bg-[#F4F3FF] h-14 w-36 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdLibraryMusic className="text-[#5C2DE3] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Music Cloud
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              A secure Audio library you can access from
                              anywhere and share with anyone .{" "}
                            </p>
                          </div>
                        </div>
                        </a>
                        <a href="/marketing-cloud ">    
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#FFF7ED] h-14 w-24 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdOutlinePhonelink className="text-[#F97316] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Marketing Cloud
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              Activation tools built for the twenty-first century .{" "}
                            </p>
                          </div>
                        </div>
                        </a>
                        <a href="/rights-cloud ">  
                        <div className="flex gap-3 mt-4  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#FEE2E2] h-14 w-24 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdCopyright className="text-[#EF4444] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Rights Cloud
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             Global publishing and neighbouring right collection {" "}
                            </p>
                          </div>
                        </div>
                        </a>
                        <div className="flex gap-3 mt-4  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                  
                          <div className="h-14 w-32" style={{ background: 'linear-gradient(125deg, rgba(83, 66, 251, 1) 0%, rgba(46, 246, 255, 1) 90%)',  borderRadius: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <MdAutoAwesome className="text-white text-40px" />
</div>
  <div>
                            <p className="text-[18px] font-[500] ">
                              Releese AI
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                            Generate tasks , write lyrics or create docs using the GPT-3 model  {" "}
                            </p>
                          </div>
                        </div>

                        </div>

                        {/* 3rd section */}
                        <div className="w-[33%] " >
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#DCFCE7] h-14 w-24 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdTaskAlt className="text-[#4ADE80] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Calendar Cloud
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             A digital workspace that scale with your team . {" "}
                            </p>
                          </div>
                        </div>
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#DBEAFE] h-14 w-16 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdPublish className="text-[#3B82F6] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Distribution Cloud
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              Sell music at scale in one click . {" "}
                            </p>
                          </div>
                        </div>
                       
                        <div className="flex gap-3 mt-4  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#FCE7F3] h-14 w-24 rounded-lg flex justify-center items-center">
                            {" "}
                            <MdAnalytics className="text-[#DB2777] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Analytics Cloud
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              Real-time playlists chart and social media data .{" "}
                            </p>
                          </div>
                        </div>

                        </div>
                      

                      </div>
                    </div>
                  </ul>
                )}
              </li>
              {/* Release section   */}
              <li
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="px-4 text-[14px] ">Release for</span>
                <RiArrowDropDownLine
                  className={`absolute right-0 top-4 transform -translate-y-1/2 h-4 w-4 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                {isDropdownOpen && (
                  <ul
                    className="absolute top-full py-5 left-1/2 transform -translate-x-1/2 z-10 bg-[#FCFCFD] shadow-md rounded-2xl h-auto border border-gray-200 px-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ width: "900px", top: "calc(100% + 15px)" }}
                  >
                    <div className="p-3">
                      <div className="flex  ">
                        {/* 1st section */}
                        <div className="w-[30%] " >
                          <p className="text-[40px] font-bold ">Releese for</p>
                          <p className="text-[14px] ">
                          Explore ways releese services music industry professionals
                          </p>
                        </div>
                        {/* 2nd section */}
                        <div className="w-[35%] "  >
                        <div className=" mt-4  flex gap-3 hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2 ">
                          <div className="bg-[#F4F3FF] h-14 w-40 rounded-xl flex justify-center items-center">
                            {" "}
                            <MdMicExternalOn  className="text-[#5C2DE3] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Artists
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             Distribute your music, reach your audience and gain powerful insights to scale your career .{" "}
                            </p>
                          </div>
                        </div>
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#FFF7ED] h-14 w-40 rounded-xl flex justify-center items-center">
                            {" "}
                            <GrUserSettings className="text-[#F97316] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Artist Managers
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              Seamlessly manage your roster at scale and use big data to drive your next business decision .{" "}
                            </p>
                          </div>
                        </div>                      
                        <div className="flex gap-3 mt-4  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#D3E2F6] h-14 w-40 rounded-xl flex justify-center items-center">
                            {" "}
                            <BsSoundwave className="text-[#3a7eee] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Producers
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             Keep track of your catalog, claim your royalities and create smart contracts with your collaborators . {" "}
                            </p>
                          </div>
                        </div>
                        </div>

                        {/* 3rd section */}
                        <div className="w-[35%] " >
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#DCFCE7] h-14 w-32 rounded-xl flex justify-center items-center">
                            {" "}
                            <FaCircleDot className="text-[#48D67D] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Record labels
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             Out-of-the-box digital business management for teams that want to scale . {" "}
                            </p>
                          </div>
                        </div>
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#E4F5F7] h-14 w-32 rounded-xl flex justify-center items-center">
                            {" "}
                            <TbWorld className="text-[#1CC1E7] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Publishers
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              See why publishers trust releese to successfully manage petabyte sized catalogs . {" "}
                            </p>
                          </div>
                        </div>
                       
                        <div className="flex gap-3 mt-4  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#F5DADB] h-14 w-32 rounded-xl flex justify-center items-center">
                            {" "}
                            <LuPencilLine  className="text-[#e74243] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Songwriters
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              Manage your credits with a platform that recognizes the true value of songwriters .{" "}
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                )}
              </li>
              <li className="px-4 text-[14px] ">Pricing</li>
                           {/* resources section   */}
              <li
                className="relative"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <span className="px-4 text-[14px] ">Resources</span>
                <RiArrowDropDownLine
                  className={`absolute right-0 top-4 transform -translate-y-1/2 h-4 w-4 ${
                    isResourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                {/* Icon for dropdown */}
                {isResourcesDropdownOpen && (
                  <ul
                    className="absolute top-full left-0 transform -translate-x-2/3 z-10 bg-[#FCFCFD] shadow-md rounded-2xl h-auto border border-gray-200  py-2 px-4"
                    onMouseEnter={handleResourcesMouseEnter}
                    onMouseLeave={handleResourcesMouseLeave}
                    style={{ width: "900px", top: "calc(100% + 15px)" }}
                  >
                   <div className="p-3">
                      <div className="flex  ">
                        {/* 1st section */}
                        <div className="w-[28%] " >
                          <p className="text-[30px] font-bold ">Resources</p>
                          <p className="text-[14px] ">
                          More information about every corner of the releese ecosystem</p>
                        </div>
                        {/* 2nd section */}
                        <div className="w-[35%] "  >
                     <a href="/">
                        <div className=" mt-4  flex gap-3 hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2 ">
                          <div className="bg-[#F4F3FF] h-14 w-28 rounded-xl flex justify-center items-center">
                            {" "}
                            <MdMicExternalOn  className="text-[#5C2DE3] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Blog
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             Thoughts, news, templates and music industry best practices .{" "}
                            </p>
                          </div>
                        </div>
                        </a> 
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#D3E2F6] h-14 w-24 rounded-xl flex justify-center items-center">
                            {" "}
                            <MdMap  className="text-[#3a7eee] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Feature Roadmap
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              Keep track of exciting features coming to your dashboard .{" "}
                            </p>
                          </div>
                        </div>                      
                        <div className="flex gap-3 mt-4  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#D4F3E0] h-14 w-24 rounded-xl flex justify-center items-center">
                            {" "}
                            <MdCurrencyExchange  className="text-[#48D67D] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Royalty Calculator
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             Estimate your streaming Income on all major platforms . {" "}
                            </p>
                          </div>
                        </div>
                        </div>

                        {/* 3rd section */}
                        <div className="w-[35%] " >
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#E4F5F7] h-14 w-24 rounded-xl flex justify-center items-center">
                            {" "}
                            <IoMdAlert  className="text-[#1CC1E7] text-[40px] rounded-[100px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              About Us
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                             Learn more about who we are and what we stand for  . {" "}
                            </p>
                          </div>
                        </div>
                        <div className=" mt-4  flex gap-3  hover:bg-[#F3F3F5] transition-all duration-1000 rounded-md p-2">
                          <div className="bg-[#F5DADB] h-14 w-28 rounded-xl flex justify-center items-center">
                            {" "}
                            <RiQuestionnaireFill className="text-[#E74243] text-[40px]  " />{" "}
                          </div>
                          <div>
                            <p className="text-[18px] font-[500] ">
                              Help Center
                            </p>
                            <p className="text-[13px] text-gray-400 font-[400] ">
                              Explore how to use releese and get support for your products . {" "}
                            </p>
                          </div>
                        </div>
                       
                    
                        </div>
                      </div>
                    </div> 
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className="ml-5 space-x-2 ">
            <button className="bg-slate-100 hover:bg-[#F3F3F5]  h-9 px-3 rounded-md text-[#5F2EEA]">
              Log in
            </button>
            <button className="bg-[#5F2EEA] h-9 w-36   rounded-md text-white hover:bg-[#3F1D95] text-[13px]  ">
              Get Started for free{" "}
            </button>
          </div>
        </div>
        {/* responsive  */}
        <ul
          className={`cursor-pointer text-center  fixed bg-black text-white top-[67px] md:hidden w-full h-screen  transition-all duration-1000
              ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className="p-5">Why Webflow</li>
          <li className="p-5">Why us</li>
          <li className="p-5">Pricing</li>
          <li className="p-5">Faqs</li>
          <button className="bg-white  text-black h-10 px-5 m-5 rounded-md hover:bg-white hover:text-black ">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
}
