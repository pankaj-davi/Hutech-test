import React, { Fragment } from 'react';
import classes from "./FormControl.module.css";

const FormControl = (props) => {

    const { items , nestedItem } = props;

    const renderInputsControl = items.map((item, idx) => {

        const { label, htmlFor, type, value, onBlur, onChange, id, placeholder, error, errorMessage } = item;
        
        const errorClassName = error ? `${classes.control} ${classes.invalid}` : `${classes.control}`;

        return (
            <div className={errorClassName} key={idx} >
                {label && <label htmlFor={htmlFor}>{label}</label>}
                <input type={type} id={id} onChange={onChange} value={value} onBlur={onBlur} placeholder={placeholder} />
                {error && <p className={classes.errorBorder}>{errorMessage}</p>}
                
            </div>
        );
    });

    const nestedInputsControl = nestedItem.map((item, idx) => {

        const { label, htmlFor, type, value, onBlur, onChange, id, placeholder, error, errorMessage } = item;
    
        return (
            
            <div key={idx}>
                {label && <label htmlFor={htmlFor}>{label}</label>}
                <input type={type} id={id} onChange={onChange} value={value} onBlur={onBlur} placeholder={placeholder} />
                {error && <p className={classes.errorBorder}>{errorMessage}</p>}
                
            </div>
        );
    });


    return (
        <Fragment>
            {renderInputsControl}
            <div className={classes.nestedInput} >
                {nestedInputsControl}
            </div>
        </Fragment>
    );
};

export default FormControl;
