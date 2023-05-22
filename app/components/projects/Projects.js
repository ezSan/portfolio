import React from "react";
import styles from "../../scss/globals.module.scss";

import Gifos from "./Gifos";
import Landing from "./Landing";
import RandomQuoteMachine from "./RandomQuoteMachine";
import DataWarehouse from "./DataWarehouse";
import MatchAndCook from "./MatchAndCook";
import Markdown from "./Markdown"

const {projects, styledProjectsContainer, title, sliderContainer } = styles;

export default function Projects() {
  return (
    <div className={projects} id='projects'>
      <h3 className={title}>PROYECTOS</h3>
      <div className={styledProjectsContainer}>
        <Gifos />
        <MatchAndCook/>
        <Markdown/>
        <DataWarehouse />
        <Landing />
        <RandomQuoteMachine />
      </div>
    </div>
  );
}
