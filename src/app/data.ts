/*
    form_title: title
    {
        page: number
        page_title;
        array of inputs (added to page)
        TEXT_INPUT
        label
        placeholder
        default_value
        DROPDOWN_SELECT
        array options
        label
        default_value
        Options: label
    }

*/

// getPage(currentPageNumber)


/*
 1: {
    title: name
    inputs: []
 }
 2: {

 }
 */


export const getNextPage = (currentPage: number) => {
    switch (currentPage) {
        case 1:
            return apiResult2;
        default:
            return apiResult1;
    }
}
/*
{
    form_name:'My Zip Intake',
    pages_data: {
     1: {
        page_title: 'Step 1: Request Details',
        inputs: [
                {
                    type: 'TEXT_INPUT',
                    label: 'What are you requesting to purchase?',
                    placeholder: 'Enter the name of your request'
                },
                {
                    type: 'TEXT_INPUT',
                    label: 'What are you requesting to purchase?',
                    placeholder: 'Enter the name of your request'
                },
                {
                    type: 'DROPDOWN_SELECT',
                    placeholder: '',
                    label: 'What are you requesting to purchase?',
                    options: [
                        'Asana',
                        'Vendor1',
                        'Vendor2'
                    ],
                    default_value: 'Asana'
                },
            ]
        },
        2: {
        page_title: 'Step 1: Request Details',
        inputs: [
                {
                    type: 'TEXT_INPUT',
                    label: 'What are you requesting to purchase?',
                    placeholder: 'Enter the name of your request'
                },
                {
                    type: 'TEXT_INPUT',
                    label: 'What are you requesting to purchase?',
                    placeholder: 'Enter the name of your request'
                },
                {
                    type: 'DROPDOWN_SELECT',
                    placeholder: '',
                    label: 'What are you requesting to purchase?',
                    options: [
                        'Asana',
                        'Vendor1',
                        'Vendor2'
                    ],
                    default_value: 'Asana'
                },
            ]
        }
    }
}
 */


export const apiResult1 = {
    title: 'My Zip Intake Form',
    page: 1,
    page_title: 'Step 1: Request Details',
    inputs: [
        {
            id: 1,
            type: 'TEXT_INPUT',
            label: 'What are you requesting to purchase?',
            placeholder: 'Enter the name of your request'
        },
        {
            id: 2,
            type: 'TEXT_INPUT',
            label: 'Why is this purchase needed?',

            placeholder: 'Enter the name of your request'
        },
        {
            id: 3,
            type: 'DROPDOWN_SELECT',
            placeholder: '',
            options: [
                'Asana',
                'Vendor1',
                'Vendor2'
            ],
            default_value: 'Asana'
        },
    ]
}


export const apiResult2 = {
    title: 'My Zip Intake Form',
    page: 1,
    page_title: 'Step 1: Request Details',
    inputs: [
        {
            type: 'TEXT_INPUT',
            placeholder: 'Enter the name of your request'
        },
        {
            type: 'TEXT_INPUT',
            placeholder: 'Enter the name of your request'
        },
        {
            type: 'DROPDOWN_SELECT',
            placeholder: '',
            options: [
                'Asana',
                'Vendor1',
                'Vendor2'
            ],
            default_value: 'Asana'
        },
    ]
}
