import {ProblemSetType} from "@/app/features/leetcode-playground/types";

export const useRemoveStopWords = (): ProblemSetType => {
    const removeStopWords = ({stopWords, paragraph}: { stopWords: string[], paragraph: string }) => {
        const stopWordsSet = new Set(stopWords);
        let strippedString = [];
        for (let word of paragraph.split(' ')) {
            if (!stopWordsSet.has(word)) {
                strippedString.push(word);
            }
        }

        return strippedString.join(' ');
    }

    return {
        name: "removeStopWords()",
        instructions: 'Given a list of stop words, write a function stopwords_stripped that takes a string and returns a string stripped of the stop words with all lowercase characters.',
        tests: [
            {
                params: {
                    stopWords: ['I', 'as', 'to', 'you', 'your', 'but', 'be', 'a'],
                    paragraph: 'I want to figure out how I can be a better data scientist'
                },
                expectedResult: 'want figure out how can better data scientist'
            },
        ],
        problemSetFunction: removeStopWords
    }

};
