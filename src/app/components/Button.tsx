import React from 'react'
import styled from "styled-components";

type StyledButtonProps = {
    type?: "primary" | "secondary" | "tertiary";
    size?: 'inline' | 'fullwidth';
    disabled?: boolean;
    loading?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    ${({size, disabled, loading}) => `
        width: ${size === 'fullwidth' ? '100%' : 'initial'};
    `}
`

type Props = {
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    children: string | string[];
} & StyledButtonProps;

export const Button = ({
                           size = 'fullwidth',
                           disabled,
                           loading,
                           onClick,
                           children,
                       }: Props) => {

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    }

    return (
        <StyledButton
            size={size}
            disabled={disabled}
            loading={loading}
            onClick={handleOnClick}
        >
            {children}
        </StyledButton>
    )
}
