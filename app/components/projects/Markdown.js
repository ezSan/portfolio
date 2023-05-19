import React from "react";
import styles from "../../scss/globals.module.scss";
import Markdown from "../../../public/projects/Markdown.png";

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
      <Image alt="projetc img" src={Markdown} className={card__image} />
      <div className={card__overlay}>
        <h2 className={card__title}>Markdown Previewer</h2>
        <p className={card__desc}>
          Con esta aplicación, podrás escribir y formatear tu texto en Markdown
          de manera sencilla y ver los resultados de inmediato. Podrás enfatizar
          palabras o frases utilizando asteriscos o guiones bajos, crear
          encabezados con diferentes niveles utilizando el símbolo numeral y
          generar listas ordenadas y no ordenadas de manera rápida.
        </p>
        <div className={buttonsAndTags}>
          <div className={tecnoContainer}>
            <h4 className={card__desc}>Tecnologías:</h4>
            <div className={tagsContainer}>
              <p className={cardTag}>ReactJs</p>
              <p className={cardTag}>Css</p>
              <p className={cardTag}>Html</p>
            </div>
          </div>

          <div className={cardsButtons}>          

            <a
              href="https://codepen.io/ezsan/pen/abajOwK"
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
