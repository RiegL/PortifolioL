import React from 'react';
import sx from './Navbar.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <div className={sx.navbar}>
            <ul className={sx.navLinks}>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
            </ul>
            <ul className={sx.socialLinks}>
                <li><a href='https://www.instagram.com/leorieg?igsh=MW0yMDNvejRqdnMyMQ%3D%3D&utm_source=qr' target='_blank' rel="noopener noreferrer"><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/RiegL' target='_blank' rel="noopener noreferrer"><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/l%C3%A9o-rieg-58b64514a/' target='_blank' rel="noopener noreferrer"><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    );
}

export default Navbar;
