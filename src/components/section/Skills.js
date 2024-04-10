import sx from "./Skills.module.css";
import html from "../../images/html.svg";
import js from "../../images/js.svg";
import css from "../../images/css.svg";
import ts from "../../images/ts.svg";

function Skills() {
  return (
    <div id="skills" className={sx.skills}>
      <h1>
        <strong>Habilidades</strong>
      </h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <ul>
        <li>
          <img src={html} />
          <img src={css} />
          <img src={js} />
          <img src={ts} />
        </li>
      </ul>
    </div>
  );
}
export default Skills;
