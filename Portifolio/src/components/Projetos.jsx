import styles from './Projetos.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaReact, FaCuttlefish, FaNodeJs } from 'react-icons/fa';
import rede_social from '../assets/rede_social.png';

export function Projetos() {
  return (
    <div id='Projetos' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.conhecimento}>
          <strong>Tecnologias</strong>
          <ul className={styles.timeline}>
            <li className={styles.htmlicon}>
              <FaHtml5 />
              <span>HTML</span>
            </li>
            <li className={styles.cssicon}>
              <FaCss3Alt />
              <span>CSS</span>
            </li>
            <li className={styles.jsicon}>
              <FaJs />
              <span>JavaScript</span>
            </li>
            <li className={styles.reacticon}>
              <FaReact />
              <span>React</span>
            </li>
            <li className={styles.pythonicon}>
              <FaPython />
              <span>Python</span>
            </li>
            <li className={styles.cicon}>
              <FaCuttlefish />
              <span>C++</span>
            </li>
            <li className={styles.nodeicon}> 
              <FaNodeJs />
              <span>Node.js</span>
            </li>
            <li className={styles.giticon}>
              <FaGitAlt />
              <span>Git/GitHub</span>
            </li>
          </ul>
          <div className={styles.projetos_grid}>
          <div className={styles.card1}>
            <img src={rede_social} alt="Projeto 1" />
            <div className={styles.card_content}>
              <h3>Rede Social</h3>
              <p>Exemplo de rede social onde é possivel fazer comentarios em posts, apagalos e aplaudir os mesmos.</p>
              <a href="https://rede-social-84du.vercel.app/"  className={styles.btn}>Ver Projeto</a>
            </div>
          </div>
          <div className={styles.card2}>
            <img src="projeto2.png" alt="Projeto 2" />
            <div className={styles.card_content}>
              <h3>Projeto 2</h3>
              <p>Exemplo de rede social onde é possivel fazer comentarios em posts, apagalos e aplaudir os mesmos.</p>
              <a href="https://www.projeto2.com" target="_blank" rel="noopener noreferrer" className={styles.btn}>Ver Projeto</a>
            </div>
          </div>
          <div className={styles.card3}>
            <img src="projeto3.png" alt="Projeto 3" />
            <div className={styles.card_content}>
              <h3>Projeto 3</h3>
              <p>Exemplo de rede social onde é possivel fazer comentarios em posts, apagalos e aplaudir os mesmos.</p>
              <a href="https://www.projeto3.com" target="_blank" rel="noopener noreferrer" className={styles.btn}>Ver Projeto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}