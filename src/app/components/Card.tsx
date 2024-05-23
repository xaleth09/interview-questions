import React from 'react'
import {Column} from "./Flex";
import styled from "styled-components";

type Props = {
    children: React.ReactNode
}

const StyledColumn = styled(Column)`
    background-color: white;
    border-radius: 4px;
    border: solid grey 1px;
    padding: 16px;
`

export const Card = ({children}: Props) => {
    return (
        <StyledColumn>
            {children}
        </StyledColumn>
    )
}
