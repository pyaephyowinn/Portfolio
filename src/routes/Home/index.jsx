import { useEffect } from "react";

import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomePage = () => {

  useEffect(() => {
    document.title = "Pyae Phyo Win";
  })

  return (
    <>
      {/* landing page */}
      <Landing />

      {/* About-me section */}
      <About />

      {/* Skills secton */}
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* Footer section */}
      <Footer />
    </>
  );
};
export default HomePage;
