"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import img from "../../../../Images/image.png";
import { CiCircleCheck } from "react-icons/ci";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
export default function Upload() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:px-36 my-5 ">
      <p className="text-center text-[55px] font-bold ">
        Managing your catalog is as{" "}
        <span className="text-[#5F2EEA] ">easy</span> as...
      </p>
      <div className=" grid md:grid-cols-2 grid-cols-1 pt-10 ">
        <div className=" mx-auto px-4 py-8  ">
          <br /> <br /> <br />
          <h2 className="text-3xl font-bold mb-4">Upload</h2>
          <p className="text-[14.5px] font-normal mb-6">
            Store your music on the only project management platform made for
            music. Save precious metadata, project files, artworks, links,
            videos and keep a single source of truth for your music.
          </p>
          <div className="flex flex-wrap gap-2 text-[13px]  ">
            <div className="flex items-center text-white gap-1  px-2 py-1 rounded-md   text-center bg-[#5F2EEA] ">
              <IoCheckmarkCircleSharp />
              <span>File storage</span>
            </div>
            <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Project planning</span>
            </div>
            <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Metadata</span>
            </div>
            <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Splits</span>
            </div>
            <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Lyrics</span>
            </div>
            <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#5F2EEA]">
              <IoCheckmarkCircleSharp />
              <span>Scan for links</span>
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
            {/* Add more platforms here */}
          </div>
        </div>
      </div>
      {/* Section 2 invite  */}
      <br /> <br />
      <div className=" grid md:grid-cols-2 grid-cols-1 pt-10 ">
        <div className=" bg-[#F3F4F6] h-96 rounded-xl w-[76%] ml-24 p-3 ">
          <div className="py-10 ">
            <p>Master</p>
            <div className="w-full h-auto bg-white rounded-t-md relative ">
              <div className=" p-2 flex justify-between  ">
                <div className="flex items-center justify-center  space-x-2 text-[10px]  ">
                  <Image src={img} className="h-7 w-7 rounded-full" />
                  <p className="text-[12px]  ">
                    Record <br /> Records{" "}
                  </p>
                  <p>info@record.com</p>
                  <p>
                    <CiCircleCheck className="text-[#4ADE80] " />{" "}
                  </p>
                  <p>
                    50%{" "}
                    <span className="bg-[#F3F4F6] p-[4px] rounded-md ">
                      Record label
                    </span>{" "}
                  </p>
                </div>

                {isOpen ? (
                  <RiArrowDropUpLine
                    className="mt-2 cursor-pointer"
                    onClick={toggleDropdown}
                  />
                ) : (
                  <RiArrowDropDownLine
                    className="mt-2 cursor-pointer"
                    onClick={toggleDropdown}
                  />
                )}
                {/* Render dropdown content here */}
                {isOpen && (
                  <div className="absolute w-full top-10 right-0 mt-2 bg-white  shadow-lg z-10 p-2 ">
                    <hr />
                    <div className="flex justify-between text-[#9CA3AF] text-[12px] mt-2 ">
                      <p>Legal Name</p>
                      <p>PRO</p>
                      <p>IPI</p>
                      <p>Publisher</p>
                      <p>Pub IPI</p>
                    </div>
                    <div className="flex justify-between  text-[12px] mt-2 ">
                      <p className=" ">
                        {" "}
                        Records <br /> Inc.
                      </p>
                      <p>N/A</p>
                      <p>N/A</p>
                      <p>N/A</p>
                      <p>N/A</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      <div className=" mx-auto px-4 py-8  ">
        <br /> <br />
        <h2 className="text-3xl font-bold mb-4">Invite</h2>
        <p className="text-[14.5px] font-normal mb-6">
          Share projects and recordings with other rightsholders. Tag
          collaborators with their associated credits, royalty splits and key
          information such as their IPI# and PRO association.
        </p>
        <div className="flex flex-wrap gap-2 text-[13px]  ">
          <div className="flex items-center text-white gap-1  px-2 py-1 rounded-md   text-center bg-[#4ADE80] ">
            <IoCheckmarkCircleSharp />
            <span> Smart contracts</span>
          </div>
          <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
            <IoCheckmarkCircleSharp />
            <span> Share folders</span>
          </div>
          <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
            <IoCheckmarkCircleSharp />
            <span> Share metadata</span>
          </div>
          <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
            <IoCheckmarkCircleSharp />
            <span> PRO Data</span>
          </div>
          <div className="flex items-center text-white gap-1   px-2 py-1 rounded-md    text-center bg-[#4ADE80]">
            <IoCheckmarkCircleSharp />
            <span> Unlimited collaborators</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

