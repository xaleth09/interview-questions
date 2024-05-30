export type GuessResult = 'correct' | 'incorrectPosition' | 'incorrect' | undefined

export type Letter = { letter: string, guessResult: GuessResult }

export type Letters = Letter[]

export type Word = { word: string, letters: Letters }

export type GameState = {
    winner: boolean;
    board: {
        completedWordRows: Word[]
    }
}
