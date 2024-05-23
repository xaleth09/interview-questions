import {ProblemSetType} from "@/app/features/leetcode-playground/types";

export const useCountingElements = (): ProblemSetType => {
    const countingElements = (nums: number[]) => {
        const numSet = new Set(nums);
        let missingNumber;
        for (let i = 0; i <= nums.length; i++) {
            if (!numSet.has(i)) {
                missingNumber = i;
                break;
            }
        }

        return missingNumber;
    }

    return {
        name: "countingElements()",
        instructions: 'Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.',
        tests: [
            {params: [3, 0, 1], expectedResult: 2},
            {params: [0, 1], expectedResult: 2},
            {params: [9, 6, 4, 2, 3, 5, 7, 0, 1], expectedResult: 8},
        ],
        problemSetFunction: countingElements
    }

};
