import React from "react";

export default function TechStack() {
  const iconImages: string[] = [
    "html.webp",
    "CSS.webp",
    "js.webp",
    "typescript.webp",
    "tailwindcss.webp",
    "redux.webp",
    "react.webp",
    "nextjs.webp",
    "firebase.webp",
  ];

  function HandleTechStack({ image }: { image: string }) {
    return (
      <div className="w-[16%] h-[160px]  flex justify-center items-center">
        <img
          className="w-[100px] h-[100px] object-contain"
          src={`/assets/icons/${image}`}
          alt=""
        />
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen pt-[260px]">
      <div className="max-w-[1280px] mx-auto px-5">
        <h1 className="flex text-[#4b5563] tracking-[15px]  text-[30px] justify-center items-center">
          TECH <span>-</span> STACK
        </h1>
        <div className="p-10 py-[80px]">
          <div className="flex flex-wrap justify-center">
            {iconImages.map((icon) => (
              <HandleTechStack key={icon} image={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
