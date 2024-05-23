import React from 'react'
import {Column, Spacing} from "@/app/components";
import {ProblemSet} from "@/app/features/leetcode-playground/ProblemSet";
import {useMaxConsecutiveOnesIII} from "@/app/features/leetcode-playground/useMaxConsecutiveOnesIII";
import {useMaxAvgSubArray} from "@/app/features/leetcode-playground/useMaxAvgSubArray";
import {useSortedSquares} from "@/app/features/leetcode-playground/useSortedSquares";

export const LeetCodePlayground = ({}) => {
    const useMaxConsecutiveOnesProblemSet = useMaxConsecutiveOnesIII();
    const useMaxAvgSubArrayProblemSet = useMaxAvgSubArray();
    const useSortedSquaresProblemSet = useSortedSquares();
    return (
        <Column>
            <ProblemSet problemSet={useMaxConsecutiveOnesProblemSet}/>
            <Spacing height={"XL"}/>
            <ProblemSet problemSet={useMaxAvgSubArrayProblemSet}/>
            <Spacing height={"XL"}/>
            <ProblemSet problemSet={useSortedSquaresProblemSet}/>
        </Column>
    )
}
