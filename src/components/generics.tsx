import '../styles/generics.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { FormFieldProps }from '../utilities/interfaces';
import PropTypes from "prop-types";


export function Button(props) {
    const color = props.color ? `--${props.color}` : ``;
    const style = props.styleName ? props.styleName : ``;

    if (props.animated){
        return (
            <button className={`button${color} flash-slide  ${style}`} onClick={props.handleClick}>
                {props.children}
            </button>
        )    
    } 

    return (
            <button className={`button${color} ${style}`} onClick={props.handleClick}>
                {props.children}
            </button>
    )
}

function FormField(props){  
    const [fieldValue, setFieldValue] = useState("");
    const [fieldIsInErrorState, setFieldIsInErrorState] = useState(false);

    const handleChange = (event) => {
        setFieldValue(event.target.value);
    }

    useEffect(() => {
        //Form validation
        if (props.format === "string" && fieldValue && props.invalidChars){
            var invalidCharFound = false;
            for (var i = 0; i < props.invalidChars.length; i++){
                if (fieldValue.includes(props.invalidChars[i])){
                    invalidCharFound = true;
                }
            }
            if (invalidCharFound){
                setFieldIsInErrorState(true);
            }
            else {
                setFieldIsInErrorState(false);
            }

        }
        else if (props.format === "number" && fieldValue ){
            if (parseInt(fieldValue) > props.max || parseInt(fieldValue) < props.min){
                setFieldIsInErrorState(true);
            }
            else {
                setFieldIsInErrorState(false);
            }
        }
    })

    if (props.options){
        return (
            <fieldset id={props.name}>
                    <label htmlFor={props.name}>{props.name}</label>
                {
                    props.options.map((val:string) => (
                        <>
                            <label htmlFor={val}>{val}</label>
                            <input type={props.type} id={val} name={props.name} value={val}/>
                            {fieldIsInErrorState && <p className={`error-text`}>{props.errorMsg}</p>}
                        </>
                    ))
                }
            </fieldset>
        )
    }
    
    else {
        var element = <input id={props.name} name={props.name} type={props.type} onChange={handleChange}/>

        if (props.format === "number" && (props.min || props.max)){
            element = <input id={props.name} name={props.name} type={props.type} min={props.min} max={props.max} onChange={handleChange}/>
        }


        return (
            <fieldset>
                <label htmlFor={props.name}>{props.name}</label>
                {element}
                {fieldIsInErrorState && <p className={`error-text`}>{props.errorMsg}</p>}
            </fieldset>
        )
    }
}

export function Panel(props){
    const [formFields, setFormFields] = useState();

    useEffect(() => {
        setFormFields(props.form.map((val) => 
        ( <FormField name={val.name} type={val.type} options={val.options} errorMsg={val.errorMsg} 
                        format={val.format} invalidChars={val.invalidChars} min={val.min} max={val.max}></FormField> 
        )
        ));
    }, [props.form]);

    return (
        <div id={props.id} className={`panel shadowed`}>
            <div>
                {formFields}
            </div>
            {props.children}
        </div>
    )
}

