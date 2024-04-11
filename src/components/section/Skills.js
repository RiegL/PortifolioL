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

      <div>
        <img src={html} />
        <img src={css} />
        <img src={js} />
        <img src={react} />
        <img src={ts} />
      </div>
    </div>
  );
}
export default Skills;
