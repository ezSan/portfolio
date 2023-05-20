import React from "react";
import styles from "../../../scss/globals.module.scss"

const { styledNavBar } = styles;

export default function NavBar() {
  return (
    <div className={styledNavBar}>
      <a id="#" href="/">SOBRE MI</a>
      <a id="#" href="/">TECNOLOGÍAS</a>
      <a id="#" href="/">PROYECTO</a>
      <a id="#" href="/">CONTACTO</a>
    </div>
  );
}
