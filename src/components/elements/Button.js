import sx from "./Button.module.css";

function Button({text, link}) {
  return (
    <div>
      <a href={link} target="_blank">
      <button className={sx.btn}>{text}</button>
      </a>
    </div>
  );
}

export default Button;
