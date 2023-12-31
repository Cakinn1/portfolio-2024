import Aos from "aos";
import React, { useEffect } from "react";

export default function Landing2() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <section
      id="about"
      className="bg-gradient-to-b to-[#3e99d1] from-20%   from-black "
    >
      <div 
      data-aos="fade-up" data-aos-duration="400" 
      className="text-white gap-x-12  mb-[200px] md:mb-[100px] lg:mb-0  text-center md:text-left space-y-8 md:space-y-0 max-w-[1280px] mx-auto  flex-col md:flex-row  flex h-[270px] p-5">
        <div className="w-[100%] md:w-[55%]">
          <h1 className="text-[32px] md:text-[42px] header">
            I'm a highly motivated frontend developer with a strong passion for
            web development.
          </h1>
        </div>
        <div className="w-[100%] md:w-[45%]  space-y-4">
          <p className="md:text-[20px]">
            I'm all about soaking up knowledge and embracing the exciting
            challenges in this ever-evolving tech world.
          </p>
          <p className="md:text-[20px]">
            Continuously working towards improving my knowledge and skills to
            develop technologies that contribute to the betterment of society.
          </p>
        </div>
      </div>
      <img src="/assets/clouds.webp" className="object-cover w-full" alt="" />
    </section>
  );
}
