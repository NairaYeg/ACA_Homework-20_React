import React from 'react';
import style from './Input.module.css'

export default function Input({type, value, text, onChange}) {
    return (
      <input
        type={type}
        value={value}
        placeholder={text}
        onChange={onChange}
        className={style.input}
      />
    );
  }