import React from "react";
import styles from "../../scss/globals.module.scss";
import { TypeAnimation } from "react-type-animation";

const { heroStyled, heroTitle, heroDescription, animationText } = styles;

export default function Hero() {
  return (
    <div className={heroStyled}>
      <h2 className={heroTitle}>
        ¡Hola
        <br></br>
        soy Ezequiel Sanchez,
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
        Desde muy jóven, he sido un apasionado de la tecnología. Pasaba horas
        explorando la web, fascinado por el mundo de posibilidades que ofrecía.
        Después de un largo y dedicado proceso de formación, ahora puedo decir
        que tengo las herramientas necesarias para convertir mi pasión en
        realidad y compartirla con los demás. <br></br> Además de la tecnología,
        también me interesan la música 🎶, el deporte ⚽️ y la naturaleza⛰️. Son
        fuentes de inspiración y equilibrio en mi vida. <br></br>En esta página,
        encontrarás mis trabajos más recientes. Te invito a explorarlos y
        descubrir las soluciones que ofrezco como desarrollador full stack.
      </p>
    </div>
  );
}
