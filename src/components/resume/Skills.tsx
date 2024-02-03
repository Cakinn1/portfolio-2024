import React, { useEffect } from "react";
import HeaderSecton from "./HeaderSecton";
import SectionHeader from "./SectionHeader";
import Aos from "aos";

interface SkillsProps {
  title: string;
  n1: string;
  n2: string;
  n3: string;
  n4: string;
  n5: string;
  n6: string;
  n7?: string;
  n8?: string;
  n9?: string;
  n10?: string;
  isTrue?: boolean;
}

export default function Skills(props: SkillsProps) {
  const { n1, n10, n2, n3, n4, n5, n6, n7, n8, n9, title, isTrue } = props;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={` ${
        isTrue ? "border-b gap-x-11" : " gap-x-6"
      } mt-8 flex  flex-col lg:flex-row flex-1 pb-8`}
    >
      <div>
        <h1 className="font-bold text-lg mb-4 lg:mb-0">{title}</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <ul
          className={`list-disc space-y-1 text-[13px] ${
            isTrue ? " lg:mr-[300px] mr-[300px]" : "lg:mr-[130px] mr-[130px]"
          } mr-0 `}
        >
          <li>{n1}</li>
          <li>{n2}</li>
          <li>{n3}</li>
          <li>{n4}</li>
          <li>{n5}</li>
        </ul>
        <ul className="list-disc space-y-1 text-[13px]">
          <li>{n6}</li>
          {n7 && <li>{n7}</li>}
          {n8 && <li>{n8}</li>}
          {n9 && <li>{n9}</li>}
          {n10 && <li>{n10}</li>}
        </ul>
      </div>
    </div>
  );
}
