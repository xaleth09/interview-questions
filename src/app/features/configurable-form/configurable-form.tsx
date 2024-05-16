'use client';

import {apiResult1} from "@/app/data";
import {useState} from "react";

const Input = ({type, rest, onChange}) => {
    switch (type) {
        case 'TEXT_INPUT':
            const {id, label, placeholder} = rest;
            return <div>
                <span>{label}</span>
                <input
                    onChange={(event) => {
                        onChange(id, event.target.value)
                    }}
                    placeholder={placeholder}/>
            </div>
        case 'DROPDOWN_SELECT':
            const {default_value, options} = rest;
            return (
                <select>
                    {options.map((option) => (
                        <option value={option.toLowerCase()}>
                            {option}
                        </option>
                    ))}
                </select>
            )
    }
}

const Inputs = ({inputs, onChange}) => {
    return (
        <>
            {inputs.map(({type, ...rest}) => (
                <Input type={type} rest={rest} onChange={onChange}/>
            ))}
        </>
    )
}

export const ConfigurableForm = () => {
    const {title, page_title, inputs} = apiResult1;
    const [formInputData, setFormInputData] = useState({})
    console.log("rawr", formInputData)

    const handleOnChange = (id, value) => {
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
