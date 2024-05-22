import {ProblemSet} from "@/app/features/leetcode-playground/types";

export const useSortedSquares = (): ProblemSet => {
    const sortedSquares = (nums: number[]) => {
        let leftIndex = 0;
        let rightIndex = nums.length - 1;
        let result = new Array(nums.length);

        for (let i = nums.length - 1; i >= 0; i--) {
            const leftValue = nums[leftIndex]
            const rightValue = nums[rightIndex]

            if (Math.abs(leftValue) < Math.abs(rightValue)) {
                result[i] = Math.pow(rightValue, 2)
                rightIndex--;
            } else {
                leftIndex++;
                result[i] = Math.pow(leftValue, 2)
            }

        }
        return result;
    }

    return {
        functionName: "useSortedSquares()",
        instructions: '',
        tests: [
            {params: [-4, -1, 0, 3, 10], expectedResult: 'expectedResult'},
            {params: [-20, -1, 0, 3, 100], expectedResult: 'expectedResult'},
            {params: [-5, -4, -3, -2, -1], expectedResult: 'expectedResult'},
        ],
        problemSetFunction: sortedSquares
    }

};
