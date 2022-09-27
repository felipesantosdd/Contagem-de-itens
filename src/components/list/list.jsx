import React from "react";
import styles from "./styles.module.css";
export function Lista({ itens }) {

  function enviar(){
    window.print()
  }

  return (
    <div className={styles.container}>
      <ul>
        {itens.map((ele) => {
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
