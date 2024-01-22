import React from "react";
import SectionHeader from "./SectionHeader";

export default function Eduation() {
  function RenderEducation({
    date,
    para,
    title,
  }: {
    date: string;
    title: string;
    para: string;
  }) {
    return (
      <div className="flex flex-1 gap-x-12  justify-between">
        <div>
          <h1 className="font-bold text-[14px]">{title}</h1>
          <p className="text-sm">{para}</p>
        </div>
        <div>
          <h3 className="text-sm">{date}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 flex-1 gap-x-12 flex border-y my-8">
      <SectionHeader text="Education" />
      <div className="flex flex-1 space-y-6 flex-col">
        <RenderEducation
          title="Frontend Developer Bootcamp"
          para="Frontend Simplified"
          date="March 2021 – April 2023"
        />
        <RenderEducation
          title="CS50P – Introduction to Programming with Python"
          para="Harvard University"
          date="Aug 2023 – Current"
        />
        <RenderEducation
          title="CS50W – Web Programming with Python and JavaScript"
          para="Harvard University"
          date="November 2023 – Current"
        />
      </div>
    </div>
  );
}
