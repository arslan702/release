"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../../Images/11.webp"
import img1 from "../../../../Images/12.webp"
import img2 from "../../../../Images/13.webp"
import Image from "next/image";
import { FaCircleCheck } from 'react-icons/fa6';


export default function Comment() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="md:px-28 md:mt-16 mb-5 mt-5 ">
      <p className="text-3xl text-center md:text-[70px] font-[600]">
      But don't take <span className="text-[#5F2EEA]">our</span>{" "}
      word for it
      </p>
      <br />
      <br />
      <div className=" w-full bg-[#F3F4F6] rounded-lg ">
        <Slider {...settings}>
          <div className="">
            <div className="md:flex gap-x-20 justify-center md:m-10 items-center flex-row p-5 ">
              <div className="md:w-[70%] ">
                <Image
                  src={img}
                  className="h-[250px] w-[330px] rounded-lg md:ml-14 "
                />
              </div>
              <div className="w-[40] pt-3 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores expedita perferendis blanditiis placeat quo
                  reiciendis, sapiente, quam qui saepe consequuntur velit aut
                  rem, vero laudantium eius. Inventore cupiditate dignissimos
                  voluptatibus?{" "}
                </p>
                <div className="flex gap-2 text-[20px] mt-3 " >
                  <p><b>Dram B </b>{" "} </p>
<FaCircleCheck className="text-[#1CC8EE] mt-1 " />
                </div>
                <p>Artist 1M + monthly listeners </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:flex gap-x-20 justify-center md:m-10 items-center flex-row p-5 ">
              <div className="md:w-[70%] ">
                <Image
                  src={img1}
                  className="h-[250px] w-[330px] rounded-lg md:ml-14 "
                />
              </div>
              <div className="w-[40] ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores expedita perferendis blanditiis placeat quo
                  reiciendis, sapiente, quam qui saepe consequuntur velit aut
                  rem, vero laudantium eius. Inventore cupiditate dignissimos
                  voluptatibus?{" "}
                </p>{" "}
                <div className="flex gap-2 text-[20px] mt-3 " >
                  <p><b>Daniel j lee</b>{" "} </p>
<FaCircleCheck className="text-[#1CC8EE] mt-1 " />
                </div>
                <p>Artist 1M + monthly listeners </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <br />
      
    </div>
  );
}
