import { useEffect, useState } from "react";
import OnLoad from "./OnLoad";
import { Background } from "../components/particles/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Mail from "../components/mail/Mail";
import BurgerMenu from "../components/burgermenu/BurgerMenu";
import BurgerMenuContext from "../context/BurgerMenuContext";
import { Analytics } from '@vercel/analytics/react';
export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearInterval(timeoutId);
  }, [isLoading]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursorRing = document.querySelector(
        ".cursor-ring"
      ) as HTMLDivElement;

      if (cursorRing) {
        cursorRing.style.left = `${event.clientX}px`;
        cursorRing.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /*

  * add redux and disable mail on burgermenu

*/

  return (
    <div className="scroll-smooth relative overflow-x-hidden">
      <div className="cursor-ring z-50 "></div>
      <Analytics  />
      <BurgerMenuContext>
        <BurgerMenu />
        <Mail />
        <OnLoad isLoading={isLoading} />
        <Background />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </BurgerMenuContext>
    </div>
  );
}
