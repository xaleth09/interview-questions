import React, {useState} from 'react'
import styled from "styled-components";
import {COLORS} from "@/app/design-tokens";
import {Column, Spacing, Span} from "@/app/components";

const KEYBOARD_LAYOUT = {
    TOP_ROW: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '←'],
    MIDDLE_ROW: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '⏎'],
    BOTTOM_ROW: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
}

type Props = {}

const KeyboardCharactersRow = styled.div<{ $numCols: number }>`
    display: flex;
    justify-content: center;
    gap: 4px;
`

const KeyCap = styled.div<{ $pressed: boolean }>`
    display: flex;
    box-sizing: border-box;
    height: 36px;
    min-width: 28px;
    border: 1px solid ${COLORS.BLACK};
    border-radius: 4px;
    padding: 0 8px;
    background-color: ${({$pressed}) => $pressed ? 'darkgrey' : 'lightgrey'};
    cursor: pointer;
`

const KeyLetter = styled(Span)`
    font-size: .75rem;
    user-select: none;
`

export const Keyboard = ({}) => {
    const [currentClickedLetter, setCurrentClickedLetter] = useState('');

    const resetCurrentClickedLetter = () => {
        setCurrentClickedLetter('');
    }

    const handleClick = (clickedLetter: string) => {
        setCurrentClickedLetter(clickedLetter);
    }

    return (
        <Column>
            <KeyboardCharactersRow $numCols={KEYBOARD_LAYOUT.TOP_ROW.length}>
                {KEYBOARD_LAYOUT.TOP_ROW.map((letter) => (
                    <KeyCap
                        key={letter}
                        onMouseDown={() => {
                            handleClick(letter)
                        }}
                        onMouseUp={resetCurrentClickedLetter}
                        onMouseLeave={resetCurrentClickedLetter}
                        $pressed={letter === currentClickedLetter}
                    >
                        <KeyLetter>{letter}</KeyLetter>
                    </KeyCap>
                ))}
            </KeyboardCharactersRow>
            <Spacing height={"XXXS"}/>
            <KeyboardCharactersRow $numCols={KEYBOARD_LAYOUT.MIDDLE_ROW.length}>
                {KEYBOARD_LAYOUT.MIDDLE_ROW.map((letter) => (
                    <KeyCap
                        key={letter}
                        onMouseDown={() => {
                            handleClick(letter)
                        }}
                        onMouseUp={resetCurrentClickedLetter}
                        onMouseLeave={resetCurrentClickedLetter}
                        $pressed={letter === currentClickedLetter}
                    >
                        <KeyLetter>{letter}</KeyLetter>
                    </KeyCap>
                ))}
            </KeyboardCharactersRow>
            <Spacing height={"XXXS"}/>
            <KeyboardCharactersRow $numCols={KEYBOARD_LAYOUT.BOTTOM_ROW.length}>
                {KEYBOARD_LAYOUT.BOTTOM_ROW.map((letter) => (
                    <KeyCap
                        key={letter}
                        onMouseDown={() => {
                            handleClick(letter)
                        }}
                        onMouseUp={resetCurrentClickedLetter}
                        onMouseLeave={resetCurrentClickedLetter}
                        $pressed={letter === currentClickedLetter}
                    >
                        <KeyLetter>{letter}</KeyLetter>
                    </KeyCap>
                ))}
            </KeyboardCharactersRow>
        </Column>
    )
}
