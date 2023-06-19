// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styles from './Contato.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export function Contato() {
  const [alertText, setAlertText] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCopyPhoneNumber = () => {
    const phoneNumber = '+55 (21) 98997-0805';
    navigator.clipboard.writeText(phoneNumber);
    setAlertText('Copiado para a área de transferência!');
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  const floatingAlertStyle = {
    position: 'fixed',
    top: mousePosition.y,
    left: mousePosition.x,
    display: alertVisible ? 'block' : 'none',
  };

  return (
    <div id="Contato" className={styles.container}>
      <div className={styles.content2}>
        <h1>SE INTERESSOU PELO CONTEUDO?</h1>
        <h2>Não perca a oportunidade</h2>
        <strong>
          Entre em contato pelos links no Menu de Navegação ou envie um email diretamente para{' '}
          <a className={styles.mailtext} href="mailto:cderrecaio@gmail.com">
            cderrecaio@gmail.com
          </a>
        </strong>
        <div className={styles.contactInfo}>
          <p onClick={handleCopyPhoneNumber}>
            <strong>
              <FaWhatsapp size={20} /> {' '}Telefone:
            </strong>{' '}
            +55 (21) 98997-0805
          </p>
        </div>
      </div>

      <div className={styles.content1}>
        <h2>Entre em contato</h2>
        <form action="enviar_email.php" method="POST">
          <div className={styles.formgroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className={styles.formgroup}>
            <input type="submit" className={styles.btn} value="Enviar" />
          </div>
        </form>
      </div>

      <div className={styles.floatingAlert} style={floatingAlertStyle}>
        <div className={styles.infoBalloon}>
          {alertText}
        </div>
      </div>
    </div>
  );
}
