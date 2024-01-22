import Landing from "../pages/Landing";
import Landing2 from "../pages/Landing2";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Nav from "../pages/Nav";
import Resume from "../pages/Resume";

export default function Main() {
  return (
    <>
      <Nav />
      <Landing />
      <Landing2 />
      <TechStack />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
