import { useEffect, useMemo, useState } from "react";
import OnLoad from "../components/OnLoad";
import { Background } from "../components/particles/Background";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // clear loading state after 4 seconds.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearInterval(timeoutId);
  }, [isLoading]);

  return (
    <>
      <OnLoad isLoading={isLoading} />
      {/* <ParticleBg /> */}
      <Background />
      {/* <div className="h-screen pt-4 bg-green-500"></div> */}
    </>
  );
}
