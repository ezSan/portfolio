import React from "react";
import styles from "../../../scss/globals.module.scss";

const { styledNavBar, listItems, navBarOpen } = styles;

export default function NavBar(props) {
  const { isOpen } = props;

  return (
    <nav className={isOpen ? navBarOpen : styledNavBar}>
      <ul className={listItems}>
        <a href="#about">
          <li>SOBRE MI</li>
        </a>
        <a href="#tech">
          <li>TECNOLOGÍAS</li>
        </a>
        <a href="#projects">
          <li>PROYECTOS</li>
        </a>
        <a href="#contact">
          <li>CONTACTO</li>
        </a>
      </ul>
    </nav>
  );
}
