import React from "react";
import { MdLibraryMusic } from "react-icons/md";
import img from "../../../../Images/img.PNG";
import Image from "next/image";
import Upload from "@/Components/music-cloud/Upload";
import Comment from "@/Components/music-cloud/Comment";
import Collaborate from "@/Components/music-cloud/Collaborate";
import Resources from "@/Components/music-cloud/Resources";
import Join from "@/Components/music-cloud/join";

export default function page() {
  return (
    <div className="bg-[#FCFCFD] ">
      <div className="flex justify-center items-center flex-col h-96 pt-10 md:px-24 ">
        <div className="bg-[#F4F3FF] h-16 w-16 rounded-2xl flex justify-center items-center">
          <MdLibraryMusic className="text-[#5F2EEA] text-[40px] " />{" "}
        </div>
        <p className="text-[#A5A3AF] text-[14px] mt-1 ">Music Cloud</p>
        <p className="text-[64px] leading-[72px] max-w-3xl text-center font-[600] text-[#111827] ">
          Catalog management, simplified
        </p>
        <p className="text-[18px] max-w-3xl text-center text-[#111827] mt-2 ">
          Upload, manage and share music with anyone, from anywhere. Organize
          metadata and splits to keep everything in one place
        </p>
        <button className="hover:bg-[#3F1D95] text-[13px] bg-[#5F2EEA] px-3 mt-3 py-2 text-white rounded-lg ">
          Get Started for free{" "}
        </button>
      </div>
      <div className="flex justify-center items-center mt-2 ">
        <Image src={img} className=" rounded-xl shadow-2xl  " />
      </div>
      <br />
     
      <Join/>
      <Upload />
      <Comment/>
      <Collaborate/>
      <Resources/>
    </div>
  );
}
