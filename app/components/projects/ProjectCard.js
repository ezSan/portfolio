import React from "react";
import styles from "../../scss/globals.module.scss";
import { GitHub } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

const {
  project_card__image,
  project_card__title,
  project_card__content,
  project_card__description,
  project_card,
} = styles;

export default function ProjectCard(props) {
  return (
    <div className={project_card}>
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
    </div>
  );
}
