import Aos from "aos";
import React, { useEffect } from "react";
import HeaderSecton from "../components/resume/HeaderSecton";
import Eduation from "../components/resume/Eduation";
import ProjectSection from "../components/resume/ProjectSection";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import OpenSource from "../components/resume/OpenSource";

export default function Resume() {
  // useEffect(() => {
  //   window.scroll({ top: 0 });
  //   Aos.init();
  // }, []);

  return (
    <section id="resume" className="bg-white font-mono  mx-auto lg:p-5 flex">
      <div className="lg:p-5 mx-auto max-w-[960px] space-y-12 w-full ">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center pt-10 items-center uppercase text-[#4b5563] md:tracking-[15px] tracking-[10px]  text-[30px] "
        >
          Resume
        </h1>
        <div className="shadow-md rounded-lg flex-col p-8">
          <HeaderSecton />
          <Eduation />
          <OpenSource />
          <Experience />
          <Skills
            n1="JavaScript"
            n2="React"
            n3="HTML"
            n4="CSS"
            n5="TailwindCss"
            title="Technical"
            n6="TypeScript"
            n7="Next.js"
            n8="Redux"
            n9="Redux-toolkit"
            n10="Firebase"
            isTrue={true}
          />
          <Skills
            isTrue={false}
            n1="Quick learner"
            n2="Confident leadership skills"
            n3="Outstanding work ethic"
            n4="Problem solver"
            n5="Exceptional communication skills"
            title="Soft Skills"
            n6="Effective teaching skills"
            n7="Exceptional time management skills"
          />
        </div>
      </div>
    </section>
  );
}
