"use client";
import React, { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function Fanbase() {
  return (
    <div className="md:px-20 my-5 ">
      <p className="text-center text-[55px] font-bold ">
        Growing a fanbase is <span className="text-[#5F2EEA] ">easy</span> as...
      </p>
      <div className=" grid md:grid-cols-2 grid-cols-1 pt-10 ">
        <div className=" mx-auto px-4 py-8  ">
          <br /> <br /> <br />
          <h2 className="text-3xl font-bold mb-4">Put yourself out there</h2>
          <p className="text-[14.5px] font-normal mb-6">
            Share your music with the world, and let potential fans decide where
            they want to listen. Our pages are optimized to make users
            click-through
          </p>
          <div className="flex flex-wrap gap-2 text-[13px]  ">
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]  px-2 py-1 rounded-md   text-center bg-[#5F2EEA] ">
              <IoCheckmarkCircleSharp />
              <span>Smart links</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]   px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span> Pre-saves</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]   px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Short links</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]  px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Beautiful design</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]  px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Blazing speed</span>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F4F6] rounded-2xl h-96 m-2  ">
          <div className="flex flex-wrap justify-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-500 m-2 rounded-lg">
              <span className="text-white text-lg font-bold">AWA</span>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 m-2 rounded-lg">
              <span className="text-white text-lg font-bold">Amazon</span>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-green-500 m-2 rounded-lg order-last md:order-none">
              <span className="text-white text-lg font-bold">Spotify</span>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 m-2 rounded-lg order-first md:order-none">
              <span className="text-white text-lg font-bold">iHeartRadio</span>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      {/* 2nd section Graph  */}
      <div className="md:grid grid-cols-2 " >
     <div className="bg-[#F3F4F6] h-96 w-[95%] rounded-xl  " ></div>
      <div className=" mx-auto px-4 py-8 p-2 ">
          <br /> <br /> <br />
          <h2 className="text-3xl font-bold mb-4">Convert your followers</h2>
          <p className="text-[14.5px] font-normal mb-6">
          Leverage Marketing-Cloud's conversion-based technology to promote your music on social media. Customize every journey to your music, no coding required.

          </p>
          <div className="flex flex-wrap gap-2 text-[13px]  ">
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]  px-2 py-1 rounded-md   text-center bg-[#4ADE80] ">
              <IoCheckmarkCircleSharp />
              <span>Collect fan data</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
              <IoCheckmarkCircleSharp />
              <span> Grow your fanbase</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
              <IoCheckmarkCircleSharp />
              <span> Lower ad costs </span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]  px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
              <IoCheckmarkCircleSharp />
              <span> Bypass ad blockers </span>
            </div>
            
          </div>
        </div>
      </div>
      <br /> <br />
      {/* 3rd section  */}
      <div className="md:grid grid-cols-2 " >
      <div className=" mx-auto px-4 py-8 p-2 ">
          <br /> <br /> <br />
          <h2 className="text-3xl font-bold mb-4">Convert your followers</h2>
          <p className="text-[14.5px] font-normal mb-6">
          Leverage Marketing-Cloud's conversion-based technology to promote your music on social media. Customize every journey to your music, no coding required.

          </p>
          <div className="flex flex-wrap gap-2 text-[13px]  ">
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]  px-2 py-1 rounded-md   text-center bg-[#4ADE80] ">
              <IoCheckmarkCircleSharp />
              <span>Collect fan data</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
              <IoCheckmarkCircleSharp />
              <span> Grow your fanbase</span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
              <IoCheckmarkCircleSharp />
              <span> Lower ad costs </span>
            </div>
            <div className="flex items-center text-white gap-1 text-[15px] font-[600]  px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
              <IoCheckmarkCircleSharp />
              <span> Bypass ad blockers </span>
            </div>
            
          </div>
        </div>
        <div className="bg-[#F3F4F6] h-96 w-[95%] rounded-xl  " ></div>

      </div>
    </div>
  );
}
