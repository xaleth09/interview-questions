import React from 'react'

type Props = {}

const cardStyle = ({}) => {
    return {
        backgroundColor: 'white',
        borderRadius: '4px',
        border: 'solid grey 1px',
        padding: '16px',
    }
}

export const Card = ({}) => {
    return (
        <div style={cardStyle()}>
            <p>Hello, World!</p>
        </div>
    )
}
