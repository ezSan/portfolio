
import React from "react";
import styles from "../../scss/globals.module.scss";

export default function HeroVisual() {
  return (
    <div className={styles.visualContainer}>

      {/* Ventana principal */}
      <div className={styles.browser}>
        <div className={styles.browserHeader}>
          <div className={styles.dots}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.address}>
            www.tunegocio.com
          </div>
        </div>

        <div className={styles.website}>
          <div className={styles.websiteNav}>
            <strong>STUDIO.</strong>
            <span>Inicio</span>
            <span>Servicios</span>
            <span>Contacto</span>
          </div>

          <div className={styles.websiteContent}>
            <small>DISEÑO & ESTRATEGIA DIGITAL</small>

            <h3>
              Hacé crecer
              <br />
              tu negocio.
            </h3>

            <p>
              Soluciones digitales para llevar
              tu marca al siguiente nivel.
            </p>

            <div className={styles.fakeButton}>
              Conocé más
            </div>

            <div className={styles.websiteFooter}>
              <span>Diseño moderno</span>
              <span>100% Responsive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta flotante */}
      <div className={styles.floatingCard}>
        <span className={styles.statusDot} />
        <div>
          <strong>Diseño responsive</strong>
          <p>Adaptado a todos los dispositivos</p>
        </div>
      </div>

      {/* Mockup celular */}
      <div className={styles.phone}>
        <div className={styles.phoneScreen}>
          <div className={styles.phoneCamera} />
          <strong>STUDIO.</strong>
          <div className={styles.phoneHero}>
            <small>BIENVENIDO</small>
            <h4>Tu marca, online.</h4>
            <span />
            <span />
            <div />
          </div>
        </div>
      </div>

    </div>
  );
}
