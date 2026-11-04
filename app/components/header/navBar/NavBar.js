
import React from "react";
import styles from "../../../scss/globals.module.scss";
import { motion } from "framer-motion";

const {
  styledNavBar,
  listItems,
  navBarOpen,
  navLink,
  navCta,
} = styles;

const smoothScrollAnimation = {
  duration: 0.2,
  ease: "easeOut",
};

const links = [
  { label: "INICIO", id: "hero" },
  { label: "SERVICIOS", id: "services" },
  { label: "PROCESO", id: "process" },
  { label: "SOBRE MÍ", id: "about" },
  { label: "CONTACTO", id: "contact" },
];

export default function NavBar({ isOpen }) {
  return (
    <nav className={isOpen ? navBarOpen : styledNavBar}>
      <ul className={listItems}>
        {links.map((link) => (
          <motion.li
            key={link.id}
            whileTap={{ scale: 0.95 }}
            transition={smoothScrollAnimation}
          >
            <a href={`#${link.id}`} className={navLink}>
              {link.label}
            </a>
          </motion.li>
        ))}

        <li>
          <a href="#contact" className={navCta}>
            SOLICITAR PRESUPUESTO
          </a>
        </li>
      </ul>
    </nav>
  );
}
