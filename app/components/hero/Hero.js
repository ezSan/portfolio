import React from "react";
import styles from "../../scss/globals.module.scss"

const { heroStyled, heroTitle, spamBlue, heroDescription } = styles;

export default function Hero() {
  return (
    <div className={heroStyled}>
      <h2 className={heroTitle}>
        ¡Soy <span className={spamBlue}>Ezequiel Sanchez</span>, Full Stack
        Developer!
      </h2>

      <div className={heroDescription}>
        <p>
          Desde muy chico dedicaba horas a recorrer la web, sorprendido del
          mundo de posibilidades que brindaba, hoy con las herramientas para que
          otros puedan disfrutar de lo mismo.
        </p>
        <p>
          Apasionado por la tecnología, música, deporte y disfrutar de la
          naturaleza.
        </p>
        <p>Ofrezco mis servicios de desarrollo a particulares y empresas.</p>
      </div>
    </div>
  );
}
