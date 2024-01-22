import React, { useEffect, useState } from "react";
import { currentStack, currentlyLearning } from "../lib/contants";
import AOS from "aos";
import "aos/dist/aos.css";
export default function TechStack() {
  useEffect(() => {
    AOS.init();
  }, []);
  function HandleTechStack({ image, value }: { image: string; value: string }) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[22%] md:w-[23%] lg:w-[17%]  space-y-6 h-[180px] md:h-[160px] flex-col  flex justify-center items-center"
      >
        <img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[100px] hover:scale-90   cursor-pointer duration-300 h-[100px] object-contain"
          src={`/assets/icons/${image}`}
          alt=""
        />
        <h1
          className={`text-orange-500 text-center font-semibold  duration-300 transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {value}
        </h1>
      </div>
    );
  }

  return (
    <section
      id="skills"
      className="bg-white min-h-screen pt-[260px]/ pt-[100px]"
    >
      <div className="max-w-[1280px] mx-auto md:px-5">
        <h1
          data-aos="fade-down"
          data-aos-duration="400"
          className="flex text-[#4b5563] md:tracking-[15px] tracking-[10px]  text-[30px] justify-center items-center"
        >
          TECH <span>-</span> STACK
        </h1>
        <div className="p-10 pt-[80px] pb-[40px]">
          <div className="flex flex-wrap gap-x-6 md:gap-x-0 justify-center">
            {currentStack.map((icon) => (
              <HandleTechStack
                value={Object.values(icon)[0]}
                image={Object.keys(icon)[0]}
                key={Object.values(icon)[0]}
              />
            ))}
          </div>
        </div>
        <div>
          <h1
            data-aos="fade-down"
            data-aos-duration="400"
            className="md:flex uppercase hidden text-[#4b5563] tracking-[15px]    text-[30px] justify-center items-center"
          >
            Currently <span>-</span>
            <span>Learning</span>
          </h1>

          <h1
            data-aos="fade-down"
            data-aos-duration="400"
            className="flex uppercase md:hidden text-[#4b5563] md:tracking-[15px] tracking-[10px]  text-[30px] justify-center items-center"
          >
            <span>Learning</span>
          </h1>

          <div className="p-10 pt-[80px] pb-[40px]">
            <div className="flex flex-wrap gap-x-6 md:gap-x-0 justify-center">
              {currentlyLearning.map((icon) => (
                <HandleTechStack
                  image={Object.keys(icon)[0]}
                  key={Object.values(icon)[0]}
                  value={Object.values(icon)[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
