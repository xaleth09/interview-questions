import {Letters, Word} from "@/app/features/my-wordle/types";

export const createEmptyWord = (numLetters: number): Word => {
    let letters: Letters = []
    for (let i = 0; i < numLetters; i++) {
        letters.push({letter: '', guessResult: undefined})
    }
    return {word: '', letters}
}
