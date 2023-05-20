import React from "react";
import styles from "../../scss/globals.module.scss";
import { TypeAnimation } from "react-type-animation";

const { heroStyled, heroTitle, heroDescription, animationText } = styles;

export default function Hero() {
  return (
    <div className={heroStyled}>
      <h2 className={heroTitle}>
        ¡Soy Ezequiel Sanchez,
        <TypeAnimation
          sequence={[
            "",
            1000,
            " Full",
            1000,
            " Full Stack",
            1000,
            " Full Stack Developer",
            1000,
          ]}
          className={animationText}
          speed={45}
          deletionSpeed={60}
          style={{}}
          repeat={Infinity}
        />
        !
      </h2>

      <p className={heroDescription}>
        Desde muy jóven, he sido un apasionado de la tecnología. Pasaba
        horas explorando la web, fascinado por el mundo de posibilidades que
        ofrecía. Después de un largo y dedicado proceso de formación, ahora
        puedo decir que tengo las herramientas necesarias para convertir mi
        pasión en realidad y compartirla con los demás. Además de la tecnología,
        también me interesan la música 🎶, el deporte ⚽️ y la naturaleza⛰️. Son
        fuentes de inspiración y equilibrio en mi vida. En esta página,
        encontrarás mis trabajos más recientes. Te invito a explorarlos y
        descubrir las soluciones que ofrezco como desarrollador full stack.
        {/* Desde chico fuí un entusiasta de la tecnología, crecí con internet y
          con ello un mundo de posibilidades. En época de pandemia decidí
          capacitarme y poder ofrecer mis servicios como developer. Apasionado
          por la tecnología, música, deportes en equipo y disfrutar de la naturaleza.<br/>Me
          encuentro en búsqueda de nuevas oportunidades laborales, dónde pueda
          aplicar mis conocimientos y experiencia. */}
      </p>
    </div>
  );
}
