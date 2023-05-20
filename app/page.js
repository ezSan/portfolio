"use client";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import styles from "./scss/globals.module.scss";
import Contact from "./components/contact/Contact";

/* const {appStyled} = styles */



export default function Home() {
  return (
    
      <div>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    
  );
}
