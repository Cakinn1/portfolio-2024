import Aos from "aos";
import React, { useEffect } from "react";

export default function SectionHeader({ text }: { text: string }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <h1 className="font-bold">
        {text}
      </h1>
    </div>
  );
}
