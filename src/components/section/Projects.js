import React from 'react';
import sx from './Projects.module.css';
import ButtonB from '../elements/ButtonB';
import Card from '../elements/Card';
import weather from '../../images/weatherImg.jpg';
import page from '../../images/page.jpg';
import controle from '../../images/2v1.jpg';
import melipo from '../../images/melipo.png'

function Projects() {
  return (
    <div id="projects" className={sx.projects}>
      <h1>Projetos</h1>
      <div className={sx.cards}>
      <Card
        site='https://www.meliponariolenoirrieg.com.br/'
        img={melipo}
        title="Meliponário Lenoir Rieg"
        desc1="JS, HTML, CSS"
        desc2="Projeto realizado a fins de estudo 100% responsivo, hoje está sendo usado como um site para o trabalho do meu pai de cultivo de abelhas sem ferrão (privado)"
        repo="https://github.com/RiegL/meliponineos_rieg"
      />
      <Card
        site='https://2v-estoque.vercel.app/'
        img={controle}
        title="2V Controle de estoque"
        desc1="REACT, JS, TS, CSS"
        desc2="Projeto que realiza o controle de estoque. Utilizado o Firebase (privado)"
        repo="https://github.com/LabHasar/2v-estoque"
      />
      <Card
        site='https://dncweatherapp.netlify.app/'
        img={weather}
        title="DncWeather"
        desc1="HTML, CSS, JS"
        desc2="Projeto que realiza o consumo de API de cep e tempo "
        repo="https://github.com/RiegL/DNCweather"
      />
      <Card
        site='https://mellow-axolotl-de8d36.netlify.app/'
        img={page}
        title="Landing Page"
        desc1="HTML, CSS"
        desc2="Projeto realizado a fins de estudo de uma página de Arquitetura"
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
