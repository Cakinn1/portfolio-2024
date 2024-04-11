import Landing from "./Landing";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import CurrentProjects from "../components/projects/CurrentProjects";

export default function Main() {
  return (
    <>
      <Landing />
      <About />
      <TechStack />
      <CurrentProjects />
      {/* <Resume /> */}
      <Contact />
    </>
  );
}
