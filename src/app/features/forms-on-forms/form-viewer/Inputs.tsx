'use client';
import React from 'react';
import {
    CheckBoxGroup as CheckBoxGroupType,
    DateSelectorCalendar as DateSelectorCalendarType,
    DateSelectorText as DateSelectorTextType,
    DropdownSelect as DropdownSelectType,
    InputTypes,
    RadioSelect as RadioSelectType,
    TextInput as TextInputType
} from '../types/inputField';
import {
    CheckboxGroup,
    DateSelectCalendar,
    DateSelectTextInput,
    DropdownSelect,
    RadioSelect,
    TextInput
} from '@/app/components/inputs';

const Input = ({type, inputParams, onChange, key}: {
    type: InputTypes;
    inputParams: any;
    onChange: (id: number, value: string | string[] | Date) => void;
    key?: string;
}) => {
    const {id, label} = inputParams;

    switch (type) {
        case 'TEXT_INPUT':
            const {placeholder, value} = inputParams as TextInputType;
            return (
                <TextInput
                    key={key}
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onChange={(newValue: string) => onChange(id, newValue)}
                />
            );

        case 'DROPDOWN_SELECT':
            const {options, value: selectedValue} = inputParams as DropdownSelectType;
            return (
                <DropdownSelect
                    key={key}
                    label={label}
                    options={options}
                    value={selectedValue}
                    onChange={(newValue: string) => onChange(id, newValue)}
                    placeholder={''}/>
            );

        case 'CHECKBOX_GROUP':
            const {options: checkboxOptions, selected} = inputParams as CheckBoxGroupType;
            return (
                <CheckboxGroup
                    key={key}
                    label={label}
                    options={checkboxOptions}
                    selected={selected}
                    onChange={(newSelected: string[]) => onChange(id, newSelected)}
                />
            );

        case 'RADIO_SELECT':
            const {options: radioOptions, value: radioValue} = inputParams as RadioSelectType;
            return (
                <RadioSelect
                    key={key}
                    label={label}
                    options={radioOptions}
                    value={radioValue}
                    onChange={(newValue: string) => onChange(id, newValue)}
                />
            );

        case 'DATE_SELECTOR_TEXT':
            const {value: dateValueText} = inputParams as DateSelectorTextType;
            return (
                <DateSelectTextInput
                    key={key}
                    label={label}
                    value={dateValueText}
                    onChange={(newValue: Date) => onChange(id, newValue)}
                />
            );

        case 'DATE_SELECTOR_CALENDAR':
            const {value: dateValueCalendar} = inputParams as DateSelectorCalendarType;
            return (
                <DateSelectCalendar
                    key={key}
                    label={label}
                    value={dateValueCalendar}
                    onChange={(newValue: Date) => onChange(id, newValue)}
                />
            );

        default:
            return null;
    }
};

export const Inputs = ({inputs, onChange}: { inputs: any, onChange: (id: number, value: any) => void }) => {
    return (
        <>
            {/*@ts-ignore*/}
            {inputs.map(({type, ...rest}) => (
                <Input type={type}
                       inputParams={rest}
                       onChange={onChange}
                       key={`input-${type}`}
                />
            ))}
        </>
    )
}
