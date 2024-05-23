import {COLORS, ColorValues} from "@/app/design-tokens";
import styled from "styled-components";
import React from 'react'

export type BaseTypographyProps<T extends React.ElementType> = {
    as?: T;
    centered?: boolean;
    color?: ColorValues;
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
    children: React.ReactNode | string;
} & React.ComponentPropsWithoutRef<T>

const StyledBaseTypography = styled.div <BaseTypographyProps<any>>`
    ${({centered, color, whiteSpace}) => `
        ${centered ? 'text-align: center;' : ''}
        color: ${color};
        white-space: ${whiteSpace};
    `}
`

export const BaseTypography = <T extends React.ElementType = 'p'>
({
     as,
     centered,
     color = COLORS.BLACK,
     whiteSpace = 'normal',
     children,
 }: BaseTypographyProps<T>) => {
    const Component = as || 'p';
    return (
        <StyledBaseTypography
            as={Component}
            centered={centered}
            color={color}
            whiteSpace={whiteSpace}
        >
            {children}
        </StyledBaseTypography>
    )
}
