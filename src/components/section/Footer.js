import sx from './Footer.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

function Footer() {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={sx.footer}>
      <ul>
        <li><a href='https://www.instagram.com/leorieg?igsh=MW0yMDNvejRqdnMyMQ%3D%3D&utm_source=qr' target='_blank' rel='noopener noreferrer'><FaInstagram size={30} /></a></li>
        <li><a href='https://github.com/RiegL' target='_blank' rel='noopener noreferrer'><FaGithub size={30} /></a></li>
        <li><a href='https://www.linkedin.com/in/l%C3%A9o-rieg-58b64514a/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={30} /></a></li>
      </ul>
      <p>leoorieg@gmail.com</p>
      <p>Léo Rieg © {currentTime.format('YYYY')} {currentTime.format('HH:mm:ss')}</p>
    </div>
  );
}

export default Footer;
