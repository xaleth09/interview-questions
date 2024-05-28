import React from 'react'
import styled from "styled-components";
import {Column} from "@/app/components/Flex";

const StyledColumn = styled(Column)`
    background-color: white;
    border-radius: 8px;
    border: solid lightgray 1px;
    padding: 24px;
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
