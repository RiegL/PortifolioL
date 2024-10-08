import sx from "./ButtonB.module.css";

function ButtonB({ text, link }) {
  return (
    <div>
      <a href={link} target="_blank">
        <button className={sx.btn}>{text}</button>
      </a>
    </div>
  );
}

export default ButtonB;
