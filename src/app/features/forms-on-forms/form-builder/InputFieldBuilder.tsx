import React from 'react';
import {
    DropDownOption,
    DropdownSelect as DropdownSelectType,
    InputField,
    TextInput as TextInputType
} from "@/app/features/forms-on-forms/types/inputField";
import {Column} from "@/app/components";
import {SPACING} from "@/app/design-tokens";

type Props = {
    inputField: InputField;
    onChange: (key: string, value: any) => void;
}

export const InputFieldBuilder = ({inputField, onChange}: Props) => {

    switch (inputField.type) {
        case 'TEXT_INPUT':
            const textField = inputField as TextInputType;
            return (
                <Column gap={SPACING.XS.px}>
                    <label>Label</label>
                    <input
                        type="text"
                        value={textField.label || ''}
                        onChange={(e) => onChange('label', e.target.value)}
                    />
                    <label>Placeholder</label>
                    <input
                        type="text"
                        value={textField.placeholder || ''}
                        onChange={(e) => onChange('placeholder', e.target.value)}
                    />
                    <label>Value</label>
                    <input
                        type="text"
                        value={textField.value}
                        onChange={(e) => onChange('value', e.target.value)}
                    />
                </Column>
            );

        case 'DROPDOWN_SELECT':
            const dropdownField = inputField as DropdownSelectType;
            return (
                <Column gap={SPACING.XS.px}>
                    <label>Label</label>
                    <input
                        type="text"
                        value={dropdownField.label || ''}
                        onChange={(e) => onChange('label', e.target.value)}
                    />
                    <label>Placeholder</label>
                    <input
                        type="text"
                        value={dropdownField.placeholder || ''}
                        onChange={(e) => onChange('placeholder', e.target.value)}
                    />
                    <label>Options</label>
                    {dropdownField.options?.map((option: DropDownOption, index: number) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={option.label}
                                onChange={(e) => onChange(`options[${index}].label`, e.target.value)}
                            />
                            <input
                                type="text"
                                value={option.value}
                                onChange={(e) => onChange(`options[${index}].value`, e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => {
                    }}>Add Option
                    </button>
                    <label>Value</label>
                    <input
                        type="text"
                        value={dropdownField.value}
                        onChange={(e) => onChange('value', e.target.value)}
                    />
                </Column>
            );

        case 'CHECKBOX_GROUP':
            const checkboxField = inputField as any;
            return (
                <Column gap={SPACING.XS.px}>
                    <label>Label</label>
                    <input
                        type="text"
                        value={checkboxField.label || ''}
                        onChange={(e) => onChange('label', e.target.value)}
                    />
                    <label>Options</label>
                    {checkboxField.options?.map((option: any, index: number) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={option.label}
                                onChange={(e) => onChange(`options[${index}].label`, e.target.value)}
                            />
                            <input
                                type="text"
                                value={option.value}
                                onChange={(e) => onChange(`options[${index}].value`, e.target.value)}
                            />
                            {option.subLabel && (
                                <input
                                    type="text"
                                    value={option.subLabel}
                                    onChange={(e) => onChange(`options[${index}].subLabel`, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={() => {
                    }}>Add Option
                    </button>
                    <label>Selected Values</label>
                    <input
                        type="text"
                        value={checkboxField.selected?.join(', ')}
                        onChange={(e) => onChange('selected', e.target.value.split(', '))}
                    />
                </Column>
            );

        case 'RADIO_SELECT':
            const radioField = inputField as any;
            return (
                <Column gap={SPACING.XS.px}>
                    <label>Label</label>
                    <input
                        type="text"
                        value={radioField.label || ''}
                        onChange={(e) => onChange('label', e.target.value)}
                    />
                    <label>Options</label>
                    {/*@ts-ignore*/}
                    {radioField.options?.map((option, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={option.label}
                                onChange={(e) => onChange(`options[${index}].label`, e.target.value)}
                            />
                            <input
                                type="text"
                                value={option.value}
                                onChange={(e) => onChange(`options[${index}].value`, e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => {
                    }}>Add Option
                    </button>
                    <label>Value</label>
                    <input
                        type="text"
                        value={radioField.value}
                        onChange={(e) => onChange('value', e.target.value)}
                    />
                </Column>
            );

        case 'DATE_SELECTOR_TEXT':
            const dateTextField = inputField as any;
            return (
                <Column gap={SPACING.XS.px}>
                    <label>Label</label>
                    <input
                        type="text"
                        value={dateTextField.label || ''}
                        onChange={(e) => onChange('label', e.target.value)}
                    />
                    <label>Value</label>
                    <input
                        type="date"
                        value={dateTextField.value?.toISOString().substring(0, 10)}
                        onChange={(e) => onChange('value', new Date(e.target.value))}
                    />
                </Column>
            );

        case 'DATE_SELECTOR_CALENDAR':
            const dateCalendarField = inputField as any;
            return (
                <Column gap={SPACING.XS.px}>
                    <label>Label</label>
                    <input
                        type="text"
                        value={dateCalendarField.label || ''}
                        onChange={(e) => onChange('label', e.target.value)}
                    />
                    <label>Value</label>
                    <input
                        type="date"
                        value={dateCalendarField.value?.toISOString().substring(0, 10)}
                        onChange={(e) => onChange('value', new Date(e.target.value))}
                    />
                </Column>
            );

        default:
            return <div>Unknown Input Type</div>;
    }
};
