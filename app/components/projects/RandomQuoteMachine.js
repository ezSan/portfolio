import React from "react";

import styles from "../../scss/globals.module.scss"

import RandomQuoteMachineImg from "../../../public/projects/RQuoteMachine.png";

import Image from "next/image";

const {
  styledCard,  
  card__desc,
  card__overlay,  
  card__title,
  card__image,
  cardTag,
  tagsContainer,
  tecnoContainer,
  cardsButtons,
  buttonsAndTags,
  wrapperLink,
  deployButton,
  
} = styles;

export default function RandomQuoteMachine() {
  return (
    <div className={styledCard}>
      <Image alt="projetc img" src={RandomQuoteMachineImg} className={card__image} />
      <div className={card__overlay}>
        <h2 className={card__title}>Random Quote Machine</h2>
        <p className={card__desc}>
          Maquina de frases aleatorias, inspiradoras
          y con un color diferente por vez. 
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
              href="https://codepen.io/ezsan/pen/qBojPZO?editors=1100"
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


