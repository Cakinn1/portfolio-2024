import React, { useEffect, useState } from "react";
import { ProjectProps } from "../lib/types";
import { FaGithub, FaLink } from "react-icons/fa";
import AOS from "aos";
import { Link } from "react-router-dom";
import Modal from "./projects/Modal";
export default function Project({
  github,
  image,
  info,
  vercel,
  Application,
  id,
  isFalse,
  onClickImage,
}: ProjectProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleOnLoad() {
    setImageLoaded(true);
  }
  return (
    <>
      <section
        data-aos="flip-left"
        data-aos-duration="1000"
        className=" mx-auto "
      >
        <div
          className="group   mb-10 relative"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <div className="bg-black rounded-md cursor-pointer h-0 duration-500 group-hover:h-full flex items-center justify-between px-3 top-0 absolute w-full text-white ">
            <h1 className="text-3xl hidden mx-auto  duration-300 hover:text-[#f70042] group-hover:flex ">
              {Application}
            </h1>
          </div>
          <img
            src={image}
            onLoad={handleOnLoad}
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={`h-[500px] cursor-pointer  group-hover:object-bottom/ ease-linear  transition-all object-cover
           ${
             imageLoaded ? "" : "bg-gray-300 animate-pulse"
           } object-top md:w-[330px] lg:w-[380px]   w-[400px]`}
            alt=""
          />
        </div>
      </section>
      {isModalOpen && (
        <Modal
          onClickImage={onClickImage}
          info={info}
          Application={Application}
          vercel={vercel}
          github={github}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
