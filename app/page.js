"use client";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import styles from "./scss/globals.module.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


import About from "./components/about/About";

/* const {appStyled} = styles */

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}


