import React, { useState, useEffect } from "react";
import styles from "../../scss/globals.module.scss";
import ProjectCard from "./ProjectCard";
import proyectos from "../../../app/proyects.json";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const { projects, styledProjectsContainer, title } = styles;

const arrProy = proyectos.proyects;
console.log(arrProy);

export default function Projects() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const [arrPro, setProyectos] = useState(arrProy);

  return (
    <section className={projects} id="projects">
      <h3 className={title}>PROYECTOS</h3>
      <div className={styledProjectsContainer}>
        {arrPro.map((py) => {
          return (
            <div>
              <AnimatePresence>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                >
                  <ProjectCard
                    key={py.nombre}
                    image={py.image}
                    nombre={py.nombre}
                    desc={py.desc}
                    github={py.github}
                    deploy={py.deploy}
                    tecnologias={[py.tecnologias]}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
