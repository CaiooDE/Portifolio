import styles from './Projetos.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaReact, FaCuttlefish, FaNodeJs } from 'react-icons/fa';
import rede_social from '../assets/rede_social.png';
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Rede Social',
    image: rede_social,
    description: 'Exemplo de rede social onde é possível fazer comentários em posts, apagá-los e aplaudir os mesmos.',
    link: 'https://rede-social-84du.vercel.app/'
  },
  { id: 2, name: 'Projeto 2' },
  { id: 3, name: 'Projeto 3' },
  { id: 4, name: 'Projeto 4' },
  { id: 5, name: 'Projeto 5' },
  { id: 6, name: 'Projeto 6' },
  // Adicione mais projetos se necessário
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevbutton} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={styles.slidescontainer}>
        {projects.slice(currentSlide, currentSlide + 3).map((project) => (
          <div key={project.id} className={styles.slide}>
            <div className={styles.card1}>
              <img src={project.image} alt={project.name} />
              <div className={styles.card_content}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} className={styles.btn}>Ver Projeto</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.nextbutton} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

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
          <Carousel />
        </div>
      </div>
    </div>
  );
}
