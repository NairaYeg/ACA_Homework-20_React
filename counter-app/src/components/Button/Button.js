import React from 'react';
import styles from "./Button.module.css";

export default function Button({text, onClick, disabled}){
return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>{text}</button>
)
 
}

