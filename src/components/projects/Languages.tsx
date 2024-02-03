import React, { useState } from "react";

interface LanguagesProps {
  logoUrl: string;
}
export default function Languages(props: LanguagesProps) {
  const { logoUrl } = props;
  const [isIconHovered, setIsIconHovered] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <div
      className="flex items-center gap-x-4"
      onMouseEnter={() => setIsIconHovered(true)}
      onMouseLeave={() => setIsIconHovered(false)}
    >
      <img
        onLoad={handleImageLoad}
        className={`${
          isImageLoaded ? "" : "bg-gray-300 animate-pulse"
        } h-14 hover:scale-110 active:scale-90 duration-300  w-14`}
        src={logoUrl}
        alt=""
      />
    </div>
  );
}
