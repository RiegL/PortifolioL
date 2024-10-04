import React, { useState } from "react";
import sx from "./Card.module.css";
import ButtonB from "./ButtonB";

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
      <section className={`${sx.cardSection} ${show ? sx.show : ""}`}>
        <h3>Projeto {title}</h3>
        <p>
          <strong>Tecnologias: </strong>
          {desc1}
        </p>
        <p>{desc2}</p>
        <div className={sx.buttonWrapper}>
          <ButtonB text="Acesse o Repositório" link={repo} />
        </div>
      </section>
      <a href={site} target="_blank" onMouseEnter={ShowCard}>
        <img src={img} alt={title} />
      </a>
    </div>
  );
}

export default Card;
