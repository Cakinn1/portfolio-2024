import Landing from "./landing/Landing";
import Landing2 from "./landingv2/Landing2";
import TechStack from "./techstack/TechStack";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Nav from "../pages/Nav";

export default function Main() {
  return (
    <>
      <Nav />
      <Landing />
      <Landing2 />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}
