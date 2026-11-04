
import React from "react";
import styles from "../../scss/globals.module.scss";

const services = [
  {
    number: "01",
    title: "Landing pages",
    description:
      "Páginas diseñadas para presentar tu negocio, destacar tus servicios y convertir visitas en consultas.",
    features: [
      "Diseño personalizado",
      "Adaptación a celulares",
      "Integración con WhatsApp",
      "Optimización SEO inicial",
    ],
  },
  {
    number: "02",
    title: "Sitios institucionales",
    description:
      "Una presencia digital profesional para comunicar quién sos, qué ofrecés y por qué elegirte.",
    features: [
      "Diseño profesional",
      "Secciones personalizadas",
      "Formulario de contacto",
      "Diseño responsive",
    ],
  },
  {
    number: "03",
    title: "Catálogos digitales",
    description:
      "Mostrá tus productos o servicios en un espacio digital organizado, práctico y fácil de compartir.",
    features: [
      "Listado de productos",
      "Información y fotografías",
      "Consultas por WhatsApp",
      "Administración según proyecto",
    ],
  },
];

export default function Services() {
  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>

        <div className={styles.servicesHeading}>
          <span>QUÉ PUEDO HACER POR TU NEGOCIO</span>
          <h2>
            Soluciones digitales
            <br />
            <strong>pensadas para crecer.</strong>
          </h2>
          <p>
            Cada proyecto tiene sus propias necesidades.
            Desarrollo soluciones funcionales, adaptadas
            a tus objetivos y a tu presupuesto.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article
              className={styles.serviceCard}
              key={service.number}
            >
              <span className={styles.serviceNumber}>
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button onClick={goToContact}>
                Consultar por este servicio →
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
