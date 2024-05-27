import React from 'react'
import {Column} from "@/app/components";
import {ProblemSet} from "@/app/features/leetcode-playground/ProblemSet";
import {useTopNFrequentWords} from "@/app/features/leetcode-playground/problem-sets/useTopNFrequentWords";
import {useSortedSquares} from "@/app/features/leetcode-playground/problem-sets/useSortedSquares";
import {useIsPangram} from "@/app/features/leetcode-playground/problem-sets/useIsPangram";
import {useMaxConsecutiveOnesIII} from "@/app/features/leetcode-playground/problem-sets/useMaxConsecutiveOnesIII";
import {useMaxAvgSubArray} from "@/app/features/leetcode-playground/problem-sets/useMaxAvgSubArray";
import {useFindMissingNumber} from "@/app/features/leetcode-playground/problem-sets/useFindMissingNumber";
import {useRemoveStopWords} from "@/app/features/leetcode-playground/problem-sets/useRemoveStopWords";
import {
    useFindPlayersWithZeroOrOneLosses
} from "@/app/features/leetcode-playground/problem-sets/useFindPlayersWithZeroOrOneLosses";

export const LeetCodePlayground = ({}) => {
    const useMaxConsecutiveOnesProblemSet = useMaxConsecutiveOnesIII();
    const useMaxAvgSubArrayProblemSet = useMaxAvgSubArray();
    const useSortedSquaresProblemSet = useSortedSquares();
    const useIsPangramProblemSet = useIsPangram();
    const useFindMissingNumberProblemSet = useFindMissingNumber();
    const removeStopWordsProblemSet = useRemoveStopWords();
    const topNFrequentWords = useTopNFrequentWords()
    const findPlayersWithZeroOrOneLosses = useFindPlayersWithZeroOrOneLosses();

    return (
        <Column>
            <ProblemSet problemSet={findPlayersWithZeroOrOneLosses}/>
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useMaxConsecutiveOnesProblemSet}/>*/}
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useMaxAvgSubArrayProblemSet}/>*/}
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useSortedSquaresProblemSet}/>*/}
        </Column>
    )
}
