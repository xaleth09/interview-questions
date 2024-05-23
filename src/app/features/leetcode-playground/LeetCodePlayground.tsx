import React from 'react'
import {Column} from "@/app/components";
import {ProblemSet} from "@/app/features/leetcode-playground/ProblemSet";
import {useTopNFrequentWords} from "@/app/features/leetcode-playground/problem-sets/useTopNFrequentWords";

export const LeetCodePlayground = ({}) => {
    // const useMaxConsecutiveOnesProblemSet = useMaxConsecutiveOnesIII();
    // const useMaxAvgSubArrayProblemSet = useMaxAvgSubArray();
    // const useSortedSquaresProblemSet = useSortedSquares();
    // const useIsPangramProblemSet = useIsPangram();
    // const useFindMissingNumberProblemSet = useFindMissingNumber();
    // const removeStopWordsProblemSet = useRemoveStopWords();
    const topNFrequentWords = useTopNFrequentWords()

    return (
        <Column>
            <ProblemSet problemSet={topNFrequentWords}/>
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useMaxConsecutiveOnesProblemSet}/>*/}
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useMaxAvgSubArrayProblemSet}/>*/}
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useSortedSquaresProblemSet}/>*/}
        </Column>
    )
}
