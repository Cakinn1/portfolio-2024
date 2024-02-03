import React, { useState } from "react";

interface LanguagesProps {
  logoUrl: string;
}
export default function Languages(props: LanguagesProps) {
  const { logoUrl } = props;
  const [isIconHovered, setIsIconHovered] = useState<boolean>(false);

 
  return (
    <div
      className="flex items-center hover:scale-110 active:scale-90 duration-300 gap-x-4 mb-2"
      onMouseEnter={() => setIsIconHovered(true)}
      onMouseLeave={() => setIsIconHovered(false)}
    >
   
      <h1 className="bg-gray-400 rounded-2xl px-4">{logoUrl}</h1>
    </div>
  );
}
