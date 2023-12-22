import {
  ImageArrayProps,
  ProjectLinks,
  ProjectProps,
  Stack,
} from "../typings/types";

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
    link: "project",
    value: "projects",
  },
  {
    link: "https://docs.google.com/document/d/1nr0BbmL9dMnSc6VOzTUdeh5AxknSbB8c/edit?pli=1",
    value: "resume",
  },
];

export const currentStack: Stack[] = [
  {
    "html.webp": "HTML",
  },
  {
    "CSS.webp": "CSS",
  },
  {
    "js.webp": "JavaScript",
  },
  {
    "typescript.webp": "TypeScript",
  },
  {
    "tailwindcss.webp": "Tailwind CSS",
  },
  {
    "redux.webp": "Redux | Redux-toolkit",
  },
  {
    "react.webp": "React.js",
  },
  {
    "nextjs.webp": "Next.js",
  },
  {
    "firebase.webp": "Firebase",
  },
];

export const currentlyLearning: Stack[] = [
  {
    "node.png": "Node.js",
  },
  {
    "python.png": "Python",
  },
  {
    "django.png": "Django",
  },
];

export const projectData: ProjectProps[] = [
  {
    github: "https://github.com/Cakinn1/Anthony-internship",
    vercel: "https://anthony-internship.vercel.app/",
    image: "/assets/project-images/ultra.png",
    info: {
      title: "Ultraverse",
      mainPara:
        "Ultraverse is my internship project built with React.js, tailwind & axios. During this internship i learnt how to create detail pull request, read documentation and explain why i programmed a feature.",
    },
    Application: "NFT Marketplace",
  },
  {
    github: "https://github.com/Cakinn1/Ecom-App-lib",
    vercel: "https://ecom-app-lib.vercel.app/",
    image: "/assets/project-images/lib.png",
    info: {
      mainPara:
        "Library is a E-commerece site i developed to further knowledge on React.js & UI/UX Deisgn. The site features stunning and responsive UI, skeleton loading states & cart functionalities.",
      title: "Library",
    },
    Application: "E-Commerece Site",
  },
  {
    github: "https://github.com/Cakinn1/Busy-Bee",
    vercel: "https://busy-bee-opal.vercel.app/",
    image: "/assets/project-images/lib.png",
    info: {
      mainPara:
        "Busy Bee is a social media web application I built to practise Next.js, Tailwind, Redux and Firebase. Features include CRUD functionality, posts, user authentication, likes, comments and server-side rendering",
      title: "Busy Bee",
    },
    Application: "Social Media Site",
  },
];
