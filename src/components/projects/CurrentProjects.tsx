import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { projectData } from "../../lib/contants";
import Project from "./Project";
import Aos from "aos";
import { FaXmark } from "react-icons/fa6";

export default function CurrentProjects() {
  const [isNextflixOpened, setIsNextflixOpened] = useState<boolean>(false);
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (isNextflixOpened) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }, [isNextflixOpened]);
  return (
    <section id="projects" className="bg-[#f8f8f8] pb-10 min-h-screen ">
      <div className="max-w-[1400px] space-y-20 mx-auto md:p-10">
        <h1
          data-aos="fade-down"
          data-aos-duration="400"
          className="flex text-[#4b5563] pt-10 md:tracking-[15px] tracking-[10px]  text-[30px] justify-center items-center"
        >
          Projects
        </h1>

        <div className="flex gap-x-10 flex-wrap justify-center">
          {projectData.map((data) => (
            <Project
              {...data}
              isNextflixOpened={isNextflixOpened}
              setIsNextflixOpened={setIsNextflixOpened}
              lastIndex={projectData.length - 1}
            />
          ))}
        </div>
        <div data-aos="fade-up" data-aos-duration="400">
          <a href="https://github.com/Cakinn1?tab=repositories" target="_blank" className="flex text-blue-500 hover:scale-105 active:scale-90 duration-300  md:tracking-[15px] tracking-[10px]  text-[30px] justify-center items-center">
            Show More
          </a>
        </div>
      </div>
      {isNextflixOpened && (
        <div className="fixed top-1/2 w-full h-full flex flex-1 flex-col justify-center items-center bg-black bg-opacity-40 z-3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="bg-white rounded-2xl space-y-4 w-[400px] p-6">
            <div className="flex items-center text-2xl justify-between">
              <h1 className="font-bold ">Netflix Clone</h1>
              <FaXmark
                onClick={() => setIsNextflixOpened(false)}
                className="font-bold hover:text-[#f70042] duration-300 hover:scale-110 active:scale-90 "
              />
            </div>
            <p className="pb-4">
              <span className="text-red-500">
                Heads Up! Potential Error When Loading
              </span>
              <br />
              <br />
              <span>
                This project might trigger a browser security warning due to its
                repository name. Rest assured, the project itself is completely
                safe and functional. It's simply a clone of the popular Netflix
                platform.
              </span>
              <br />
              <br />
              <span>
                If you encounter an error message, just follow these steps:
                <br />
                <br />
                <span className="text">1.Click on "Details".</span>
                <br />
                <span>2.Click on "this unsafe site".</span>
              </span>
            </p>

            <a
              href="https://netflix-clone-clone.vercel.app/login"
              target="_blank"
            >
              <button className="bg-[#f70042] hover:scale-110 duration-300 active:scale-90 cursor-none text-white py-2 px-4 rounded-md">
                To the site
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
