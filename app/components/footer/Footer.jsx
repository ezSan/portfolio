
import React from "react";
import styles from "../../scss/globals.module.scss";
import { LinkedIn, GitHub } from "iconoir-react";

const actualYear = new Date().getFullYear();

const navigation = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footerStyled}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <a href="#hero" className={styles.brandName}>
            Ezequiel Sánchez<span>.</span>
          </a>
          <p>Soluciones digitales</p>
        </div>

        <nav className={styles.footerNav} aria-label="Navegación del pie de página">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/ezsan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn width={21} />
          </a>

          <a
            href="https://github.com/ezSan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub width={21} />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {actualYear} Ezequiel Sánchez. Todos los derechos reservados.</p>
        <p>Diseñado y desarrollado por mí.</p>
      </div>
    </footer>
  );
}
