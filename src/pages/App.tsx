import { useEffect, useMemo, useState } from "react";
import OnLoad from "../components/OnLoad";
import { Background } from "../components/particles/Background";
import Nav from "./Nav";
import Landing from "./Landing";

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
      <div className="max-w-[1280px]  p-5 mx-auto">
        <Nav />
        <Landing />
      </div>
    </>
  );
}
