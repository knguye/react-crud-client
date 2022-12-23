import { Button, Panel } from './generics';
import { CreateFormFieldProps, FormFieldType, FormTypes  } from '../utilities/interfaces';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';



export function CreatePanel(props){
    const [active, setActive] = useState(false);
    const [createFormProps, setCreateFormProps] = useState([        
        {name: "Name", type: FormFieldType.Textbox, errorMsg: "Invalid name", invalidChars: ['!', '@'], format: "string"},
        {name: "Age", type:FormFieldType.NumberRange, errorMsg: "Age must be between 0 and 100", min: 0, max: 100, format: "number"},
        {name: "Sex", type: FormFieldType.RadioButtons, options: ["Male", "Female"], errorMsg: "Choose an option.", mandatory: true}
    ]);


    function createMenuHandleButtonClick() {
        setActive(true);
    }

    function cancelHandleButtonClick() {
        setActive(false);
    }

    function createHandleButtonClick() {
        // TODO: Form validation?
        // TODO: Create entry in DB 
    }

    if (active){
        return (
            <>
                <Panel form={createFormProps}>
                    <Button animated={true} handleClick={createHandleButtonClick} color={`green`}>Create</Button>
                    <Button animated={true} handleClick={cancelHandleButtonClick} color={`red`}>Cancel</Button>
                </Panel>
            </>
        );
    }

    return (
        <CreateButton handleClick={createMenuHandleButtonClick}></CreateButton>
    )
}

export function CreateButton(props, form:CreateFormFieldProps[]) {
    return (
        <Button animated={true} handleClick={props.handleClick}>
            Create
        </Button>
    )
}

