
import React from "react";
import styles from "../../scss/globals.module.scss";

const benefits = [
  {
    number: "01",
    title: "Trato directo",
    description:
      "Hablás directamente conmigo durante todo el proyecto. Sin intermediarios ni procesos innecesarios.",
  },
  {
    number: "02",
    title: "Soluciones a medida",
    description:
      "Cada negocio tiene necesidades diferentes. Desarrollo propuestas adaptadas a tus objetivos y presupuesto.",
  },
  {
    number: "03",
    title: "Compromiso y acompañamiento",
    description:
      "Me involucro en cada etapa, desde la primera idea hasta la publicación de tu sitio web.",
  },
];

export default function About() {
  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>

        <div className={styles.aboutIntro}>
          <span className={styles.aboutLabel}>
            SOBRE MÍ
          </span>

          <h2>
            Detrás de cada proyecto,
            <br />
            <strong>hay una persona.</strong>
          </h2>

          <p>
            Soy Ezequiel Sánchez, desarrollador web
            independiente. Trabajo junto a profesionales
            y negocios que buscan mejorar su presencia
            digital a través de soluciones web funcionales,
            modernas y pensadas para sus necesidades.
          </p>

          <p>
            Me gusta trabajar de forma cercana, entender
            cada proyecto y transformar una idea en una
            herramienta digital concreta.
          </p>

          <button onClick={goToContact}>
            ¿Hablamos de tu proyecto? →
          </button>
        </div>

        <div className={styles.aboutBenefits}>
          {benefits.map((benefit) => (
            <article
              className={styles.benefitCard}
              key={benefit.number}
            >
              <span>{benefit.number}</span>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
