import React from "react";
import Herosection from "../components/Herosection";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Herosection />

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
