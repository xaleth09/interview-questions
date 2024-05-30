import React, {useMemo, useState} from 'react'
import {GameState, Word} from "@/app/features/my-wordle/types";
import {LETTER_BOX_HEIGHT, PlaceHolderWordRow, WordRow} from "@/app/features/my-wordle/game-board/WordRow";
import styled from "styled-components";
import {SPACING} from "@/app/design-tokens";
import {createEmptyWord} from "@/app/features/my-wordle/utils";

const EMPTY_GAME_BOARD = {
    winner: false,
    board: {completedWordRows: []}
}

const GridRows = styled.div<{ $numGuessRows: number }>`
    display: grid;
    grid-row-gap: ${SPACING.XXS.px};
    ${({$numGuessRows}) => `
        grid-template-rows: repeat(${$numGuessRows}, ${LETTER_BOX_HEIGHT}px);
    `}
`

type Props = {
    wordLength?: number,
    numGuesses?: number,
}

export const GameBoard = ({wordLength = 5, numGuesses = 6}: Props) => {
    const [currentWordValue, setCurrentWordValue] = useState<Word>(createEmptyWord(wordLength))
    const [gameState, setGameState] = useState<GameState>(EMPTY_GAME_BOARD)
    const {winner, board} = gameState;
    const {completedWordRows} = board;

    const validateWord = (word: Word): { newWord: Word, isWinner: boolean } => {
        let newWord = {...word}
        return {
            newWord,
            isWinner: false,
        }
    }

    const handleSubmit = () => {
        // validate currentWordValue
        const {newWord, isWinner} = validateWord(currentWordValue)

        // push currentWordValue to gameState.board.completedWordRows
        setGameState(({board}) => {
            let updatedBoard = {winner: isWinner, board: {...board}}
            updatedBoard.board.completedWordRows.push(newWord)
            return updatedBoard;
        })

        // reset currentWordValue
        setCurrentWordValue(createEmptyWord(wordLength))
    }

    const remainingRows = useMemo(() => {
        const numPlaceholderRows = numGuesses - completedWordRows.length - 1; // -1 to account for active row
        let placeHolderRows = [];
        for (let i = 1; i <= numPlaceholderRows; i++) {
            placeHolderRows.push(<PlaceHolderWordRow key={`placeholder-row-${i}`} placeHolderLetterCount={wordLength}/>)
        }

        return (
            <>{...placeHolderRows}</>
        )
    }, [completedWordRows.length, numGuesses, wordLength])

    return (
        <GridRows $numGuessRows={numGuesses}>
            {completedWordRows.length ? (
                completedWordRows.map(({word, letters}, index) => (
                    <WordRow key={`${word}`} letters={letters}/>
                ))
            ) : null}
            <WordRow letters={currentWordValue.letters}/>
            {remainingRows}
        </GridRows>
    )
}
