import { useEffect, useMemo, useState } from "react";
import OnLoad from "./OnLoad";
import { Background } from "../components/particles/Background";
import Nav from "./Nav";
import Landing from "./Landing";
import Landing2 from "./Landing2";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import ExtraProjects from "./ExtraProjects";

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
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/extra" element={<ExtraProjects />} />
        </Routes>
      </Router>
    </div>
  );
}
