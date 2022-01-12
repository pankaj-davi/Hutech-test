import React from 'react';
import classes from "./Button.module.css";

const Button = (props) => {

    const classesName =`${classes.btn}` + " " + `${props.className}`; 


    return (
        <button type={props.type} onClick={props.onClick} disabled={props.disabled && props.disabled } className={classesName} >
            {props.title}
        </button>
    )
}

export default Button
