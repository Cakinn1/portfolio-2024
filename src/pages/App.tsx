import { useEffect, useMemo, useState } from "react";
import OnLoad from "../components/OnLoad";
import { Background } from "../components/particles/Background";
import Nav from "./Nav";
import Landing from "./Landing";
import Landing2 from "../components/Landing2";
import TechStack from "../components/TechStack";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // clear loading state after 4 seconds.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearInterval(timeoutId);
  }, [isLoading]);

  console.log(isLoading);
  return (
    <>
      <OnLoad isLoading={isLoading} />
      <Background />
      <div className=" mx-auto">
        <Nav />
        <Landing />
        <Landing2 />
        <TechStack />
      </div>
    </>
  );
}
