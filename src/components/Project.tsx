import React, { useEffect } from "react";
import { ProjectProps } from "../typings/types";
import { FaGithub, FaLink } from "react-icons/fa";
import AOS from 'aos';
export default function Project({
  github,
  image,
  info,
  vercel,
  Application,
}: ProjectProps) {

  useEffect(() => {
  AOS.init()
  }, [])
  return (
    <section 
    data-aos="flip-left"
    data-aos-duration="1000"
    className=" mx-auto ">
      
      <div className="group cursor-pointer mb-10 relative">
        <img
          src={image}
          className={`h-[500px] group-hover:object-bottom ease-linear  transition-all ${info.title === 'Busy Bee' ? "duration-[4000ms]" : "duration-1000"}  object-cover object-top md:w-[330px] lg:w-[380px]   w-[400px]`}
          alt=""
        />
        <div className="bg-[#1b1b1b] group-hover:h-14 h-0 duration-300  flex items-center justify-between px-3 absolute bottom-0 w-full text-white ">
          <h1 className="font-bold hidden group-hover:flex ">{Application}</h1>
          <div className=" hidden group-hover:flex items-center gap-x-4">
            <a href={github} target="_blank">
              <FaGithub className="text-lg hover:scale-110 duration-300 active:scale-90" />
            </a>
            <a href={vercel} target="_blank">
              <FaLink className="text-lg hover:scale-110 duration-300 active:scale-90" />
            </a>
          </div>
        </div>
        {/* maybe add project info here? looks bad on lowerbreak point so maybe have, it hidden on lowerbp? */}
        {/* <div className="absolute z-50 group-hover:opacity-100 space-y-2 opacity-0 text-black bg-gray-400 p-4 rounded-2xl duration-1000  -bottom-[230px] shadow-2xl  w-[400px] min-h-[200px]">
          <h1 className="font-bold text-black">{info.title}</h1>
          <p>{info.mainPara}</p>
        </div> */}
      </div>
    </section>
  );
}
