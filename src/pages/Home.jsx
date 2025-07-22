import React from "react";
import Herosection from "../components/Herosection";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Herosection />

      <About />
      <Projects />
      <Skills />
    </>
  );
};

export default Home;
