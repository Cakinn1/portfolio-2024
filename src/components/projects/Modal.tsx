import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
interface ModalProps {
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  vercel: string;
  github: string;
  Application: string;
  info?: {
    title?: string;
    mainPara?: string;
  };
  onClickImage?: string;
}
export default function Modal(props: ModalProps) {
  const {
    setIsModalOpen,
    isModalOpen,
    github,
    vercel,
    Application,
    info,
    onClickImage,
  } = props;


  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }

    return () => {
      document.body.classList.remove("scroll");
    };
  }, [isModalOpen]);

  return (
    <div className="fixed top-0 left-0 py-10  px-16 z-50 bg-white h-full w-full">
      <FaXmark
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="text-3xl hover:rotate-180 ml-auto cursor-pointer active:scale-90 hover:scale-110 duration-300"
      />
      <div className="flex flex-1 flex-col ">
        <img  src={onClickImage} className="max-w-[1000px] mx-auto" alt="" />
        <div>
          <div className="max-w-[800px] mx-auto p-8 pt-0">
            <div className="flex justify-center space-y-3 items-center flex-col">
              <h1 className="text-4xl">{Application}</h1>
              <h2>
                {Application === "Busy Bee"
                  ? "Web App (twitter re-design)"
                  : "Web App"}
              </h2>
              <p className="text-center">{info?.mainPara}</p>

              <div className="flex gap-x-4">
                <a
                  href={vercel}
                  className="underline hover:text-gray-400 ease-in-out duration-300 text-2xl flex items-center"
                  target="_blank"
                >
                  <p>View Online</p>
                  <BsArrowRight />
                </a>
                <a
                  href={github}
                  className="underline hover:text-gray-400 duration-300 text-2xl flex items-center"
                  target="_blank"
                >
                  <p>View Github</p>
                  <BsArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
