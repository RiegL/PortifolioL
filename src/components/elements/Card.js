import sx from "./Card.module.css";
import ButtonB from "./ButtonB";
import { useState } from "react";

function Card({ title, img, desc1, desc2, site, repo }) {
  const [show, setShow] = useState(false);

  function ShowCard() {
    setShow(true);
  }

  function HidenCard() {
    setShow(false);
  }
  return (
    <div className={sx.card} onMouseLeave={HidenCard}>
      <a href={site} target="_blank" onMouseEnter={ShowCard}>
        <img src={img} />
      </a>
      {show === true && (
        <section>
          <h3>Projeto {title}</h3>
          <p>
            <strong>Tecnologias: </strong>
            {desc1}
          </p>
          <p>{desc2}</p>
          <a>
            <ButtonB text="Acesse o Repositório" link={repo} />
          </a>
        </section>
      )}
    </div>
  );
}

export default Card;
