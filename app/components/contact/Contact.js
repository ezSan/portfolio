import React from "react";

import styles from "../../scss/globals.module.scss";

const {
  styledSection,
  channels,
  contactContainer,
  principalContact,
  contactForm,
  contactPar,
  contactTitle,
  iconContact,
  submitButton,
} = styles;

export default function Contact() {
  return (
    <div id="contact" className={styledSection}>
      
      <h3>CONTACTO</h3>
      <div className={contactContainer}>
        <div className={principalContact}>
          <p className={contactPar}>
            ¡Gracias por visitar por mi página! Si estás buscando un desarrollador Full Stack , ¡estoy acá para ayudarte! Dejame
            tus datos y motivo, ¡y juntos vamos a hacer grandes proyectos!
          </p>          
        </div>

        <form className={contactForm}>
          <input type="text" placeholder=" Nombre" />
          <input type="email" placeholder=" Email" />
          <textarea
            id="subject"
            name="subject"
            placeholder=" Escribe tu mensaje.."
          />

          <button type="submit" value="Enviar" className={submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

/* AIzaSyD81gij9jOWg9Smw-VhqOebUK1JImgOYKs */
