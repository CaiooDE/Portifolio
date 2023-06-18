import styles from './Navbar.module.css';
import logoCaio from '../assets/logoCaio.png';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { Inicio } from './Inicio.jsx';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoCaio} alt="Logo do Desenvolvedor" />
      </div>

      <div className={styles.ancoras}>
        <a href="#Inicio">Inicio</a>
        <a href="#Projetos">Projetos</a>
        <a href="#Contato">Contato</a>
      </div>

      <footer className={styles.footer}>
        <a href="https://github.com/CaiooDE" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/caio-duarte-estrella-081377248/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin size={25} />
        </a>
        <a href="https://t.me/caiodestrella" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTelegram size={25} />
        </a>
      </footer>
    </div>
  );
}
