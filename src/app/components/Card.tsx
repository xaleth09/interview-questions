import React from 'react'
import {Column} from "./Flex";
import styled from "styled-components";

const StyledColumn = styled(Column)`
    background-color: white;
    border-radius: 4px;
    border: solid lightgray 1px;
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`

type Props = {
    children: React.ReactNode
}

export const Card = ({children}: Props) => {
    return (
        <StyledColumn flexGrow={1}>
            {children}
        </StyledColumn>
    )
}
