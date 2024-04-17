import React, { useState, useEffect } from "react";
import sx from "./Presentation.module.css";
import Button from "../elements/Button";

function Presentation() {
  const [text, setText] = useState("");
  const phrases = ["Léo Rieg :)", "desenvolvedor!!"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState("typing");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = phrases[currentPhraseIndex];
      if (typingDirection === "typing") {
        setText((prevText) => currentText.substring(0, prevText.length + 1));
        if (text === currentText) {
          setTypingDirection("deleting");
          clearInterval(interval);
        }
      } else if (typingDirection === "deleting") {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
        if (text === "") {
          setTypingDirection("typing");
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          clearInterval(interval);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [text, typingDirection, currentPhraseIndex, phrases]);

  return (
    <div className={sx.presentation} id="presentation">
      <h4>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h4>
      <h1>Olá,eu sou {text}</h1>
      <p>
        Estou empenhado em progredir na minha jornada profissional por meio de
        <br />
        estudos diários e desafios constantes. Com experiência em front-end,
        <br />
        estou determinado a me tornar um desenvolvedor full-stack. Apaixonado
        <br />
        por tecnologia, estou sempre pronto para aprender e evoluir. Meu
        <br />
        objetivo é contribuir com soluções inovadoras em projetos de destaque.
        <br />
      </p>
      <Button
        link="https://www.linkedin.com/in/l%C3%A9o-rieg-58b64514a/"
        text="Conecte-se comigo!!"
      />
    </div>
  );
}

export default Presentation;
