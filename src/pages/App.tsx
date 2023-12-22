import { useEffect, useMemo, useState } from "react";
import OnLoad from "../components/OnLoad";
import { Background } from "../components/particles/Background";
import Nav from "./Nav";
import Landing from "../components/Landing";
import Landing2 from "../components/Landing2";
import TechStack from "../components/TechStack";
import Projects from "./Projects";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
  
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearInterval(timeoutId);
  }, [isLoading]);

  return (
    <>
      <OnLoad isLoading={isLoading} />
      <Background />
      <div className=" mx-auto">
        <Nav />
        <Landing />
        <Landing2 />
        <TechStack />
        <Projects />
      </div>
    </>
  );
}
