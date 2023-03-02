import React from "react";
import styles from './Input.module.css'

function Input({text, type, name, placeholder, handleOnChange, value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
            id={name} 
            name={name} 
            type={type} 
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value} />
        </div>
    )
}

export default Input