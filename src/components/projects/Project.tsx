import React, { ReactElement, useEffect, useState } from "react";
import { ProjectProps } from "../../lib/types";
import Aos from "aos";
import { FaGithub, FaLink } from "react-icons/fa";
import Languages from "./Languages";

const ItemLinks = (props: {
  link: string;
  icon: ReactElement;
  title: string;
  isNextflix?: boolean;
  setIsNextflixOpened?: (value: boolean) => void;
  isNextflixOpened?: boolean;
}) => {
  const {
    icon,
    link,
    title,
    isNextflix,
    setIsNextflixOpened,
    isNextflixOpened,
  } = props;
  return (
    <>
      {isNextflix ? (
        <div
          onClick={() =>
            setIsNextflixOpened && setIsNextflixOpened(!isNextflixOpened)
          }
          className="flex text-[#] items-center gap-x-3 w-fit hover:scale-110 active:scale-90 duration-300"
        >
          {icon}
          <h1>{title}</h1>
        </div>
      ) : (
        <a
          className="flex text-[#] items-center gap-x-3 w-fit hover:scale-110 active:scale-90 duration-300"
          href={link}
          target="_blank"
        >
          {icon}
          <h1>{title}</h1>
        </a>
      )}
    </>
  );
};

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
  } = props;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="relative group px-8 py-0 w-full lg:w-[47%] font-mono md:p-0"
    >
      <img
        src={image}
        className={`h-[400px] w-full object-top project__shadow duration-200 rounded-3xl md:active:scale-95 md:hover:scale-105  ${
          id > 1 ? "" : "mb-10"
        } object-cover mb-10 `}
        alt=""
      />
      <div className="absolute group-hover:opacity-100 rounded-3xl opacity-0 backdrop-blur-sm    duration-300 h-0  group-hover:h-full w-full left-[50%] pb-10  -translate-x-1/2  bottom-0">
        <div
          className={`mx-8 h-full mb-8 ${
            id === lastIndex ? "text-white" : "text-black"
          } flex opacity-100 z-10 justify-center  flex-col space-y-4 rounded-3xl pb-10 p-8`}
        >
          <h1 className="font-bold">{Application + " - " + info?.title}</h1>
          <div className="flex gap-x-4">
            {languages?.map((language) => (
              <Languages logoUrl={language} key={language} />
              ))}
          </div>
          <div className="text-sm md:text-14px">{info?.mainPara}</div>
          <div className="space-y-2">
            <ItemLinks
              icon={<FaGithub className="text-lg" />}
              link={github}
              title="Code"
            />
            <ItemLinks
              isNextflix={info?.title === "Netflix Clone"}
              icon={<FaLink className="text-lg" />}
              link={vercel}
              setIsNextflixOpened={setIsNextflixOpened}
              title="Live link"
              isNextflixOpened={isNextflixOpened}
              />
          </div>
        </div>
      </div>
    </div>
    
              </>
  );
}
