import React, { useContext } from "react";
import { burgerMenuContext } from "../../context/BurgerMenuContext";

export default function Mail() {
  const { isModalOpen } = useContext(burgerMenuContext);
  return (
    <a
      href="#contact"
      className={`z-10  active:scale-90  duration-300
       hover:scale-110 hover-mail rounded-full flex justify-center
        items-center fixed bottom-8 right-8 ${
          isModalOpen ? "opacity-0" : "opacity-100"
        }`}
    >
      <img
        src="/assets/icons/mail.svg"
        className="hover:shadow-2xl rounded-2xl"
        alt=""
      />
    </a>
  );
}
