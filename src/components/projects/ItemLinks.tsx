import React from "react";

interface ItemLinksProps {
  link?: string;
  icon?: React.ReactElement;
  title: string;
  isNextflix?: boolean;
  setIsNextflixOpened?: (value: boolean) => void;
  isNextflixOpened?: boolean;
  isOpenSource?: boolean
}

const ItemLinks = ({
  link,
  icon,
  title,
  isNextflix,
  setIsNextflixOpened,
  isNextflixOpened,
  isOpenSource
}: ItemLinksProps) => {
  return (
    <>
      {isNextflix ? (
        <div
          onClick={() =>
            setIsNextflixOpened && setIsNextflixOpened(!isNextflixOpened || false)
          }
          className="flex text-[#] items-center gap-x-3 w-fit hover:scale-110 active:scale-90 duration-300"
        >
          {icon}
          <h1 >{title}</h1>
        </div>
      ) : (
        <a
          className="flex text-[#] items-center gap-x-3 w-fit hover:scale-110 active:scale-90 duration-300"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
          <h1 className={`${isOpenSource ? "text-sm" : ""}`}>{title}</h1>
        </a>
      )}
    </>
  );
};

export default ItemLinks;
