import styled from "styled-components";

type Props = {}

export const Separator = styled.div<{ topMargin?: string, bottomMargin?: string }>`
    height: 2px;
    background-color: black;
    width: 100%;
    ${({topMargin = '0', bottomMargin = '0'}) => `
        margin-top: ${topMargin};
        margin-bottom: ${bottomMargin};
    `}
`
