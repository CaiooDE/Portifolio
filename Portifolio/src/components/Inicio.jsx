import styles from './Inicio.module.css';
import fotoCaio from '../assets/fotoCaio.png';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

export function Inicio() {
  return (
    <div id='Inicio' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.perfil}>
          <img src={fotoCaio} alt="Foto de Perfil" className={styles.perfilImg} />
        </div>
        
        <h2 className={styles.subtitulo}>Desenvolvedor Front-end</h2>
        <p className={styles.descricao}>
          Olá! Meu nome é Caio Duarte Estrella e sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Atualmente trabalho na Empresa Junior Focus Consultoria como Desenvolvedor Web e Assessor Comercial.
        </p>

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

    </div>
  );
}

