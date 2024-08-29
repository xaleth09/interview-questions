import React, {useState} from 'react'
import {Column, H3} from "@/app/components";
import {SPACING} from "@/app/design-tokens";
import {Checkbox} from "@/app/components/inputs/Checkbox";
import {CheckboxOption} from "@/app/features/forms-on-forms/types/inputField";

type Props = {
    label: string | number;
    options: CheckboxOption[];
    onChange: (newSelected: string[]) => void;
    selected: string[];
}

export const CheckboxGroup = ({label, options = [], onChange}: Props) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleSelectId = (value: string) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter((selectedValue) => selectedValue !== value))
        } else {
            setSelectedValues([...selectedValues, value])
        }
    }

    return (
        <Column gap={SPACING.MD.px}>
            <H3>{label}</H3>
            {options.map((option) => {
                const {
                    value,
                    label,
                    subLabel,
                } = option;
                const selected = selectedValues.includes(value)

                return (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Checkbox
                        key={value}
                        value={value}
                        label={label}
                        subLabel={subLabel}
                        handleSelect={handleSelectId}
                    />
                )
            })}
        </Column>
    )
}
