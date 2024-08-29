import React, {useState} from 'react'
import {FormInstance, FormInstanceMock1} from "@/app/features/forms-on-forms/types/formInstance";
import {FormViewer} from "@/app/features/forms-on-forms/form-viewer";

type Props = {
    formInstance: FormInstance;
}

export const FormInstanceViewer = ({formInstance = FormInstanceMock1}: Props) => {
    const [currentFormInstance, setCurrentFormInstance] = useState(formInstance)

    const {
        id,
        inputFields,
        title
    } = formInstance

    return (
        <FormViewer id={id} inputFields={inputFields} title={title} handleInputChange={() => {
        }}/>
    )
}
