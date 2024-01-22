import React from "react";

export default function SectionHeader({ text }: { text: string }) {
  return (
    <div>
      <h1 className="font-bold">{text}</h1>
    </div>
  );
}
