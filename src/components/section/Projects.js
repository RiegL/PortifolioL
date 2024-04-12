import React from 'react';
import sx from './Projects.module.css';
import ButtonB from '../elements/ButtonB';
import Card from '../elements/Card';
import weather from '../../images/weatherImg.jpg';
import page from '../../images/page.jpg';
import controle from '../../images/2v1.jpg';

function Projects() {
  return (
    <div id="projects" className={sx.projects}>
      <h1>Projetos</h1>
      <div className={sx.cards}>
      <Card
        img={controle}
        title="2V Controle de estoque"
        desc1="REACT, JS, TS, CSS"
        desc2="Projeto que realiza o controle de estoque em tempo real com o Firebase"
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
