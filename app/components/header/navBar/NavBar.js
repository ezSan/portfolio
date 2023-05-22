import React from "react";
import styles from "../../../scss/globals.module.scss"

const { styledNavBar } = styles;

export default function NavBar() {
  return (
    <div className={styledNavBar}>
      <a id="#" href="#about">SOBRE MI</a>
      <a id="#" href="#tech">TECNOLOGÍAS</a>
      <a id="#" href="#projects">PROYECTO</a>
      <a id="#" href="#contact">CONTACTO</a>
    </div>
  );
}
