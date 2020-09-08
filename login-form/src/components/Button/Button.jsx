import React from 'react';
import style from './Button.module.css'


export default function Button({ type, text, onClick }) {
    return (
      <button className={style.button} type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
  