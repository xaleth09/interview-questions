'use client';

import {apiResult1} from "@/app/data";
import {useState} from "react";

const Input = ({type, inputParams, onChange}: {
    type: 'TEXT_INPUT' | 'DROPDOWN_SELECT' | 'RADIO_OPTIONS' | 'CHECKLIST';
    inputParams: any;
    onChange: (id: number, value: string) => void;
}) => {
    switch (type) {
        case 'TEXT_INPUT':
            const {id, label, placeholder} = inputParams;
            return (
                <div>
                    <span>{label}</span>
                    <input
                        onChange={(event) => {
                            onChange(id, event.target.value)
                        }}
                        placeholder={placeholder}/>
                </div>
            )
        case 'DROPDOWN_SELECT':
            const {default_value, options} = inputParams;
            return (
                <select>
                    {options.map((option: string) => (
                        <option key={option} value={option.toLowerCase()}>
                            {option}
                        </option>
                    ))}
                </select>
            )
    }
}

const Inputs = ({inputs, onChange}: { inputs: any, onChange: (id: number, value: string) => void }) => {
    return (
        <>
            {/*@ts-ignore*/}
            {inputs.map(({type, ...rest}) => (
                <Input key={`input-${type}`} type={type} inputParams={rest} onChange={onChange}/>
            ))}
        </>
    )
}

export const ConfigurableForm = () => {
    const {title, page_title, inputs} = apiResult1;
    const [formInputData, setFormInputData] = useState({})

    const handleOnChange = (id: number, value: string) => {
        const updatedFormInputData = {...formInputData, [id]: value}
        setFormInputData(updatedFormInputData)
    }

    return (
        <div style={{padding: 100}}>
            <h1>{title}</h1>
            <h3>{page_title}</h3>
            <Inputs inputs={inputs} onChange={handleOnChange}/>
        </div>
    );
}
