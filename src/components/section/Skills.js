import React from 'react';
import sx from "./Skills.module.css";
import html from "../../images/html.svg";
import js from "../../images/js.svg";
import css from "../../images/css.svg";
import ts from "../../images/ts.svg";
import react from "../../images/react.svg";

function Skills() {
  return (
    <div id="skills" className={sx.skills}>
      <h1>
        <strong>Habilidades</strong>
      </h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

      <div className={sx.icons}>
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={js} alt="JavaScript" />
        <img src={react} alt="React" />
        <img src={ts} alt="TypeScript" />
      </div>
    </div>
  );
}
export default Skills;
