import React, { useState } from "react";
import styles from "../../scss/globals.module.scss";
import { GitHub, GithubCircle, Rocket } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

const {
  projectCard,
  image,
  title,
  technologies,
  span,
  description,
  buttons,
  button,
  outlinedButton,
} = styles;

export default function ProjectCard(props) {
  const [tecn, setTecnologías] = useState([props.tecnologias[0]]);

  return (
    <div className={projectCard}>
      <h2 className={title}>{props.nombre}</h2>
      <Image
        src={props.image}
        alt={props.nombre}
        className={image}
        width={150}
        height={150}
      />
      <div className={technologies}>
        {tecn.map((tecno, index) =>
          tecno.map((p) => (
            <p key={tecno} className={span}>
              {p}
            </p>
          ))
        )}
      </div>
      <p className={description}>{props.desc}</p>
      <div className={buttons}>
        {props.github && (
          <a
            href={props.github}
            className={outlinedButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Código <GithubCircle />
          </a>
        )}
        {props.deploy && (
          <a
            href={props.deploy}
            className={outlinedButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitio <Rocket />
          </a>
        )}
      </div>
    </div>
  );
}

{
  /*   <div className={project_card}>
  <Image
    alt={props.nombre}
    src={props.image}
    className={project_card__image}
    width={150}
    height={150}
  />
  <div className={project_card__content}>
    <h3 className={project_card__title}>{props.nombre}</h3>
    <p className={project_card__description}>{props.desc}</p>
  </div>
</div> */
}
