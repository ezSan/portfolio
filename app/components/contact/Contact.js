import React from "react";
import { LinkedIn, Mail, GitHub } from "iconoir-react";
import styles from "../../scss/globals.module.scss";

const {
  styledSection,
  channels,
  contactContainer,
  messageBox,
  contactForm,
  textArea,
  contactBox,
  contactPar,
  contactTitle,
  iconContact,
  submitButton
} = styles;

export default function Contact() {
  return (
    <section className={styledSection}>
    
      <div className={contactContainer}>
        <div className={messageBox}>
          <h3 id="contact" className={contactTitle}>CONTACTO</h3>
          <p className={contactPar}>
            ¡Gracias por visitar por mi página! Si estás buscando un
            desarrollador Full Stack, ¡estoy acá para ayudarte! Dejame tus datos
            y motivo, ¡y juntos vamos a hacer grandes proyectos!
          </p>
        </div>

        <div className={contactBox}>
          <form className={contactForm}>
            <input type="text" placeholder=" Nombre" />
            <input type="email" placeholder=" Email" />
            <textarea
              id="subject"
              name="subject"
              placeholder=" Escribe tu mensaje.."
              className={textArea}
            />
            <button type="submit" value="Enviar" className={submitButton}>
              Enviar 📧
            </button>
          </form>
        </div>
      </div>

      <div className={channels}>
        <LinkedIn
          width={64}
          className={iconContact}
          onClick={() =>
            window.open("https://www.linkedin.com/in/ezsan/", "_blank")
          }
        />
        <Mail
          width={64}
          className={iconContact}
          onClick={() => (window.location.href = "mailto:ezsandev@gmail.com")}
        />
        <GitHub
          width={64}
          className={iconContact}
          onClick={() => window.open("https://github.com/ezSan", "_blank")}
        />
      </div>
    </section>
  );
}

/* AIzaSyD81gij9jOWg9Smw-VhqOebUK1JImgOYKs */
