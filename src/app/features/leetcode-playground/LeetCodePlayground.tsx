import React from 'react'
import {Column} from "@/app/components";
import {ProblemSet} from "@/app/features/leetcode-playground/ProblemSet";
import {useFindMissingNumber} from "@/app/features/leetcode-playground/problem-sets/useFindMissingNumber";

export const LeetCodePlayground = ({}) => {
    // const useMaxConsecutiveOnesProblemSet = useMaxConsecutiveOnesIII();
    // const useMaxAvgSubArrayProblemSet = useMaxAvgSubArray();
    // const useSortedSquaresProblemSet = useSortedSquares();
    // const useIsPangramProblemSet = useIsPangram()
    const useFindMissingNumberProblemSet = useFindMissingNumber()

    return (
        <Column>
            <ProblemSet problemSet={useFindMissingNumberProblemSet}/>
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useMaxConsecutiveOnesProblemSet}/>*/}
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useMaxAvgSubArrayProblemSet}/>*/}
            {/*<Spacing height={"XL"}/>*/}
            {/*<ProblemSet problemSet={useSortedSquaresProblemSet}/>*/}
        </Column>
    )
}
