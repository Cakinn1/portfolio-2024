import { ImageArrayProps, ProjectLinks, ProjectProps, Stack } from "./types";
import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiMongoose,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import { SiDjango } from "react-icons/si";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
/* 


Loading animation clouds


*/

export const imageArray: ImageArrayProps[] = [
  { width: "46px", bottomSize: "6", otherSize: "" },
  { width: "56px", bottomSize: "6", otherSize: "" },
  { width: "46px", bottomSize: "6", otherSize: "right-0" },
  { width: "56px", bottomSize: "6", otherSize: "right-0" },
  { width: "46px", bottomSize: "6", otherSize: "-right-[40px]" },
  { width: "56px", bottomSize: "6", otherSize: "-right-[40px]" },
  { width: "46px", bottomSize: "6", otherSize: "-left-[40px]" },
  { width: "56px", bottomSize: "6", otherSize: "-left-[40px]" },
  { width: "46px", bottomSize: "12", otherSize: "-left-[20px]" },
  { width: "56px", bottomSize: "12", otherSize: "-left-[20px]" },
  { width: "46px", bottomSize: "12", otherSize: "-right-[20px]" },
  { width: "56px", bottomSize: "12", otherSize: "-right-[20px]" },
  { width: "46px", bottomSize: "16", otherSize: "left-[24px]" },
  { width: "56px", bottomSize: "16", otherSize: "left-[24px]" },
];

/* 


Landing Page Project Links


*/

export const projectLinksArray: ProjectLinks[] = [
  {
    link: "about",
    value: "about",
  },
  {
    link: "skills",
    value: "skills",
  },
  {
    link: "projects",
    value: "projects",
  },
  {
    link: "https://docs.google.com/document/d/1IQXaoh5fmVeK0vIEM0W1Z2DqRLPROmcb/edit",
    value: "resume",
  },
];

/* 


Tech Stack


*/
interface TechStack {
  icon: React.ReactElement;
  color: string;
  text: string;
}

export const currentStack: TechStack[] = [
  {
    icon: (
      <SiHtml5
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "HTML",
    color: "rgb(240, 101, 41)",
  },
  {
    icon: (
      <SiCss3
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "CSS",
    color: "rgb(41, 101, 241)",
  },
  {
    icon: (
      <SiJavascript
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "JavaScript",
    color: "rgb(245, 222, 25)",
  },
  {
    icon: (
      <SiTypescript
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "TypeScript",
    color: "rgb(45, 121, 199)",
  },
  {
    icon: (
      <FaReact
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "React.js",
    color: "rgb(124, 197, 217)",
  },
  {
    icon: (
      <SiTailwindcss
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "TailwindCss",
    color: "rgb(124, 197, 217)",
  },
  {
    icon: (
      <SiRedux
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "Redux / Redux-Toolkit",
    color: "rgb(118,74,188)",
  },
  {
    icon: (
      <SiFirebase
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "Firebase",
    color: "rgb(246,130,13)",
  },
  {
    icon: (
      <SiNextdotjs
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "NextJs",
    color: "rgb(0, 0, 0)",
  },
];

export const currentlyLearning: TechStack[] = [
  {
    icon: (
      <SiMongodb
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "MongoDB",
    color: "#3F3E42",
  },

  {
    icon: (
      <SiDjango
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "Django",
    color: "#3F3E42",
  },
  {
    icon: (
      <FaPython
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "Python",
    color: "#3F3E42",
  },
  {
    icon: (
      <SiNodedotjs
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "Node.js",
    color: "#68A063",
  },
  {
    icon: (
      <SiExpress
        className={`w-[100px]  hover:scale-90    duration-300 h-[100px] object-contain`}
      />
    ),
    text: "Express.js",
    color: "#68A063",
  },
];

/* 


Main Projects


*/

export const projectData: ProjectProps[] = [
  {
    id: 0,
    github: "https://github.com/Cakinn1/Anthony-internship",
    vercel: "https://anthony-internship.vercel.app/",
    image: "ultraverse.png",
    info: {
      title: "Ultraverse",
      mainPara:
        "Ultraverse is my internship project built with React.js, Tailwind & Axios. During this internship i learnt how to create detail pull request, read documentation and explain why i programmed a feature.",
    },
    languages: ["React.js", "TailwindCss"],
    video: "/assets/images/ultraverse.mp4",
    skillsAndDeliverables: [
      "React.js",
      "Tailwind",
      "Axios",
      "Custom Api",
      "Skeleton Loading",
      "Vercel",
      "Pull Request",
      "Responsive Design",
      "Version Control",
    ],
    Application: "NFT Marketplace Internship",
    onClickImage: "/assets/nft.png",
  },
  {
    id: 1,
    languages: ["Next.js", "TailwindCss", "Redux-Toolkit", "Firebase"],

    github: "https://github.com/Cakinn1/Busy-Bee",
    vercel: "https://busy-bee-opal.vercel.app/",
    image: "/busy__bee.png",
    info: {
      mainPara:
        "Busy Bee is a social media web application I built to practise Next.js, Tailwind, Redux and Firebase. Features include CRUD functionality, posts, user authentication, likes, comments and server-side rendering",
      title: "Busy Bee",
    },
    Application: "Social Media App",
    video: "/assets/images/busybee.mp4",
    skillsAndDeliverables: [
      "Next.js",
      "Redux",
      "Tailwind",
      "Firebase",
      "Vercel",
      "Dark Mode",
      "Light Mode",
      "Responsive Design",
      "Authentication",
      "CRUD functionality",
      "Version Control",
    ],
  },

  {
    id: 2,

    github: "https://github.com/Cakinn1/Ecom-App-lib",
    vercel: "https://ecom-app-lib.vercel.app/",
    image: "/library.png",
    languages: ["React.js"],
    info: {
      mainPara:
        "Library is a E-commerece site i developed to further knowledge on React.js & UI/UX Deisgn. The site features stunning and responsive UI, skeleton loading states & cart functionalities.",
      title: "Library",
    },
    Application: "E-Commerece Store",
    video: "/assets/images/lib.mp4",
    skillsAndDeliverables: [
      "Next.js",
      "Redux",
      "Tailwind",
      "Firebase",
      "Vercel",
      "Dark Mode",
      "Light Mode",
      "Responsive Design",
      "Authentication",
      "CRUD functionality",
      "Version Control",
    ],
  },
  {
    id: 3,
    github: "https://github.com/Cakinn1/netflix-clone",
    vercel: "https://netflix-clone-clone.vercel.app/login",
    image: "/netflix.png",
    info: {
      mainPara:
        "In this project, I aimed to replicate the renowned Netflix application using Next.js and TypeScript, showcasing my proficiency in front-end development. The Netflix Clone serves as a testament to my dedication to mastering UI replication and enhancing my skills in web development.",
      title: "Netflix Clone",
    },
    Application: "Movie Browsing App",
    languages: ["TailwindCss", "Next.js", "TypeScript", "Firebase"],
    video: "/assets/images/lib.mp4",
    skillsAndDeliverables: [
      "Next.js",
      "Redux",
      "Tailwind",
      "Firebase",
      "Vercel",
      "Dark Mode",
      "Light Mode",
      "Responsive Design",
      "Authentication",
      "CRUD functionality",
      "Version Control",
    ],
  },
];

/* 


Extra Projects


*/

export const extraProjectData: ProjectProps[] = [
  {
    id: 3,

    github: "https://github.com/Cakinn1/netflix-clone",
    vercel: "https://netflix-clone-clone.vercel.app/login",
    image: "/assets/extra-projects/netflix.png",
    info: {
      title: "Netflix",
      mainPara:
        "About A Car booking website. I created this app to improve my TypeScript skills & Redux skills",
    },
    Application: "Movie Site",
    isFalse: true,
  },
  {
    id: 4,

    github: "https://github.com/Cakinn1/google-clone",
    vercel: "https://google-clone-cakinn1.vercel.app/",
    image: "/assets/extra-projects/google.png",
    info: {
      title: "Google Clone",
      mainPara:
        "About A Car booking website. I created this app to improve my TypeScript skills & Redux skills",
    },
    Application: "Search Engine Site",
    isFalse: true,
  },
  {
    id: 5,

    github: "https://github.com/Cakinn1/Eportfolio-2023",
    vercel: "https://eportfolio-2023.vercel.app/",
    image: "/assets/extra-projects/port.png",
    info: {
      title: "Old Portfolio",
      mainPara:
        "About A Car booking website. I created this app to improve my TypeScript skills & Redux skills",
    },
    Application: "2023 Portfolio",
    isFalse: true,
  },
  {
    id: 6,

    github: "https://github.com/Cakinn1/carRental-app",
    vercel: "https://car-rental-app-mu.vercel.app/",
    image: "/assets/extra-projects/car.png",
    info: {
      title: "Car Rental",
      mainPara:
        "About A Car booking website. I created this app to improve my TypeScript skills & Redux skills",
    },
    Application: "Car Booking Site",
    isFalse: true,
  },
  // {
  //   github: "https://github.com/Cakinn1/Chrono",
  //   vercel: "https://chrono-pi.vercel.app/",
  //   image: "/assets/extra-projects/ultra.png",
  //   info: {
  //     title: "Chrono",
  //     mainPara:
  //       "About A Car booking website. I created this app to improve my TypeScript skills & Redux skills",
  //   },
  //   Application: "E-Commerece Site",
  // },
  {
    id: 7,

    github: "https://github.com/Cakinn1/Ecom-website-Anthony",
    vercel: "https://ecom-website-theta.vercel.app/",
    image: "/assets/extra-projects/ecom.png",
    info: {
      title: "Deco",
      mainPara:
        "About A Car booking website. I created this app to improve my TypeScript skills & Redux skills",
    },
    Application: "E-Commerce Site",
    isFalse: true,
  },
  {
    id: 8,

    github: "https://github.com/Cakinn1/2022-eportfolio",
    vercel: "https://eportfolio-five.vercel.app/",
    image: "/assets/extra-projects/2022port.png",
    info: {
      title: "Deco",
      mainPara:
        "About A Car booking website. I created this app to improve my TypeScript skills & Redux skills",
    },
    Application: "2022 Portfolio",
    isFalse: true,
  },
];

/* 


Resume


*/
