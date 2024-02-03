import Aos from "aos";
import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      id="about"
      className="bg-gradient-to-b to-[#3e99d1] from-20%  from-black "
    >
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="text-white gap-x-12 text-center  justify-center items-center   md:text-left space-y-8 md:space-y-0 max-w-[1280px] mx-auto  flex-col md:flex-row  flex h-[200px] p-5 md:px-16 px-14"
      >
        <h1 className="lg:text-6xl text-center about__color text-3xl md:text-5xl">
          Ambitious developer with a passion to build impressive user
          experiences
        </h1>
      </div>
      <img src="/assets/clouds.webp" className="object-cover w-full" alt="" />
    </section>
  );
}
