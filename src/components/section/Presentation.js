import sx from "./Presentation.module.css";
import Button from "../elements/Button";

function Presentation() {
  return (
    <div className={sx.presentation} id="presentation">
      <h4>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h4>
      <h1>Olá, eu sou Léo</h1>
      <p>
        Estou começando nesta nova jornada, todo dia estudando um pouco e<br/>
        tentando melhorar. Gosto de desafios para aprimorar minhas habilidades e<br/>
        meus conhecimentos. Não tenho dificuldade em trabalhar fora da minha<br/>
        zona de conforto sempre bom aprender coisas novas. Tenho conhecimento na<br/>
        parte front-end e estou me dedicando a ser um full-stack.<br/>
      </p>
      <Button link='https://github.com/RiegL' text='Conecte-se comigo!!'/>
    </div>
  );
}

export default Presentation;
