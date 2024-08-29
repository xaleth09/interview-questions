'use client';

import React, {useState} from 'react'
import {Column, Row} from "@/app/components";
import {FormBuilder} from './form-builder';
import {SPACING} from "@/app/design-tokens";
import {FormInstance, FormInstanceMock1} from "@/app/features/forms-on-forms/types/formInstance";
import {FormViewer} from "@/app/features/forms-on-forms/form-viewer";
import styled from "styled-components";

const MinWidthCol = styled(Column)`
    min-width: 50%;

`

type Props = {
    formInstance?: FormInstance;
}

export const FormsOnForms = ({formInstance = FormInstanceMock1}: Props) => {
    const [currentFormInstance, setCurrentFormInstance] = useState(formInstance);

    const handleUpdateForm = (form: FormInstance) => {
        console.table(form)
        setCurrentFormInstance(form);
    }

    const handleUpdateInputField = ({id, key, value}: { id: number, key: string, value: any }) => {

    }

    const {id, inputFields, title} = currentFormInstance;

    return (
        <Row flexGrow={1} backgroundColor={'cornflowerblue'} gap={SPACING.MD.px}>
            <MinWidthCol>
                <FormBuilder
                    form={currentFormInstance}
                    onFormChange={handleUpdateForm}
                    onSave={() => {
                    }}
                />
            </MinWidthCol>
            <MinWidthCol>
                <FormViewer id={id} inputFields={inputFields} title={title} handleInputChange={() => {
                }}/>
            </MinWidthCol>
        </Row>
    )
}
