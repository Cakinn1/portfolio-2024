import React, { ReactElement } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function BottomRightText({
  text,
  icon,
  isDarkModeSwitcher,
  image,
}: {
  text: string;
  icon?: ReactElement;
  image?: string;
  isDarkModeSwitcher?: boolean;
}) {
  return (
    <div
      className={`fixed ${
        isDarkModeSwitcher ? "bottom-14" : "bottom-4"
      } right-4 px-2 hover:scale-110 duration-300 z-50 backdrop-blur-lg active:scale-90 text-sm flex items-center gap-x-2 rounded-lg py-1 shadow bg-[#f70042] text-white`}
    >
      {icon && icon}
      {image && <img src="/assets/turkey.png" alt="" />}
      <h1>{text}</h1>
    </div>
  );
}
