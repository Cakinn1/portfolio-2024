import React from "react";

export default function Menu() {
  const RenderMenuItems = ({ text }: { text: string }) => {
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  };
  return (
    <div className="fixed flex justify-center items-center w-full top-4 z-10">
      <div className=" shadow__nav bg-white bg-opacity-40  rounded-3xl backdrop-blur-md text-black  flex p-2  items-center">
        {/* <h1 className="bg-[#f70042] rounded-full p-2 px-4 text-white">A</h1> */}
        <div className="flex flex-1 justify-between w-[500px]  items-center">
          <h1>a</h1>
          <RenderMenuItems text="About Me" />
          <RenderMenuItems text="Portfolio " />
          <RenderMenuItems text="Skills" />
          <RenderMenuItems text="Resume" />
          <button className="bg-[#f70042] text-white px-4 py-2 rounded-full">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
