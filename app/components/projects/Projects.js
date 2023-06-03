import React, { useState, useEffect } from "react";
import styles from "../../scss/globals.module.scss";
import ProjectCard from "./ProjectCard";

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
            <ProjectCard
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
