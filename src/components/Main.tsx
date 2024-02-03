import Landing from "../pages/Landing";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Nav from "../archive/Nav";
import Resume from "../pages/Resume";
import About from "../pages/About";
import CurrentProjects from "./projects/CurrentProjects";

export default function Main() {
  return (
    <>
      {/* <Nav /> */}
      <Landing />
      <About />
      <TechStack />
      <CurrentProjects />
      {/* <Projects /> */}
      <Resume />
      <Contact />
    </>
  );
}
