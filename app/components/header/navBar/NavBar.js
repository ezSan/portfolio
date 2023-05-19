import React from "react";
import styles from "../../../scss/globals.module.scss"

const { styledNavBar } = styles;

export default function NavBar() {
  return (
    <div className={styledNavBar}>
      <a id="#" href="/">Sobre mi</a>
      <a id="#" href="/">Habilidades</a>
      <a id="#" href="/">Proyectos</a>
      <a id="#" href="/">Contacto</a>
    </div>
  );
}
