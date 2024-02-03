import React from "react";

import { FaXmark } from "react-icons/fa6";
interface ModalProps {
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  handleModal: () => void;
  closeMenuAnimation: boolean;
}
export default function Modal(props: ModalProps) {
  const { setIsModalOpen, isModalOpen, handleModal, closeMenuAnimation } =
    props;

  function RenderNav({ text }: { text: string }) {
    return (
      <a
        href={`#${text}`}
        onClick={() => handleModal()}
        className="border-y text-2xl w-full   hover:bg-[#f70042] flex justify-center hover:bg-opacity-30 items-center duration-300 border-y-[#f70042] border-opacity-20 py-8 font-bold "
      >
        {text.slice(0, 1).toUpperCase() + text.slice(1, text.length)}
      </a>
    );
  }

  return (
    <div
      className={`top-0 h-screen ${
        isModalOpen
          ? "menu opacity-100"
          : "menu-close opacity-0  duration-500 pointer-events-none"
      } ${
        closeMenuAnimation && "menu-close"
      } fixed left-0 bg-[#0e0a18] flex flex-1 flex-col w-[100vw] h-[100vh]`}
    >
      <FaXmark
        className="text-white hover:text-[#f70042] hover:scale-110 active:scale-90 duration-300  text-4xl  md:mt-4 md:ml-4 mt-2 ml-2"
        onClick={() => handleModal()}
      />
      <div className="text-white flex justify-center items-center flex-col flex-1 ">
        <RenderNav text="about" />
        <RenderNav text="skills" />
        <RenderNav text="projects" />
        <RenderNav text="resume" />
        <RenderNav text="contact" />
      </div>
    </div>
  );
}
