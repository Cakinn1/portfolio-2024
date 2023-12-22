import React, { useEffect, useState } from "react";
import { ImageArrayProps } from "../typings/types";
import { imageArray } from "../contants/contants";

export default function OnLoad({ isLoading }: { isLoading: boolean }) {
  const [animationTimer, setAnimationTimer] = useState<boolean>(true);

  useEffect(() => {

    if (isLoading) {
     window.scrollTo(0, 0)
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }

    // timeout for animation
    let timeoutId: NodeJS.Timeout;
    if (animationTimer) {
      timeoutId = setTimeout(() => {
        setAnimationTimer(false);
      }, 3200);
    }
    //  unadd timeout after animation is completed. so there are no memory leaks
    return () => clearInterval(timeoutId);



  }, [isLoading, animationTimer]);

  function CreateImage({ width, bottomSize, otherSize }: ImageArrayProps) {
    return (
      <img
        loading="lazy"
        decoding="async"
        className={`animate-ping absolute ${otherSize} -bottom-${bottomSize} w-[${width}]`}
        src="/assets/loading-animation/cloud.webp"
        alt=""
      />
    );
  }

  return (
    <section
      className={`${
        isLoading ? "opacity-100" : "opacity-0  -z-50"
      } bg-black z-50* text-white duration-300
      overflow-hidden pointer-events-none  absolute   w-full z-50 min-h-screen`}
    >
      <div
        className={`absolute ${
          animationTimer ? "animate__loading" : "animate__speed"
        } animate__loading    duration-1000 left-[40%] md:left-1/2`}
      >
        <img
          src="/assets/loading-animation/rocket.webp"
          className="w-28 -rotate-45"
          alt=""
        />
        {imageArray.map((img, index) => (
          <CreateImage
            key={index}
            bottomSize={img.bottomSize}
            otherSize={img.otherSize}
            width={img.width}
          />
        ))}
      </div>
    </section>
  );
}
