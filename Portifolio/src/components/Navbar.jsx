import styles from './Navbar.module.css';
import logoCaio from '../assets/logoCaio.svg'

export function Navbar() {
  return(
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoCaio} alt="Logo do Desenvolvedor" />
      </div>

      <a href="#">Inicio</a>
      <a href="#">Projetos</a>
      <a href="#">Contato</a>
    </div>
  )
}