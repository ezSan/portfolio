import React from "react";
import styles from "../../scss/globals.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Astronaut from "../../../public/astronaut.png";

const { heroStyled, heroTitle, hero_content, hero_text, hero_image } = styles;

export default function Hero() {
  return (
    <div className={heroStyled} id="hero">
      <div className={hero_content}>
        <div className={hero_text}>
          <p>Hola, soy</p>
          <h3>Ezequiel Sanchez.</h3>
          <h2 className={heroTitle}>Full Stack Developer</h2>
          <p>Transformando ideas en realidades digitales.</p>

          <button>CONOCÉ MAS</button>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 1, 0.5, 1],
              scale: [0.9, 1],
              rotate: [-2, 2, -1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 0.5,
            }}
          >
            <Image
              src={Astronaut}
              alt="Descripción de la imagen"
              className={hero_image}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

{
  /*       <p className={heroDescription}>
        Desde muy jóven, he sido un apasionado de la tecnología. Pasaba horas
        explorando la web, fascinado por el mundo de posibilidades que ofrecía.
        Después de un largo y dedicado proceso de formación, ahora puedo decir
        que tengo las herramientas necesarias para convertir mi pasión en
        realidad y compartirla con los demás. <br></br> Además de la tecnología,
        también me interesan la música, el deporte y la naturaleza. Son
        fuentes de inspiración y equilibrio en mi vida. <br></br>En esta página,
        encontrarás mis trabajos más recientes. Te invito a explorarlos y
        descubrir las soluciones que ofrezco como desarrollador full stack.
      </p> */
}
