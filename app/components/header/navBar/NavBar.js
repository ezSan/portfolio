import React from "react";
import styles from "../../../scss/globals.module.scss";
import { motion, useAnimation } from "framer-motion";

const { styledNavBar, listItems, navBarOpen } = styles;

const smoothScrollAnimation = {
  duration: 0.8, // Duración de la animación en segundos
  ease: [0.43, 0.13, 0.23, 0.96], // Curva de aceleración personalizada
};

const handleSmoothScroll = (sectionId) => {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function NavBar(props) {
  const { isOpen } = props;

  return (
    <nav className={isOpen ? navBarOpen : styledNavBar}>
      <ul className={listItems}>
        <motion.a
          onClick={() => handleSmoothScroll("about")}
          className="nav-link"
          whileTap={{ scale: 0.9 }}
          transition={smoothScrollAnimation}
        >
          SOBRE MI
        </motion.a>
        <motion.a
          onClick={() => handleSmoothScroll("tech")}
          className="nav-link"
          whileTap={{ scale: 0.9 }}
          transition={smoothScrollAnimation}
        >
          TECNOLOGÍAS
        </motion.a>
        <motion.a
          onClick={() => handleSmoothScroll("projects")}
          className="nav-link"
          whileTap={{ scale: 0.9 }}
          transition={smoothScrollAnimation}
        >
          PROYECTOS
        </motion.a>
        <motion.a
          onClick={() => handleSmoothScroll("contact")}
          className="nav-link"
          whileTap={{ scale: 0.9 }}
          transition={smoothScrollAnimation}
        >
          CONTACTO
        </motion.a>
      </ul>
    </nav>
  );
}
