import React from 'react'
import {BaseTypography, BaseTypographyProps} from "@/app/components/typography/BaseTypography";
import styled from "styled-components";

const StyledSpan = styled(BaseTypography).attrs({as: 'span'})`

`

type Props = {} & BaseTypographyProps<'span'>

export const Span = ({centered, color, children}: Props) => {

    return (
        <StyledSpan as={'span'}
                    centered={centered}
                    color={color}
        >
            {children}
        </StyledSpan>
    )
}
