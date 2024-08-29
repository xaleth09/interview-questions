import {SPACING} from "@/app/design-tokens";
import React from "react";
import {CheckboxOption} from "@/app/features/forms-on-forms/types/inputField";
import styled from "styled-components";

const ClickableLabel = styled.label`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: ${SPACING.XXS.px};
`

type CheckboxProps = CheckboxOption & {
    handleSelect: (value: string) => void;
}

export const Checkbox = ({value, label, subLabel, handleSelect}: CheckboxProps) => {
    return (
        <ClickableLabel htmlFor={value}>
            <input type={'checkbox'} id={value}/>
            <span>
                {label}
            </span>
            {subLabel ? <span>
                {subLabel}
            </span> : null}
        </ClickableLabel>
    )
}
