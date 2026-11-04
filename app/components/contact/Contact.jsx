
import React from "react";
import styles from "../../scss/globals.module.scss";

const whatsappNumber = "542926460245";
const email = "ezsandev@gmail.com";

export default function Contact() {
  const message = encodeURIComponent(
    "Hola Ezequiel! Estuve viendo tu sitio y me gustaría consultar por un proyecto web."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>

        <span className={styles.contactLabel}>
          HABLEMOS DE TU PROYECTO
        </span>

        <h2>
          ¿Tenés una idea?
          <br />
          <strong>Hagámosla realidad.</strong>
        </h2>

        <p>
          Contame qué necesitás y qué tenés en mente.
          Podemos conversar sobre tu proyecto y encontrar
          una solución adaptada a tu negocio.
        </p>

        <div className={styles.contactActions}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            Consultar por WhatsApp
            <span>↗</span>
          </a>

          <a
            href={`mailto:${email}`}
            className={styles.emailLink}
          >
            O escribime por email: {email}
          </a>
        </div>

        <div className={styles.contactFooter}>
          <span>Atención personalizada</span>
          <span>Proyectos a medida</span>
          <span>Presupuestos sin compromiso</span>
        </div>

      </div>
    </section>
  );
}
