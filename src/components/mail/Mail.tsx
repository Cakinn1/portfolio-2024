import React from "react";

export default function Mail() {
  return (
    <a href="#contact" className="z-10 cursor-pointer active:scale-90 duration-300 hover:scale-110 hover-mail rounded-full flex justify-center items-center fixed bottom-8 right-8">
      <img src="/assets/icons/mail.svg" className="hover:shadow-2xl" alt="" />
    </a>
  );
}
