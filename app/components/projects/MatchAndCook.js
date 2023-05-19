import React from "react";
import styles from "../../scss/globals.module.scss";
import Match from "../../../public/projects/match.png";
import { GitHub } from "iconoir-react";
import Image from "next/image";

const {
    styledCard,
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

export default function MatchAndCook() {
  return (
    <div className={styledCard}>
      <Image alt="projetc img" src={Match} className={card__image} />
      <div className={card__overlay}>
        <h2 className={card__title}>Match & Cook</h2>
        <p className={card__desc}>
          Aplicación web interactiva, enfocada a ayudar a los usuarios a
          encontrar qué comer de forma rápida y dinámica. La característica
          principal del proyecto está centrada en la presentación de recetas que
          se pueden matchear o rechazar deslizándolas hacia un lado o el otro,
          como la popular aplicación de citas.
        </p>
        <div className={buttonsAndTags}>
          <div className={tecnoContainer}>
            <h4 className={card__desc}>Tecnologías:</h4>
            <div className={tagsContainer}>
              <p className={cardTag}>ReactJs</p>
              <p className={cardTag}>Redux</p>
              <p className={cardTag}>Formik</p>
              <p className={cardTag}>Boostrap</p>
              <p className={cardTag}>Axios</p>
              <p className={cardTag}>React Router</p>
            </div>
          </div>

          <div className={cardsButtons}>
            <a
              href="https://github.com/ezSan/Match-Cook"
              target="_blank"
              className={githubLink}
              rel="noreferrer noopener"
            >
              <GitHub className={githubIcon} width={32} />
            </a>

            <a
              href="https://matchandcook.netlify.app"
              target="_blank"
              className={wrapperLink}
              rel="noreferrer noopener"
            >
              <button className={deployButton}>Conocé el sitio</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
