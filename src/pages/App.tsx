import { useEffect, useState } from "react";
import OnLoad from "./OnLoad";
import { Background } from "../components/particles/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import ExtraProjects from "./ExtraProjects";
import SingleProject from "./SingleProject";
import Mail from "../components/mail/Mail";
import BurgerMenu from "../components/burgermenu/BurgerMenu";
import Modal from "../components/burgermenu/Modal";

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

  return (
    <div className="scroll-smooth relative overflow-x-hidden">
      <div className="cursor-ring z-50"></div>
      <BurgerMenu />
      <Mail />
      <OnLoad isLoading={isLoading} />
      <Background />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/extra" element={<ExtraProjects />} />
          <Route path="/project/:id" element={<SingleProject />} />
        </Routes>
      </Router>
    </div>
  );
}
