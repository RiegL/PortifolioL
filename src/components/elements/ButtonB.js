import sx from "./ButtonB.module.css";

function ButtonB({text}) {
  return (
    <div>
      <button className={sx.btn}>{text}</button>
    </div>
  );
}

export default ButtonB;
