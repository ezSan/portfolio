"use client";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import styles from "./scss/globals.module.scss";

const {appStyled} = styles



export default function Home() {
  return (
    
      <div className={appStyled}>
        <Header />
        <Hero />
        <Skills />
        <Projects />
      </div>
    
  );
}
