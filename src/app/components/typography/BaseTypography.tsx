import {COLORS, ColorValues} from "@/app/design-tokens";
import styled from "styled-components";
import React from 'react'

export type BaseTypographyProps<T extends React.ElementType> = {
    as?: T;
    centered?: boolean;
    color?: ColorValues;
    children: React.ReactNode | string;
} & React.ComponentPropsWithoutRef<T>

const StyledBaseTypography = styled.div<BaseTypographyProps<any>>`
    ${({centered, color}) => `
        ${centered ? 'text-align: center;' : ''}
        color: ${color ? color : COLORS.BLACK}
    `}
`

export const BaseTypography = <T extends React.ElementType = 'p'>
({
     as,
     centered,
     color,
     children
 }: BaseTypographyProps<T>) => {
    const Component = as || 'p';
    return (
        <StyledBaseTypography
            as={Component}
            centered={centered}
            color={color}
        >
            {children}
        </StyledBaseTypography>
    )
}
