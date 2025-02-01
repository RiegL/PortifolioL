import React from "react";
import sx from "./Projects.module.css";
import ButtonB from "../elements/ButtonB";
import Card from "../elements/Card";
import weather from "../../images/weatherImg.jpg";
import page from "../../images/page.jpg";
import controle from "../../images/2v1.jpg";
import melipo from "../../images/melipo.png";
import printer from "../../images/dashboard.png";
import equipcare from "../../images/equipcare.png";

function Projects() {
  return (
    <div id="projects" className={sx.projects}>
      <h1>Projetos</h1>
      <div className={sx.cards}>
        <Card
          site="https://www.meliponariolenoirrieg.com.br/"
          img={melipo}
          title="Meliponário Lenoir Rieg"
          desc1="JavaScript, HTML, CSS"
          desc2="Website responsivo criado como parte de estudos e atualmente usado pelo meu pai para promover o trabalho com abelhas sem ferrão. Focado em exibir informações de forma clara e acessível. (privado)"
          repo="https://github.com/RiegL/meliponineos_rieg"
        />
        <Card
          site="https://equipacare-cme.vercel.app/"
          img={equipcare}
          title="Equipacare CME"
          desc1="NextJs, TS, TailwindCSS, MySQL, NodeJS, ExpressJS "
          desc2="A ferramenta foi desenvolvida com o objetivo de proporcionar uma solução digital para dimensionar equipamentos de esterilização em hospitais, apresentando cálculos precisos, recomendações de marcas, e captando leads qualificados para a Equipacare."
          repo="https://github.com/rodrigmeira/Equipacare-CME"
        />
        <Card
          img={printer}
          title="PrinterCheck"
          desc1="JavaScript, CSS, PostgreSQL"
          desc2="Sistema desenvolvido para gerenciar o conserto de impressoras. As informações são armazenadas localmente em um banco de dados, com um dashboard que exibe o status das impressoras e facilita o controle de reparos."
          repo="https://github.com/RiegL/PrinterCheckFront"
        />
        <Card
          site="https://2v-estoque.vercel.app/"
          img={controle}
          title="2V Controle de Estoque"
          desc1="React, JavaScript, TypeScript, CSS"
          desc2="Aplicação para controle de estoque, permitindo o gerenciamento de produtos de forma eficiente. Integrado com Firebase para armazenamento de dados. Projeto utilizado internamente. (privado)"
          repo="https://github.com/LabHasar/2v-estoque"
        />
        <Card
          site="https://dncweatherapp.netlify.app/"
          img={weather}
          title="DncWeather"
          desc1="HTML, CSS, JavaScript"
          desc2="Aplicação que consome APIs para fornecer informações sobre o clima e CEPs. Criada para prática de integração de APIs e responsividade."
          repo="https://github.com/RiegL/DNCweather"
        />
        <Card
          site="https://mellow-axolotl-de8d36.netlify.app/"
          img={page}
          title="Landing Page - Arquitetura"
          desc1="HTML, CSS"
          desc2="Landing page desenvolvida como estudo de design e layout responsivo, focada em exibir uma proposta moderna para um escritório de arquitetura."
          repo="https://github.com/RiegL/Landing-Page-Arquitetura"
        />
      </div>

      <div className={sx.button}>
        <ButtonB
          text="Ver repositório Completo"
          link="https://github.com/RiegL?tab=repositories"
        />
      </div>
    </div>
  );
}

export default Projects;
