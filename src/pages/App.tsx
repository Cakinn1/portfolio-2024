import { useEffect, useMemo, useState } from "react";
import OnLoad from "../components/loadinganimation/OnLoad";
import { Background } from "../components/particles/Background";
import Nav from "./Nav";
import Landing from "../components/landing/Landing";
import Landing2 from "../components/landingv2/Landing2";
import TechStack from "../components/techstack/TechStack";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import ExtraProjects from "./ExtraProjects";
import SingleProject from "./SingleProject";

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
          {/* <Route path="/project/:id" element={<SingleProject />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
