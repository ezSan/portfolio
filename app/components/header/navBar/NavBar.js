import React from "react";
import styles from "../../../scss/globals.module.scss";
import Nav from "react-bootstrap/Nav";

const { styledNavBar } = styles;

export default function NavBar() {
  return (
    <Nav className={styledNavBar}>
      <Nav.Item>
        <Nav.Link href="#about">SOBRE MI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#tech">TECNOLOGÍAS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">PROYECTOS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">CONTACTO</Nav.Link>
        </Nav.Item>
      </Nav.Item>
    </Nav>
  );
}
