import React from "react";
import styles from "../../scss/globals.module.scss";
import DataWarehouseImg from "../../../public/projects/dataWarehouse.png";
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

export default function DataWarehouse() {
  return (
    <div className={styledCard}>
      <Image alt="projetc img" src={DataWarehouseImg} className={card__image} />
      <div className={card__overlay}>
        <h2 className={card__title}>Data Warehouse - WebApp</h2>
        <p className={card__desc}>
          Data Warehouse completo para la organización de clientes en campañas
          de marketing, abarcando tanto el front-end como el back-end,
          permitiendo a los equipos de marketing acceder, analizar y visualizar
          información valiosa para tomar decisiones informadas y optimizar sus
          estrategias de marketing.
          <br/>
          Usuario: lionelmessi@hotmail.com
          Contraseña: campeon
          
        </p>
        <div className={buttonsAndTags}>
          <div className={tecnoContainer}>
            <h4 className={card__desc}>Tecnologías:</h4>
            <div className={tagsContainer}>
              <p className={cardTag}>Javascript</p>
              <p className={cardTag}>HTML</p>
              <p className={cardTag}>Css</p>
              <p className={cardTag}>SQL</p>
              <p className={cardTag}>ExpressJs</p>
              <p className={cardTag}>NodeJs</p>
            </div>
          </div>

          <div className={cardsButtons}>
            <a
              href="https://github.com/ezSan/Data-Warehouse"
              target="_blank"
              className={githubLink}
              rel='noreferrer noopener'
            >
              <GitHub className={githubIcon} width={32} />
            </a>

            <a
              href="https://data-warehouse-ezsan.netlify.app/"
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
