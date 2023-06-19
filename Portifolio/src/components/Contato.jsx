// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './Contato.module.css';

export function Contato() {
  return (
    <div id='Contato' className={styles.container}>
      <div className={styles.content2}>
        <h1>SE INTERESSOU PELO CONTEUDO?</h1>
        <h2>Nao perca a oportunidade</h2>
        <strong>Entre em contato pelos links no Menu de Navegação ou envie um email diretamente</strong>
      </div>

      <div className={styles.content1}>
        <h2 >Entre em contato</h2>
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
            <input type="submit" className="btn" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}