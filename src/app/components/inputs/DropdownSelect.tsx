import * as React from "react"
import {useMemo, useState} from "react"
import {DropDownOption} from "@/app/features/forms-on-forms/types/inputField";
import {Card, Column, H3, Row} from "@/app/components";
import styled from "styled-components";
import {SIZES, SPACING} from "@/app/design-tokens";

const Option = styled(Row)<{ isLast: boolean }>`
    cursor: pointer;
    padding: ${SPACING.XXS.px};
    ${({isLast}) => !isLast ? `
        border-bottom: 1px solid grey;
    ` : ``};

    &:hover {
        background-color: lightblue;
    }
`

const DropDownContainer = styled(Row)`
    border: 1px solid black;
    border-radius: 4px;
    padding: ${SIZES.XXS.px};
    cursor: pointer;
`

type Props = {
    options: DropDownOption[];
    placeholder: any;
    label: any;
    value?: string | null | undefined;
    onChange: (value: string) => void;
}

export const DropdownSelect = ({options = [], placeholder, label, value, onChange}: Props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const displayString = useMemo(() => {
        const placeholderDisplayString = placeholder || 'Select an option...'
        return value
            ? options.find((option) => option.value === value)?.label
            : placeholderDisplayString
    }, [placeholder, value, options])

    return (
        <Column>
            <H3>{label}</H3>
            <DropDownContainer spaceBetween onClick={open ? handleClose : handleOpen}>
                <span>{displayString}</span>
                ⌄
            </DropDownContainer>
            {open ? (
                <Card>
                    {options.map(({value, label}, index) => {

                        return (
                            <Option
                                key={`${index}-${value}-${label}`}
                                isLast={index === options.length - 1}
                                onClick={() => {
                                    onChange(value)
                                    handleClose()
                                }}
                            >
                                {label}
                            </Option>
                        )
                    })}
                </Card>
            ) : null}
        </Column>
    )
}
