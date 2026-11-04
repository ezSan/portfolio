"use client";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import styles from "./scss/globals.module.scss";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Process from "./components/process/Process";

/* const {appStyled} = styles */

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}
