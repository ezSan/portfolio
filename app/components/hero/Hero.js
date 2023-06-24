import React from "react";
import styles from "../../scss/globals.module.scss";
import { TypeAnimation } from "react-type-animation";

const { heroStyled, heroTitle, heroDescription, animationText } = styles;

export default function Hero() {
  return (
    <div className={heroStyled} id="about">
      <p>Hola, soy</p>
      <h3>Ezequiel Sanchez.</h3>
      <h2 className={heroTitle}>
        Full Stack Developer
      </h2>
      <p>Desarrollador de aplicaciones y páginas web, móviles y de escritorio.</p>


      <button>CONOCÉ MAS</button>
      {/*       <p className={heroDescription}>
        Desde muy jóven, he sido un apasionado de la tecnología. Pasaba horas
        explorando la web, fascinado por el mundo de posibilidades que ofrecía.
        Después de un largo y dedicado proceso de formación, ahora puedo decir
        que tengo las herramientas necesarias para convertir mi pasión en
        realidad y compartirla con los demás. <br></br> Además de la tecnología,
        también me interesan la música, el deporte y la naturaleza. Son
        fuentes de inspiración y equilibrio en mi vida. <br></br>En esta página,
        encontrarás mis trabajos más recientes. Te invito a explorarlos y
        descubrir las soluciones que ofrezco como desarrollador full stack.
      </p> */}


    </div>
  );
}
