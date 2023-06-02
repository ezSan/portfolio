import React from "react";
import styles from "../../scss/globals.module.scss";
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

export default function Gifos(props) {
  return (
    <div className={styledCard}>
      <Image
        alt="projetc img"
        src={props.image}
        className={card__image}
        width={150}
        height={150}
      />
      <div className={card__overlay}>
        <h2 className={card__title}>{props.nombre}</h2>
        <p className={card__desc}>{props.desc}</p>
        <div className={buttonsAndTags}>
          <div className={tecnoContainer}>
            <h4 className={card__desc}>Tecnologías:</h4>
            <div className={tagsContainer}>
              {props.techn.map((tech) => {
                return (
                  <p className={cardTag} key={tech}>
                    {tech}
                  </p>
                );
              })}
            </div>
          </div>

          <div className={cardsButtons}>
            {props.github && (
              <a
                href={props.github}
                target="_blank"
                className={githubLink}
                rel="noreferrer noopener"
              >
                <GitHub className={githubIcon} width={32} />
              </a>
            )}

            <a
              href={props.deploy}
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
