import styles from './Navbar.module.css';
import logoCaio from '../assets/logoCaio.png';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoCaio} alt="Logo do Desenvolvedor" />
      </div>

      <div className={styles.ancoras}>
        <a href="#">Inicio</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
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
