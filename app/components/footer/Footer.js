import React from "react";
import styles from "../../scss/globals.module.scss";
import { LinkedIn, Mail, GitHub } from "iconoir-react";

const { footerStyled, channels, contactTitle, iconContact } = styles;

const fecha = new Date();

const actualYear = fecha.getFullYear();

export default function Footer() {
  return (
    <div className={footerStyled}>
      <div className={channels}>
        <LinkedIn
          width={50}
          className={iconContact}
          onClick={() =>
            window.open("https://www.linkedin.com/in/ezsan/", "_blank")
          }
        />
        <GitHub
          width={50}
          className={iconContact}
          onClick={() => window.open("https://github.com/ezSan", "_blank")}
        />
      </div>
      <p>By ezSan© {actualYear}</p>
    </div>
  );
}
