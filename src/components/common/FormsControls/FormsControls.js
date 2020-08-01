import React from 'react';
import s from './FormsControls.module.css'
import { Field } from 'redux-form';

export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
        
    )
}

export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
        
    )
}

export const createNewField = (placeholder, name, validators, component, props = {}, text ="") => {
    return (
        <div>
            <Field component={component} name={name} placeholder={placeholder}
                validate={validators} {...props}
            />{text}
        </div>
    )
}