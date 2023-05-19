import React from "react";

import styles from "../../scss/globals.module.scss";

import GifosImg from "../../../public/projects/gifos.png";

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

export default function Gifos() {
  return (
    <div className={styledCard}>
      <Image alt="projetc img" src={GifosImg} className={card__image}/>
      <div className={card__overlay}>
        <h2 className={card__title}>Gifos</h2>
        <p className={card__desc}>
          Gifos es una plataforma divertida e interactiva que te permite buscar,
          descubrir y crear GIFs. Explora una amplia biblioteca de GIFs, realiza
          búsquedas y arma tu propia colección, crea tus
          propios GIFs utilizando la cámara web y compartelos en la página
          oficial de Giphy. Desarrollado para funcionar también en dispositivos móviles.
        </p>
        <div className={buttonsAndTags}>
          <div className={tecnoContainer}>
            <h4 className={card__desc}>Tecnologías:</h4>
            <div className={tagsContainer}>
              <p className={cardTag}>Javascript</p>
              <p className={cardTag}>HTML</p>
              <p className={cardTag}>Css</p>
              <p className={cardTag}>Sass</p>
            </div>
          </div>

          <div className={cardsButtons}>
            <a
              href="https://github.com/ezSan/GiphoS"
              target="_blank"
              className={githubLink}
              rel='noreferrer noopener'
            >
              <GitHub className={githubIcon} width={32} />
            </a>

            <a
              href="https://gifosbyezsan.netlify.app/"
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
