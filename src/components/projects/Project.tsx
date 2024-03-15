import React, { ReactElement, useEffect, useState } from "react";
import { ProjectProps } from "../../lib/types";
import Aos from "aos";
import { FaGithub, FaLink } from "react-icons/fa";
import Languages from "./Languages";
import ItemLinks from "./ItemLinks";
import { FaExternalLinkAlt } from "react-icons/fa";
interface ProjectData extends ProjectProps {
  lastIndex: number;
  isNextflixOpened: boolean;
  setIsNextflixOpened: (value: boolean) => void;
}

export default function Project(props: ProjectData) {
  const {
    Application,
    github,
    id,
    image,
    vercel,
    info,
    lastIndex,
    languages,
    isNextflixOpened,
    setIsNextflixOpened,
    projectType,
  } = props;
  const iconStyle = "duration-200 hover:scale-110 active:scale-90";

  useEffect(() => {
    Aos.init();
  }, []);


  console.log([...Array(12).fill(0)])

  const LeftImage = () => {
    return (
      <a
        href={vercel}
        target="_blank"
        className="w-full md:w-[60%] cursor-none  group bg-opacity-35 mb-14 rounded-md md:rounded-3xl shadow-md  relative"
      >
        <img
          src={image}
          className={`lg:w-full cursor-none object-top  h-[500px] md:h-[340px]  project__shadow duration-200 rounded-md md:rounded-3xl object-cover`}
          alt=""
        />
        <div className="absolute space-y-4 bg-gray-400 w-full top-0 h-full rounded-md md:hidden p-8 bg-opacity-80">
          <div className="">
            <h1 className="font-bold text-[16px] text-[#4b5563] ">
              {projectType}
            </h1>
            <h2 className="font-extrabold text-[22px]">{Application}</h2>
          </div>
          <div className="flex text-sm gap-x-3 justify-end">
            {languages?.map((language) => {
              return <h1>{language}</h1>;
            })}
          </div>

          <div>
            {[...Array(12).map((item) => <div>d</div>)]}
            {[...Array(12).map((item) => (<div>nice</div>))]}
            {new Array(12).fill(0).map((_) => (<div>cool</div>))}
          </div>
          {/* 

          <div className="flex justify-end gap-x-4 text-[20px]">
            <a target="_blank" href={github}>
              <FaGithub className={iconStyle} />
            </a>
            <a target="_blank" href={vercel}>
              <FaExternalLinkAlt className={iconStyle} />
            </a>
          </div> */}
        </div>
        {/* <div className="absolute rounded-3xl top-0  group-hover:opacity-0 duration-300 h-full bg-green-500 opacity-35"></div> */}
      </a>
    );
  };

  const RightImage = () => {
    return (
      <div className="absolute top-[40px] justify-center hidden md:flex right-0 flex-col space-y-4  flex-1 ">
        <div className="flex items-end flex-col">
          <h1 className="font-bold text-[16px] text-[#4b5563]  text-center md:text-left">
            {projectType}
          </h1>
          <h2 className="font-extrabold text-[22px]">{Application}</h2>
        </div>

        <div className="bg-[#f5f5f5]  shadow-md flex justify-center items-center text-center p-4 w-[500px] rounded-md">
          <h1>{info?.mainPara}</h1>
        </div>

        <div className="flex text-sm gap-x-3 justify-end">
          {languages?.map((language) => {
            return <h1>{language}</h1>;
          })}
        </div>

        <div className="flex justify-end gap-x-4 text-[20px]">
          <a target="_blank" href={github}>
            <FaGithub className={iconStyle} />
          </a>
          <a target="_blank" href={vercel}>
            <FaExternalLinkAlt className={iconStyle} />
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative  cursor-none flex group px-8 py-0 w-full md:p-0"
      >
        <LeftImage />
        <RightImage />
      </div>
    </>
  );
}
