import React from "react";
import styles from "./styles.module.css";
export function Lista({ bebidas, destilados, naturais, sobremesa, outros }) {
  function enviar() {
    window.print();
  }

  return (
    <div className={styles.container}>
      <ul>
        <h2>Bebidas</h2>
        {bebidas.map((ele) => {
          return (
            <li key={ele}>
              <label className={styles.label}>{ele}</label>
              <input id={ele} className={styles.textArea} type="text" />
            </li>
          );
        })}

        <h2>Destilados</h2>
        {destilados.map((ele) => {
          return (
            <li key={ele}>
              <label className={styles.label}>{ele}</label>
              <input id={ele} className={styles.textArea} type="text" />
            </li>
          );
        })}

        <h2>Naturais</h2>
        {naturais.map((ele) => {
          return (
            <li key={ele}>
              <label className={styles.label}>{ele}</label>
              <input id={ele} className={styles.textArea} type="text" />
            </li>
          );
        })}

        <h2>Sobremesa</h2>
        {sobremesa.map((ele) => {
          return (
            <li key={ele}>
              <label className={styles.label}>{ele}</label>
              <input id={ele} className={styles.textArea} type="text" />
            </li>
          );
        })}

        <h2>Outros</h2>
        {outros.map((ele) => {
          return (
            <li key={ele}>
              <label className={styles.label}>{ele}</label>
              <input id={ele} className={styles.textArea} type="text" />
            </li>
          );
        })}




        <li key="ass">
          <input
            id="assinatura"
            className={styles.Assinatura}
            type="text"
            placeholder="Seu Nome"
          />
        </li>
        <button onClick={() => enviar()} id="Enviar" className={styles.button}>
          Enviar
        </button>
      </ul>
    </div>
  );
}
