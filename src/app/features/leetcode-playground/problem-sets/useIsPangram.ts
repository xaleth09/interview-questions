import {ProblemSetType} from "@/app/features/leetcode-playground/types";

export const useIsPangram = (): ProblemSetType => {
    const isPangram = ({sentence}: { sentence: string }) => {
        let seen: { [letter: string]: number } = {};

        for (let letter of sentence) {
            seen[letter] = 1;
        }

        return Object.keys(seen).length === 26;
    }

    return {
        name: "useIsPangram()",
        instructions: 'A pangram is a sentence where every letter of the English alphabet appears at least once.\n' +
            '\n' +
            'Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.',
        tests: [
            {params: {sentence: 'thequickbrownfoxjumpsoverthelazydog'}, expectedResult: 'true'},
            {params: {sentence: 'thisisnotapangram'}, expectedResult: 'false'},
        ],
        problemSetFunction: isPangram
    }

};
