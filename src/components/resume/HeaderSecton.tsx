import React, { ReactElement, useEffect } from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Aos from "aos";

export default function HeaderSecton() {
  useEffect(() => {
    Aos.init();
  }, []);
  function RenderInfo({
    icon,
    text,
    link,
  }: {
    icon: ReactElement;
    text: string;
    link: string;
  }) {
    return (
      <a
        target={`${text === "Email" && ""}${text === "LinkedIn" && "_blank"} `}
        href={link}
        className="mr-[120px] gap-x-2 lg:gap-x-1 flex items-center"
      >
        {icon}
        <h1 className="cursor-pointer">{text}</h1>
      </a>
    );
  }
  return (
    <div
      className="flex flex-1 lg:flex-row flex-col gap-x-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <figure className="mb-4 lg:mb-0">
        <img
          className="w-[166px] object-cover h-[166px] rounded-full"
          src="/assets/landing_picture.png"
          alt=""
        />
      </figure>
      <div className="flex flex-1 flex-col space-y-2">
        <div>
          <h1 className="font-bold text-3xl">Anthony Cakin</h1>
          <h2 className="text-lg">Software Engineer</h2>
        </div>
        <div className="flex justify-between flex-col lg:flex-row lg:items-center">
          <RenderInfo
            link="https://docs.google.com/document/d/1IQXaoh5fmVeK0vIEM0W1Z2DqRLPROmcb/edit"
            text="View Resume"
            icon={<PiDownloadSimpleBold className="cursor-pointer" />}
          />
          <RenderInfo
            link="mailto:anthonycakin64@gmail.com"
            text="Email"
            icon={<MdEmail />}
          />
          <RenderInfo
            link="https://www.linkedin.com/in/anthony-cakin/"
            text="LinkedIn"
            icon={<FaLinkedin />}
          />
        </div>
        <p className="text-[13px]">
          A highly motivated software engineer prepared to utilise exceptional
          software, problem-solving and communication skills to further my
          programming passion as a web developer.
        </p>
      </div>
    </div>
  );
}
