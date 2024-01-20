import React from "react";
import styles from "../../scss/globals.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Astronaut from "../../../public/astronaut.png";

const { heroStyled, heroTitle, hero_content, hero_text, hero_image } = styles;

export default function Hero() {
  const smoothScrollAnimation = {
    duration: 0.8, 
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className={heroStyled} id="hero">
      <div className={hero_content}>
        <div className={hero_text}>
          <p>Hola, soy</p>
          <h3>Ezequiel Sanchez.</h3>
          <h2 className={heroTitle}>Full Stack Developer</h2>
          <p>Transformando ideas en realidades digitales.</p>

          <motion.a
            onClick={() => handleSmoothScroll("about")}
            whileTap={{ scale: 0.9 }}
            transition={smoothScrollAnimation}
          >
            <button>CONOCÉ MAS</button>
          </motion.a>
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

