import React from 'react'
import classes from "./FormCard.module.css";

const FormCard = (props) => {
    return (
        <div className={classes.formCard}>
            {props.children}
        </div>
    );
}

export default FormCard;
