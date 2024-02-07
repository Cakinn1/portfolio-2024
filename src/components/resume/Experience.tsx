import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import Aos from "aos";

export default function Experience() {
  function Section({
    date,
    para,
    title,
    para1,
    para2,
    para3,
  }: {
    title: string;
    para: string;
    date: string;
    para1: string;
    para2: string;
    para3: string;
  }) {
    return (
      <div className="space-y-4">
        <div className="flex flex-1 flex-col lg:flex-row  justify-between ">
          <div>
            <h1 className="font-bold text-[14px]">{title}</h1>
            <h2 className="text-sm">{para}</h2>
          </div>
          <h2 className="text-sm">{date}</h2>
        </div>

        <ul className="space-y-2 text-[13px] list-disc">
          <li>{para1}</li>
          <li>{para2}</li>
          <li>{para3}</li>
        </ul>
      </div>
    );
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="pb-8 flex-1 gap-x-12 flex flex-col lg:flex-row border-b my-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <SectionHeader text="Experience" />
      <div className="flex flex-1 space-y-14 mt-6 lg:mt-0 flex-col">
        <Section
          para3="Leveraged Git and pull requests to collaborate effectively with team members, ensuring seamless code integration. "
          para2="Integrated API data using Axios, implementing skeleton loading states, and dynamic routing for a seamless user experience."
          para1="Revamped a static React.js single-page application into an engaging user interface with animations, transitions, and carousels. "
          date="July 2022 – November 2022"
          para="Frontend Developer Internship"
          title="Frontend Simplified"
        />
        <Section
          para3="Integrated SEO, responsive design, multi-platform support, hosting services, ensuring websites are accessible worldwide."
          para2="Optimized website performance through compression, caching, and lazy loading of images and components."
          para1="Crafted 5 professional websites using HTML5, CSS (+ SCSS, BEM), and JavaScript best practices"
          date="February 2023 – Current"
          para="Freelance - Self Employed"
          title="Frontend Developer"
        />
        <Section
          para3="Simplified complex programming concepts, including responsive website development, CSS layout, Promises, and API requests, enhancing students understanding."
          para2="Effectively Utilized debugging best practices using Google Chrome inspect Element tooling, resolving coding issues."
          para1="Provided comprehensive support to 1,000+ students, guiding them through HTML, CSS, Flexbox, JavaScript, and React best practices."
          date="April 2022 – Current"
          para="Technical Support (Frontend)"
          title="Frontend Simplified"
        />
      </div>
    </div>
  );
}
