import React, { useEffect } from "react";
import Project from "../components/Project";
import { projectData } from "../lib/contants";
import AOS from "aos";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="project"
      className="bg-[#f8f8f8] flex justify-center items-center text-black min-h-screen px-5"
    >
      <div className="max-w-[1280px] mx-auto md:p-10">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-center items-center uppercase text-[#4b5563] md:tracking-[15px] tracking-[10px]  text-[30px] "
        >
          Projects
        </h1>

        <div className="py-[40px] mx-auto flex flex-wrap gap-x-4">
          {projectData.map((data, i) => (
            <Project
              id={data.id}
              Application={data.Application}
              github={data.github}
              image={data.image}
              info={data.info}
              vercel={data.vercel}
              key={i}
            />
          ))}
        </div>
        <Link
          to="/extra"
          data-aos="fade-right"
          data-aos-duration="500"
          className="uppercase flex justify-center xl:justify-normal group text-center md:text-left  items-center gap-x-2 text-[#4b5563] tracking-[15px]  text-[30px] "
        >
          <h1 className="border-b cursor-pointer group-hover:border-black border-[#f8f8f8] duration-500 pb-2 md:tracking-[15px] tracking-[10px]  text-[30px]">
            Extra Projects
          </h1>
          <FaArrowRight className="mb-2 hidden md:flex" />
        </Link>
      </div>
    </section>
  );
}
