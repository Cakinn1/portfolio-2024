import React, { useEffect } from "react";
import Project from "../components/Project";
import { projectData } from "../contants/contants";
import AOS from "aos";
export default function Projects() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section
      id="project"
      className="bg-[#f8f8f8] flex justify-center items-center text-black min-h-screen px-5"
    >
      <div className="max-w-[1280px] mx-auto p-10">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-center items-center uppercase text-[#4b5563] tracking-[15px]  text-[30px] "
        >
          Projects
        </h1>

        <div className="py-[40px] mx-auto flex flex-wrap gap-x-4">
          {projectData.map((data, i) => (
            <Project
              Application={data.Application}
              github={data.github}
              image={data.image}
              info={data.info}
              vercel={data.vercel}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}