import React from "react";
import styles from "./style.module.css";
export function Header(){
    return (
        <div className={styles.header}>
            <h2 className={styles.titulo}>Contagem Do Bar</h2>
        </div>
    )
}