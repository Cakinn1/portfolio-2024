import { useEffect, useMemo, useState } from "react";
import OnLoad from "./OnLoad";
import { Background } from "../components/particles/Background";
import Nav from "./Nav";
import Landing from "./Landing";
import Landing2 from "./Landing2";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
  
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearInterval(timeoutId);
  }, [isLoading]);

  return (
    <div className="scroll-smooth overflow-x-hidden">
      <OnLoad isLoading={isLoading} />
      <Background />
      <div className="mx-auto">
        <Nav />
        <Landing />
        <Landing2 />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
