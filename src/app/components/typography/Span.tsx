import React from 'react'
import {BaseTypography, BaseTypographyProps} from "@/app/components/typography/BaseTypography";
import styled from "styled-components";

const StyledSpan = styled(BaseTypography).attrs({as: 'span'})`

`

type Props = {} & BaseTypographyProps<'span'>

export const Span = ({centered, color, whiteSpace, children, className}: Props) => {

    return (
        <StyledSpan as={'span'}
                    centered={centered}
                    color={color}
                    whiteSpace={whiteSpace}
                    className={className}
        >
            {children}
        </StyledSpan>
    )
}
