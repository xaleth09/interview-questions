export type InputTypes = 'TEXT_INPUT'
    | 'DROPDOWN_SELECT'
    | 'CHECKBOX_GROUP'
    | 'RADIO_SELECT'
    | 'DATE_SELECTOR_TEXT'
    | 'DATE_SELECTOR_CALENDAR';

export interface InputBase {
    type: InputTypes | null | undefined;
    label: string | null;
}

export interface TextInput extends InputBase {
    type: 'TEXT_INPUT';
    placeholder?: string;
    value: string;
}

export type DropDownOption = {
    value: string;
    label: string;
}

export interface DropdownSelect extends InputBase {
    type: 'DROPDOWN_SELECT';
    placeholder?: string;
    options: DropDownOption[];
    value: string;
}

export type CheckboxOption = {
    // id: string | number
    value: string;
    label: string;
    subLabel?: string;
}

export interface CheckBoxGroup extends InputBase {
    type: 'CHECKBOX_GROUP';
    options: CheckboxOption[];
    selected: string[]
}

export interface RadioSelect extends InputBase {
    type: 'RADIO_SELECT';
    options: { value: string; label: string }[];
    value: string;
}

export interface DateSelectorText extends InputBase {
    type: 'DATE_SELECTOR_TEXT';
    value: Date;
}

export interface DateSelectorCalendar extends InputBase {
    type: 'DATE_SELECTOR_CALENDAR';
    value: Date;
}

export type InputField = InputBase
    | TextInput
    | DropdownSelect
    | CheckBoxGroup
    | RadioSelect
    | DateSelectorText
    | DateSelectorCalendar;
