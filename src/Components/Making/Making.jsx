import React from "react";

export default function Making() {
  return (
    <div className="bg-[#000000]  mt-3 md:px-32 text-white md:pt-16 leading-none  ">
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <h1 className="md:text-[62px] text-[32px] px-4 font-[600] ">
            Making music business{" "}
            <span className="text-[#5F2EEA] ">simpler</span>{" "}
          </h1>
          <p className="pt-4 px-4 leading-[24px] text-[17px] font-[400] ">
            Managing your music is a complex process. Juggling tasks like
            distribution, marketing, and metadata management often involves
            multiple disconnected platforms. This uncoordinated approach wastes
            time, costs money, and causes confusion, ultimately slowing your
            growth and success.
          </p>
          <p className="pt-4 px-4  leading-[24px] text-[17px] font-[400] ">
            Releese is designed to address these challenges. Our platform brings
            together all the essential tools you need, simplifying your
            processes and centralizing your operations. From global music
            distribution and real-time analytics through to rights management
            and audience engagement, we help to make your workflow seamless and
            efficient.
          </p>
        </div>

        {/* 2nd column */}
        <div className="md:pl-6 px-4 mt-3 mb-5">
          <div className="bg-[#171717]  w-[100%] rounded-2xl flex  space-x-5 px-4 py-6  ">
            <div>
              <p className="h-8 w-8 bg-white text-black rounded-full flex justify-center items-center font-bold text-[20px] ">
                1
              </p>
            </div>
            <div>
              <p className="text-[20px] ">
                <b>Sign Up</b>
              </p>
              <p className="mt-2 text-[16px] leading-[24px] ">
                Register for a 14-day free trial with full access to all
                platform features and functions. Try now, decide later.
              </p>
            </div>
          </div>
          <br />
          <div className="bg-[#171717]  w-[100%] rounded-2xl flex  space-x-5 px-4 py-6  ">
            <div>
              <p className="h-8 w-8 bg-white text-black rounded-full flex justify-center items-center font-bold text-[20px] ">
                2
              </p>
            </div>
            <div>
              <p className="text-[20px] ">
                <b>Try it out</b>
              </p>
              <p className="mt-2 text-[16px] leading-[24px] ">
              Take a guided tour, then dive right into Releese’s intuitive – but powerful – music biz tools. You’ll see the benefit immediately.
              </p>
            </div>
          </div>
          <br />
          <div className="bg-[#171717]  w-[100%] rounded-2xl flex  space-x-5 px-4 py-6  ">
            <div>
              <p className="h-8 w-8 bg-white text-black rounded-full flex justify-center items-center font-bold text-[20px] ">
                3
              </p>
            </div>
            <div>
              <p className="text-[20px] ">
                <b>Pick a plan</b>
              </p>
              <p className="mt-2 text-[16px] leading-[24px] ">
              After 14 days, select whichever subscription suits you, from an always-free service for individuals to a feature-rich package for large teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
