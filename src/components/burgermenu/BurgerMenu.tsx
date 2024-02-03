import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./Modal";
import { useEffect, useState } from "react";

interface BurgerMenuProps {
}
export default function BurgerMenu(props: BurgerMenuProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [closeMenuAnimation, setCloseMenuAnimation] = useState<boolean>(false);

  function handleModal() {
    if (isModalOpen) {
      setCloseMenuAnimation(!closeMenuAnimation);
      setTimeout(() => {
        setIsModalOpen(!isModalOpen);
      }, 300);
    } else {
      setCloseMenuAnimation(false);
      // setCloseMenuAnimation(!closeMenuAnimation)
      setIsModalOpen(!isModalOpen);
    }
  }

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
    <div className="fixed  left-2 top-2 md:left-4 md:top-4 z-10">
      <GiHamburgerMenu
        onClick={() => handleModal()}
        className="text-[#f70042] text-4xl hover:scale-110 active:scale-90 duration-300"
      />
      {isModalOpen && (
        <Modal
          closeMenuAnimation={closeMenuAnimation}
          handleModal={handleModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
