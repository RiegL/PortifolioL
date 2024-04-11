import sx from './Card.module.css';
import ButtonB from './ButtonB';

function Card({title,img, desc1, desc2, link}) {
    return(
        <div className={sx.card}>
            <img src={img}/>
            <section>
                <h3>Projeto {title}</h3>
                <p><strong>Tecnologias: </strong>{desc1}</p>
                <p>{desc2}</p>
                <a>
                <ButtonB text='Acesse o Repositório' link={link}/>
                </a>
            </section>
        </div>
    )
}

export default Card