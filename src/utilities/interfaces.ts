/* FORMS */
export enum FormTypes {
    CREATE,
    UPDATE,
    DELETE
}

export enum FormFieldType {
    Textbox = "text",
    NumberRange = "number",
    SliderRange = "range",
    Checkboxes = "checkbox",
    RadioButtons = "radio",
    Image = "image",
    File = "file",
}

export interface FormFieldProps {
    name: string,
    type: FormFieldType,
    errorMsg?: string,
    format?: (string | number),
    invalidChars?: string,
    options?: (string[] | number[]),
    mandatory?: boolean,
    min?: number,
    max?: number
}

/* CREATE */
export interface CreateFormFieldProps extends FormFieldProps {}

