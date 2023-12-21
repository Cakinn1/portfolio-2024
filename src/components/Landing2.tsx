import React from "react";

export default function Landing2() {
  return (
    
    <div className="bg-gradient-to-b to-[#3e99d1] from-20%   from-black ">

    <div className="text-white  max-w-[1280px] mx-auto   flex h-[270px] p-5">
      <div className="w-[55%]">
        <h1 className="text-[42px] header">
          I'm a highly motivated software engineer with a strong passion for web
          development.
        </h1>
      </div>
      <div className="w-[45%] space-y-4">
        <p className="text-[20px]">
          I'm all about soaking up knowledge and embracing the exciting
          challenges in this ever-evolving tech world.
        </p>
        <p className="text-[20px]">
          Continuously working towards improving my knowledge and skills to
          develop technologies that contribute to the betterment of society.
        </p>
      </div>
    </div>
    <img src="/assets/clouds.webp" className="object-cover w-full" alt="" />
    </div>
  );
}
