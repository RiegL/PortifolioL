import sx from './Card.module.css';
import ButtonB from './ButtonB';

function Card({title,img, desc1, desc2, site,repo}) {
    return(
        <div className={sx.card}>
            <a href={site} target='_blank'>
                <img src={img}/>
            </a>
            <section>
                <h3>Projeto {title}</h3>
                <p><strong>Tecnologias: </strong>{desc1}</p>
                <p>{desc2}</p>
                <a>
                <ButtonB text='Acesse o Repositório' link={repo}/>
                </a>
            </section>
        </div>
    )
}

export default Card