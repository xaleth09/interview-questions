'use client'

import React, {BaseSyntheticEvent, useState} from "react";
import data from "./medications.json";


type MedicationProps = {
    medications: any[];
    rowOnPress: (medication: any) => void
    queryString: string;
};


const Medications = ({queryString, medications, rowOnPress}: MedicationProps) => {
    return (
        <>
            {medications.map((medication) => {
                const {id, name, strength} = medication;
                const medicationStringRepresentation = `${id} ${name} - ${strength}`;
                const includedInFilter = `${name} ${strength}`.toLowerCase().match(queryString.toLowerCase())

                return includedInFilter ? (
                    <div key={medicationStringRepresentation}
                         onClick={() => {
                             rowOnPress(medication)
                         }}
                    >
                        {medicationStringRepresentation}
                    </div>
                ) : null;
            })}
        </>
    );
};

const MedicationsFilter = ({medications}: { medications: any[] }) => {
    const [query, setQuery] = useState<string>("");
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const handleChange = (event: BaseSyntheticEvent) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                value={query}
                placeholder="Search for medication"
                onChange={handleChange}
                onFocus={() => setShowOptions(true)}
            />
            {showOptions &&
                <Medications queryString={query} medications={medications} rowOnPress={({id, name, strength}) => {
                    const newFilterString = `${name} ${strength}`
                    setQuery(newFilterString)
                }}/>}
        </>
    );
}

function App() {
    const fakeAsyncValue = () => {
        return EVENTS_MAP.VIEWING
    }
    return <MedicationsFilter medications={data}/>
}


const EVENTS_MAP = {
    TYPING: {},
    VIEWING: {
        avatar_url: '',
        user_id: 1,
        user_name: 'Rawr'
    },
    LEAVING: {},
}

export default App;



