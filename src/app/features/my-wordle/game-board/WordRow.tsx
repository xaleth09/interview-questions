import React from 'react'
import styled from "styled-components";
import {COLORS, SPACING} from "@/app/design-tokens";
import {GuessResult, Letters} from "@/app/features/my-wordle/types";

export const LETTER_BOX_HEIGHT = 54;
export const LETTER_BOX_WIDTH = 48;

type WordRowProps = { letters: Letters }

const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(5, ${LETTER_BOX_WIDTH}px);
    grid-column-gap: ${SPACING.XXXS.px};
`

const LetterBox = styled.span<{ $guessResult?: GuessResult }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${LETTER_BOX_HEIGHT}px;
    width: ${LETTER_BOX_WIDTH}px;
    border: 2px solid ${COLORS.BLACK};
    border-radius: 4px;
    background-color: white;
`

export const WordRow = ({letters}: WordRowProps) => (
    <GridColumns>
        {letters.map(({letter, guessResult}) => {
            return <LetterBox key={letter} $guessResult={guessResult}>{letter}</LetterBox>
        })}
    </GridColumns>
)

type PlaceHolderWordRowProps = { placeHolderLetterCount?: number }

export const PlaceHolderWordRow = ({placeHolderLetterCount}: PlaceHolderWordRowProps) => (
    <GridColumns>
        {new Array(placeHolderLetterCount).fill(true).map((emptyLetter, index) => (
            <LetterBox key={`placeHolder-${index}`}/>
        ))}
    </GridColumns>
)
