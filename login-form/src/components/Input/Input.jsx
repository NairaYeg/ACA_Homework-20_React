import React from 'react';
import style from './Input.module.css'

export default function Input({type, value, name, text, onChange, minLength, maxLength}) {
    return (
      <input
        className={style.input}
        type={type}
        value={value}
        name={name}
        placeholder={text}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
    );
  }

 
