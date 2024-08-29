import {InputField} from "./inputField";

export type FormInstance = {
    id: number;
    title: string;
    // page: number;
    // page_title: string;
    inputFields: { [id: number]: InputField };
};

export const newFormInstance = {
    id: 1337,
    title: 'I need a name',
    inputFields: {[new Date().toISOString()]: {type: null, label: null}}
}

export const FormInstanceMock1: FormInstance = {
    id: 1,
    title: "User Registration Form",
    inputFields: {
        1: {
            type: "TEXT_INPUT" as const,
            label: "Full Name",
            placeholder: "Enter your full name",
            value: ""
        },
        2: {
            type: "DROPDOWN_SELECT" as const,
            label: "Country",
            options: [
                {value: "us", label: "United States"},
                {value: "ca", label: "Canada"},
                {value: "uk", label: "United Kingdom"}
            ],
            value: "us"
        },
        3: {
            type: "CHECKBOX_GROUP" as const,
            label: "Interests",
            options: [
                {value: "sports", label: "Sports"},
                {value: "music", label: "Music"},
                {value: "travel", label: "Travel"}
            ],
            selected: ["music", "travel"]
        },
        4: {
            type: "RADIO_SELECT" as const,
            label: "Gender",
            options: [
                {value: "male", label: "Male"},
                {value: "female", label: "Female"},
                {value: "other", label: "Other"}
            ],
            value: "male"
        },
        5: {
            type: "DATE_SELECTOR_TEXT" as const,
            label: "Date of Birth",
            value: new Date("1990-01-01")
        }
    }
};

export const FormInstanceMock2: FormInstance = {
    id: 2,
    title: "Event Registration Form",
    inputFields: {
        1: {
            type: "TEXT_INPUT" as const,
            label: "Event Name",
            placeholder: "Enter the event name",
            value: "Annual Conference 2024"
        },
        2: {
            type: "DROPDOWN_SELECT" as const,
            label: "Ticket Type",
            options: [
                {value: "vip", label: "VIP"},
                {value: "standard", label: "Standard"},
                {value: "student", label: "Student"}
            ],
            value: "standard"
        },
        3: {
            type: "CHECKBOX_GROUP" as const,
            label: "Meal Preferences",
            options: [
                {value: "vegetarian", label: "Vegetarian"},
                {value: "vegan", label: "Vegan"},
                {value: "gluten_free", label: "Gluten-Free"}
            ],
            selected: ["vegetarian"]
        },
        4: {
            type: "RADIO_SELECT" as const,
            label: "Accommodation Required",
            options: [
                {value: "yes", label: "Yes"},
                {value: "no", label: "No"}
            ],
            value: "no"
        },
        5: {
            type: "DATE_SELECTOR_CALENDAR" as const,
            label: "Event Date",
            value: new Date("2024-07-15")
        }
    }
};

