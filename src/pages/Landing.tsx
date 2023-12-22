import React, { useEffect } from "react";
import TypeWriter from "typewriter-effect";
import { ProjectLinks } from "../typings/types";
import { projectLinksArray } from "../contants/contants";
import Aos from "aos";
export default function Landing() {
  useEffect(() => {
    Aos.init();
  }, []);
  function ProjectLinks({ value, link }: ProjectLinks) {
    return (
      <a
        href={`${value === "resume" ? `${link}` : `#${link}`}`}
        target={`${value === "resume" ? "_blank" : ""}`}
        className="border hover:text-[#ffa76066] cursor-pointer duration-300 hover:border-[#ffa76066] rounded-full text-[#6b7280] text-[12px] tracking-wider border-opacity-40 border-[#6b7280] px-6 py-2 uppercase"
      >
        {value}
      </a>
    );
  }

  return (
    <section
      style={{ height: "calc(100vh - 110px)" }}
      className="text-white text-center mx-auto max-w-[1280px] p-10 w-full flex justify-center items-center"
    >
      <div className="space-y-8 mb-[90px] w-[800px/] mx-auto">
        <figure className="flex justify-center items-center">
          <img
            src="/assets/landing_picture.png"
            className="rounded-full object-right-top object-cover h-[160px] w-[160px]"
            alt=""
          />
        </figure>
        <div data-aos="fade-down" data-aos-duration="1000" className="">
          <h1 className="text-[#6b7280] text-sm md:text-[16px] pb-2 tracking-[15px]  uppercase">
            Software Engineer
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold">
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(" ")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Hi, I'm Anthony Cakin")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("A Passionate Frontend Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("A Problem Solver")
                  .start();
              }}
            />
          </h1>
          <div className="pt-5  flex justify-center gap-x-4 items-center">
            {projectLinksArray.map((link) => {
              return (
                <ProjectLinks
                  link={link.link}
                  key={link.link}
                  value={link.value}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
