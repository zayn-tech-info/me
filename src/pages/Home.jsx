import React from "react";
import Herosection from "../components/Herosection";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Herosection />

      <About />
      <Projects />
    </>
  );
};

export default Home;
