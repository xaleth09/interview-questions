import styled from "styled-components";
import {COLORS, ColorValues} from "@/app/design-tokens";

type HeaderProps = {
    centered?: boolean;
    color?: ColorValues;
}

const Header = styled.p<HeaderProps>`
    ${({centered, color}: HeaderProps) => `
        ${centered ? 'text-align: center;' : ''}
        color: ${color ? color : COLORS.BLACK}
    `}
}
`

export const H1 = styled(Header).attrs({as: 'h1'})<HeaderProps>``

export const H2 = styled(Header).attrs({as: 'h2'})<HeaderProps>``

export const H3 = styled(Header).attrs({as: 'h3'})<HeaderProps>``
