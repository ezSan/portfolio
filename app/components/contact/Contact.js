import React from "react";
import { LinkedIn, Mail, GitHub } from "iconoir-react";
import styles from "../../scss/globals.module.scss";

const { styledSection, channels, iconStyled } = styles;

export default function Contact() {
  return (
    <div className={styledSection}>
      <h3>CONTACTO</h3>
      <div className={channels}>
        <LinkedIn width={64} onClick={()=>window.open('https://www.linkedin.com/in/ezsan/', '_blank')}/>
        <Mail width={64} onClick={()=>window.location.href ='mailto:ezsandev@gmail.com'}/>
        <GitHub width={64} onClick={()=>window.open('https://github.com/ezSan', '_blank')} />
      </div>
    </div>
  );
}


/* AIzaSyD81gij9jOWg9Smw-VhqOebUK1JImgOYKs */