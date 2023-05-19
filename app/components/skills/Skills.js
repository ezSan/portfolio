import React from "react";
import styles from "../../scss/globals.module.scss"
import Image from "next/image";

/* icons */

import Bootstrap from "../../../public/icons/frontEndIcons/bootstrap.svg";
import Css from "../../../public/icons/frontEndIcons/css3.svg";
import Html from "../../../public/icons/frontEndIcons/html5.svg";
import Javascript from "../../../public/icons/frontEndIcons/javascript.svg";
import Mui from "../../../public/icons/frontEndIcons/mui.svg";
import ReactIcon from "../../../public/icons/frontEndIcons/React.png";
import Sass from "../../../public/icons/frontEndIcons/sass.svg";
import Redux from "../../../public/icons/frontEndIcons/redux.svg";
/* back end icons */
import Express from "../../../public/icons/backEndIcons/expressjs.svg";
import Mongo from "../../../public/icons/backEndIcons/mongo.svg";
import NodeJs from "../../../public/icons/backEndIcons/nodejs.png";
import Sql from "../../../public/icons/backEndIcons/sql.svg";
import PhpIcon from "../../../public/icons/backEndIcons/phpIcon.png";
import Sequelize from "../../../public/icons/backEndIcons/sequelize.png";

/* develop Icons */
import GitIcon from "../../../public/icons/desarrolloIcons/git.svg"
import Slack from "../../../public/icons/desarrolloIcons/slack.png";
import Agile from "../../../public/icons/desarrolloIcons/agile.png";

const {
  styledIcon, 
  skills, 
  title
} = styles;

export default function Skills() {
  return (
    <div>
      <h3 className={title}>TECNOLOGÏAS</h3>

      <div className={skills}>
        <Image src={Bootstrap} alt="icon" className={styledIcon}  />
        <Image src={Css} alt="icon" className={styledIcon} />
        <Image src={Html} alt="icon" className={styledIcon} />
        <Image src={Javascript} alt="icon" className={styledIcon} />
        <Image src={Mui} alt="icon" className={styledIcon} />
        <Image src={ReactIcon} alt="icon" className={styledIcon} />
        <Image src={Sass} alt="icon" className={styledIcon} />
        <Image src={Redux} alt="icon" className={styledIcon} />
        <Image src={Express} alt="icon" className={styledIcon} />
        
        <Image src={Mongo} alt="icon" className={styledIcon} />
        <Image src={NodeJs} alt="icon" className={styledIcon} />
        <Image src={Sql} alt="icon" className={styledIcon} />
        <Image src={PhpIcon} alt="icon" className={styledIcon} />
        <Image src={Sequelize} alt="icon" className={styledIcon} />

        <Image src={Slack} alt="icon" className={styledIcon} />
        <Image src={GitIcon} alt="icon" className={styledIcon} />
        <Image src={Agile} alt="icon" className={styledIcon} />       
      </div>
    </div>
  );
}
