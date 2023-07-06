import React from "react";
import styles from "../../scss/globals.module.scss";
import Image from "next/image";
import Contact from "../../../public/hey.png";

const { about, aboutCtn, aboutImg } = styles;

export default function About() {
  return (
    <section id="about" className={about}>
      <h3>SOBRE MI</h3>
      <div className={aboutCtn}>
        <p>
          Desde muy jóven, he sido un apasionado de la tecnología. Pasaba horas
          explorando la web, fascinado por el mundo de posibilidades que
          ofrecía. Después de un largo y dedicado proceso de formación, ahora
          puedo decir que tengo las herramientas necesarias para convertir mi
          pasión en realidad y compartirla con los demás. Además de la
          tecnología, también me interesan la música, el deporte y la
          naturaleza. Son fuentes de inspiración y equilibrio en mi vida. En
          esta página, encontrarás mis trabajos más recientes. Te invito a
          explorarlos y descubrir las soluciones que ofrezco como desarrollador
          full stack.
        </p>
        <Image src={Contact}  alt="conctact" className={aboutImg} />
      </div>
    </section>
  );
}
