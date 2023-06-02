import React, { useState, useEffect } from "react";
import styles from "../../scss/globals.module.scss";

import Gifos from "./Gifos";
import Landing from "./Landing";
import RandomQuoteMachine from "./RandomQuoteMachine";
import DataWarehouse from "./DataWarehouse";
import MatchAndCook from "./MatchAndCook";
import Markdown from "./Markdown";

import proyectos from "../../../app/proyects.json";

const { projects, styledProjectsContainer, title, sliderContainer } = styles;

const arrProy = proyectos.proyects;

export default function Projects() {
  const [arrPro, setProyectos] = useState(arrProy); 

  return (
    <div className={projects} id="projects">
      <h3 className={title}>PROYECTOS</h3>
      <div className={styledProjectsContainer}>
        {arrPro.map((py) => {
          return (
            <Gifos
              key={py.nombre}
              image={py.image}
              nombre={py.nombre}
              desc={py.desc}
              github={py.github}
              deploy={py.deploy}
              techn={[py.tecnologias]}
            />
          );
        })}        
      </div>
    </div>
  );
}
