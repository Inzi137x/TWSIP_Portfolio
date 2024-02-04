import React from "react";
import Header from "./Header";
import Home from "./Home";
import Section1, { Section2 } from "./Section";
import Skills from "./Skills";
import Project from "./Project";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Contact from "./Contact";
import "./Theme.css";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Section1 />
      <Skills />
      <Section2 />
      <Project />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
