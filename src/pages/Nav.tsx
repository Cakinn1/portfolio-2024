import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { NavProps } from "../typings/types";
import AOS from "aos";
export default function Nav() {
  function HandleIcon({ icon, link }: NavProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <a
        data-aos="fade-down"
        data-aos-duration="1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target={
          link === "mailto:anthonycakins@gmail.com" || link === "#contact"
            ? ""
            : "_blank"
        }
        className="hover:scale-110  flex flex-col items-center  duration-300 active:scale-75"
        href={link}
      >
        <div className="text-2xl md:text-3xl">{icon}</div>
        {isHovered && link === "" && (
          <h1 className="hover-h1 duration-300 absolute -bottom-10">Blog</h1>
        )}
      </a>
    );
  }

  return (
    <nav className="flex justify-between max-w-[1280px] p-10 items-center mx-auto text-white ">
      <div className="flex gap-x-4">
        <HandleIcon
          link="https://www.linkedin.com/in/anthony-cakin/"
          icon={<FaLinkedin />}
        />
        <HandleIcon link="https://github.com/Cakinn1" icon={<FaGithub />} />
      </div>
      <div className="flex gap-x-4">
        <HandleIcon link="#contact" icon={<IoNewspaperOutline />} />
        <HandleIcon link="mailto:anthonycakins@gmail.com" icon={<IoMdMail />} />
      </div>
    </nav>
  );
}
