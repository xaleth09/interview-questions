'use client'

import React from 'react'
import {Card, Column, H2} from "@/app/components";
import {FormInstance} from "@/app/features/forms-on-forms/types/formInstance";

type Props = FormInstance & {
    handleInputChange: () => void;
}

export const FormViewer = ({
                               id,
                               title = 'Title',
                               inputFields,
                               handleInputChange,
                           }: Props) => {

    return (
        <Card>
            <H2>{id ? `${id}: ` : ''} {title}</H2>
            <Column flexGrow={1}>
                <p>Hello, World!</p>
            </Column>
        </Card>
    )
}
