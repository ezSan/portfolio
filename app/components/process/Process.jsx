
import React from "react";
import styles from "../../scss/globals.module.scss";

const steps = [
  {
    number: "01",
    title: "Conversamos",
    description:
      "Conocemos tu negocio, tus objetivos y las necesidades de tu proyecto. La idea es entender qué necesitás antes de empezar.",
    tag: "Primer contacto",
  },
  {
    number: "02",
    title: "Planificamos",
    description:
      "Definimos la propuesta, el alcance del trabajo, las funcionalidades, los tiempos y el presupuesto.",
    tag: "Propuesta a medida",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description:
      "Diseño y construyo tu sitio web, compartiendo avances para revisar detalles y realizar los ajustes acordados.",
    tag: "Diseño y desarrollo",
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Realizamos las pruebas finales, publicamos tu sitio y te acompaño en la puesta en marcha.",
    tag: "Proyecto terminado",
  },
];

export default function Process() {
  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="process" className={styles.processSection}>
      <div className={styles.processContainer}>

        <div className={styles.processHeading}>
          <span>CÓMO TRABAJAMOS</span>

          <h2>
            De la idea
            <br />
            <strong>al resultado.</strong>
          </h2>

          <p>
            Un proceso transparente y organizado.
            Vos aportás la idea, yo me encargo de
            convertirla en una solución digital.
          </p>
        </div>

        <div className={styles.processGrid}>
          {steps.map((step) => (
            <article
              className={styles.processCard}
              key={step.number}
            >
              <div className={styles.processCardTop}>
                <span>{step.number}</span>
                <div />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <small>{step.tag}</small>
            </article>
          ))}
        </div>

        <div className={styles.processFooter}>
          <p>
            ¿Tenés un proyecto en mente?
          </p>

          <button onClick={goToContact}>
            Hablemos de tu proyecto →
          </button>
        </div>

      </div>
    </section>
  );
}
