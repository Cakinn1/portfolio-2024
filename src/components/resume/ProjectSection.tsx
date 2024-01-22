import React from "react";
import SectionHeader from "./SectionHeader";

export default function ProjectSection() {
  function Section() {
    return (
      <div>
        <div>
          <h1 className="font-bold text-3xl">Anthony Cakin</h1>
          <h2 className="text-lg">Software Engineer</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-8 flex-1 gap-x-12 flex border-b my-8">
      <SectionHeader text="Projects" />

      <div className="flex flex-1 space-y-6 flex-col">
       <Section />
      </div>
    </div>
  );
}
