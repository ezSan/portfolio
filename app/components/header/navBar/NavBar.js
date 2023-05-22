import React from "react";
import styles from "../../../scss/globals.module.scss";
import Nav from 'react-bootstrap/Nav';

const { styledNavBar } = styles;

export default function NavBar() {
  return (
    <div className={styledNavBar}>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">SOBRE MI</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">TECNOLOGÍAS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">PROYECTOS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">CONTACTO</Nav.Link>
        </Nav.Item>
        </Nav.Item>
      </Nav>

      {/*       <a id="#" href="#about">SOBRE MI</a>
      <a id="#" href="#tech">TECNOLOGÍAS</a>
      <a id="#" href="#projects">PROYECTOS</a>
      <a id="#" href="#contact">CONTACTO</a> */}
    </div>
  );
}
