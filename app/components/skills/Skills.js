import React from "react";
import styles from "../../scss/globals.module.scss";
import Image from "next/image";

const { styledIcon, skills, title, iconBox, iconTitle } = styles;

const icons = [
  // Front-end Icons
  {
    name: "React",
    src: require("../../../public/icons/frontEndIcons/React.png"),
  },
  {
    name: "Bootstrap",
    src: require("../../../public/icons/frontEndIcons/bootstrap.svg"),
  },
  {
    name: "NextJS",
    src: require("../../../public/icons/frontEndIcons/next.svg"),
  },
  {
    name: "CSS",
    src: require("../../../public/icons/frontEndIcons/css3.svg"),
  },
  {
    name: "HTML",
    src: require("../../../public/icons/frontEndIcons/html5.svg"),
  },
  {
    name: "JavaScript",
    src: require("../../../public/icons/frontEndIcons/javascript.svg"),
  },
  {
    name: "Material-UI",
    src: require("../../../public/icons/frontEndIcons/mui.svg"),
  },

  {
    name: "Sass",
    src: require("../../../public/icons/frontEndIcons/sass.svg"),
  },
  {
    name: "Redux",
    src: require("../../../public/icons/frontEndIcons/redux.svg"),
  },

  // Back-end Icons
  {
    name: "Express.js",
    src: require("../../../public/icons/backEndIcons/expressjs.svg"),
  },
  {
    name: "MongoDB",
    src: require("../../../public/icons/backEndIcons/mongo.svg"),
  },
  {
    name: "Node.js",
    src: require("../../../public/icons/backEndIcons/nodejs.png"),
  },
  {
    name: "SQL",
    src: require("../../../public/icons/backEndIcons/sql.svg"),
  },
  {
    name: "PHP",
    src: require("../../../public/icons/backEndIcons/phpIcon.png"),
  },
  {
    name: "Sequelize",
    src: require("../../../public/icons/backEndIcons/sequelize.png"),
  },

  // Development Icons
  {
    name: "Git",
    src: require("../../../public/icons/desarrolloIcons/git.svg"),
  },
  {
    name: "Slack",
    src: require("../../../public/icons/desarrolloIcons/slack.png"),
  },
  {
    name: "Agile",
    src: require("../../../public/icons/desarrolloIcons/agile.png"),
  },
];

export default function Skills() {
  return (
    <section id="tech">
      <h3 className={title}>TECNOLOGÍAS</h3>

      <div className={skills}>
        {icons.map((icon, index) => (
          <div key={index} className={iconBox}>
            <Image src={icon.src} alt={icon.name} className={styledIcon} />
            <p className={iconTitle}>{icon.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
