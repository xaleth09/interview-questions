import React from 'react'
import {Button, Card, Column} from "@/app/components";
import {DropdownSelect} from "@/app/components/inputs";
import {Separator} from "@/app/components/Seperator";
import {SPACING} from "@/app/design-tokens";
import {FormInstance} from "@/app/features/forms-on-forms/types/formInstance";
import {InputFieldBuilder} from "@/app/features/forms-on-forms/form-builder/InputFieldBuilder";
import {deepClone} from "@/lib/utils";
import styled from "styled-components";

const INPUT_FIELD_OPTIONS = [{
    label: 'Text Input',
    value: 'TEXT_INPUT'
}, {
    label: 'Dropdown Select',
    value: 'DROPDOWN_SELECT'
}, {
    label: 'Checkbox Group',
    value: 'CHECKBOX_GROUP'
}, {
    label: 'Radio Select',
    value: 'RADIO_SELECT'
}, {
    label: 'Date Selector Text',
    value: 'DATE_SELECTOR_TEXT'
}, {
    label: 'Date Selector Calendar',
    value: 'DATE_SELECTOR_CALENDAR'
}];

const FieldsEditorSection = styled(Column)`
    margin-top: ${SPACING.MD.px};
    margin-bottom: ${SPACING.XL.px};
`

type Props = {
    form: FormInstance;
    onSave: any;
    onFormChange: any;
}

export const FormBuilder = ({form, onFormChange, onSave}: Props) => {
    const {inputFields, title} = form;

    const handleUpdateForm = ({key, value}: { key: string, value: any }) => {
        const updatedForm = deepClone(form);
        updatedForm[key] = value;
        onFormChange(updatedForm)
    }

    // would prolly move this to local component state, debounce, when done /then/ call handleUpdateForm
    const handleUpdateFormName = (e: any) => {
        handleUpdateForm({key: 'title', value: e.target.value})
    }

    const handleUpdateField = ({id, key, value}: { id: string, key: string, value: any }) => {
        const updatedInputFields = deepClone(inputFields)
        const inputField = updatedInputFields[id]
        updatedInputFields[id] = {...inputField, [key]: value}
        handleUpdateForm({key: 'inputFields', value: updatedInputFields})
    }

    const handleAddNewFieldToForm = ({}) => {
        const fakeUniqueId = new Date().toISOString();
        const updatedInputFields = deepClone(inputFields)
        updatedInputFields[fakeUniqueId] = {
            type: null,
            label: null
        }
        handleUpdateForm({key: 'inputFields', value: updatedInputFields})
    }

    const handleDeleteInputField = (id: string) => {
        const updatedInputFields = deepClone(inputFields)
        delete updatedInputFields[id];
        handleUpdateForm({key: 'inputFields', value: updatedInputFields})
    }

    const handleOnSave = () => {
        onSave(form)
    }

    return (
        <Card>
            <input placeholder={"Please enter a title for your form"} value={title} onChange={handleUpdateFormName}/>
            <FieldsEditorSection flexGrow={1} spaceBetween>
                <Column gap={SPACING.LG.px}>
                    {Object.entries(inputFields).map(([id, inputField]) => {
                        const {type, label, ...inputParams} = inputField
                        return (
                            <Column gap={SPACING.XS.px} key={id}>
                                <DropdownSelect
                                    options={INPUT_FIELD_OPTIONS} placeholder={'Select an InputField to add...'}
                                    label={label}
                                    value={type}
                                    onChange={(value) => {
                                        handleUpdateField({
                                            id,
                                            key: 'type',
                                            value,
                                        })
                                    }}
                                />
                                {type ? <InputFieldBuilder inputField={inputField} onChange={() => {
                                }}/> : null}
                                {Object.keys(inputFields).length > 1 ? (
                                    <>
                                        <Button onClick={() => {
                                            handleDeleteInputField(id)
                                        }}>
                                            Remove input field
                                        </Button>
                                        <Separator topMargin={SPACING.XXXS.px} bottomMargin={SPACING.SM.px}/>
                                    </>
                                ) : null}
                            </Column>
                        )
                    })}
                    <Button onClick={handleAddNewFieldToForm}>
                        Add input field
                    </Button>
                </Column>
            </FieldsEditorSection>
            <Button onClick={handleOnSave}>
                Save form
            </Button>
        </Card>
    )
}
