
import React from "react";
import styles from "../../scss/globals.module.scss";
import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

const { heroStyled, heroTitle, hero_content, hero_text } = styles;

export default function Hero() {
  const smoothScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={heroStyled} id="hero">
      <div className={hero_content}>
        <motion.div
          className={hero_text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span>DESARROLLO WEB & SOLUCIONES DIGITALES</span>

          <h1 className={heroTitle}>
            Tu negocio merece una
            <span> presencia digital </span>
            a la altura.
          </h1>

          <p>
            Diseño y desarrollo sitios web modernos, rápidos
            y funcionales para profesionales y negocios que
            buscan crecer en internet.
          </p>

          <div>
            <button onClick={() => smoothScroll("contact")}>
              Hablemos de tu proyecto
            </button>

            <button onClick={() => smoothScroll("services")}>
              Conocé mis servicios
            </button>
          </div>

          <small>
            Atención personalizada · Soluciones a medida
          </small>
        </motion.div>

        <HeroVisual/>
      </div>
    </section>
  );
}
