import Aos from "aos";
import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import ItemLinks from "../projects/ItemLinks";
import { FaGithub, FaLink } from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
export default function OpenSource() {
  useEffect(() => {
    Aos.init();
  }, []);

  function Section({
    date,
    para,
    title,
    para1,
    para2,
    para3,
    designLink,
    githubLink,
    liveLink,
  }: {
    title: string;
    para: string;
    date: string;
    para1: string;
    para2: string;
    para3: string;
    designLink: string;
    githubLink: string;
    liveLink: string;
  }) {
    return (
      <div className="space-y-4">
        <div className="flex flex-1 flex-col lg:flex-row  justify-between ">
          <div className="flex flex-1 flex-col">
            <h1 className="font-bold text-[14px]">
              <a target="_blank" href="https://www.chingu.io/">
                <span className="text-blue-500 hover:underline  duration-300">
                  {title.split(" ").slice(0, 1).join("")}
                </span>{" "}
              </a>
              {title.split(" ").slice(1).join(" ")}
            </h1>
            <h2 className="text-sm">{para}</h2>
          </div>
          <h2 className="text-sm">{date}</h2>
        </div>
        <div className="flex flex-col mt-4">
          <ItemLinks
            isOpenSource={true}
            icon={<FaGithub className="text-sm" />}
            link={githubLink}
            title="Code"
          />
          <ItemLinks
            isOpenSource={true}
            icon={<FaLink className="text-sm" />}
            link={liveLink}
            title="Live"
          />
          <ItemLinks
            isOpenSource={true}
            icon={<SiVorondesign className="text-sm" />}
            link={designLink}
            title="Design"
          />
          <ItemLinks
            isOpenSource={true}
            icon={<FaFilePdf className="text-sm" />}
            link={'chingu_cert.png'}
            title="Certification"
          />
        </div>
        <ul className="space-y-2 text-[13px] list-disc">
          <li>{para1}</li>
          <li>{para2}</li>
        </ul>
      </div>
    );
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="pb-8 flex-1 gap-x-12 flex-col lg:flex-row flex border-b my-8"
    >
      <SectionHeader text="Open Source" />
      <div className="flex flex-1 space-y-14 mt-6 lg:mt-0 flex-col">
        <Section
          liveLink="https://v47-tier2-team-10-mu.vercel.app/"
          designLink="https://excalidraw.com/#room=06825c5c05b931c64b46,RoxCHMMEJqc6bXac1fFLPA"
          githubLink="https://github.com/chingu-voyages/v47-tier2-team-10"
          title="Chingu - Voyage 47"
          date="January 2024 - February 2024"
          para="Lead Frontend Developer"
          para1={`Led a team of 4 developers during daily standup, design, and coding meetings for a 6-week intensive software development program, implementing scrum methodologies to drive effective communication and on-time project delivery.`}
          para2="Developed a user-friendly task management application using ReactJS, Tailwind CSS, and Firebase, successfully implementing all MVP requirements: creating, assigning, updating, and deleting tasks, user authentication and data parsing/visualization with category, activity, and individual task sorting"
          para3="3"
        />
      </div>
    </div>
  );
}
