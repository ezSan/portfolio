import React from "react";
import styles from "../../scss/globals.module.scss";
import LandingImg from "../../../public/projects/landing.png";
import { GitHub } from "iconoir-react";
import Image from "next/image";

const {styledCard,
card__image,
card__desc,
card__overlay,
githubIcon,
card__title,
cardTag,
tagsContainer,
tecnoContainer,
cardsButtons,
buttonsAndTags,
wrapperLink,
deployButton,
githubLink,
} = styles;

export default function Landing() {
  return (
    <div className={styledCard}>
      <Image alt="projetc img" src={LandingImg} className={card__image} />
      <div className={card__overlay}>
        <h2 className={card__title}>Pale Blue Dot - Landing Page</h2>
        <p className={card__desc}>
          Landing page para un canal dedicado a podcast de programación y
          tecnología. Disponible tanto en su versión móvil, como en web.
        </p>
        <div className={buttonsAndTags}>
          <div className={tecnoContainer}>
            <h4 className={card__desc}>Tecnologías:</h4>
            <div className={tagsContainer}>
              <p className={cardTag}>HTML</p>
              <p className={cardTag}>Css</p>
            </div>
          </div>

          <div className={cardsButtons}>
            <a
              href="https://github.com/ezSan/podcastChannel"
              target="_blank"
              className={githubLink}
              rel='noreferrer noopener'
            >
              <GitHub className={githubIcon} width={32} />
            </a>

            <a
              href="https://ezsan.github.io/podcastChannel/"
              target="_blank"
              className={wrapperLink}
              rel='noreferrer noopener'
            >
              <button className={deployButton}>Conocé el sitio</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
