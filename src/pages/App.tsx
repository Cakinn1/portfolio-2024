import { useEffect, useMemo, useState } from "react";
import OnLoad from "../components/OnLoad";
import { Background } from "../components/particles/Background";
import Nav from "./Nav";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // clear loading state after 4 seconds.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearInterval(timeoutId);
  }, [isLoading]);

  console.log(isLoading)
  return (
    <>
      <OnLoad isLoading={isLoading} />
      <Background />
      <Nav />
      {/* <div style={{height: '100vh'}} className="h- pt-4 bg-blue-500 mt-[100vh]">      </div> */}
    </>
  );
}
