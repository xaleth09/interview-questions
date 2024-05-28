import {printRangeOfArray} from "@/app/features/leetcode-playground/problem-sets/utils";

export const maxAvgSubArray = {
    name: "findMaxAverageSubArray()",
    instructions: '',
    tests: [
        {
            params: {nums: [1, 12, -5, -6, 50, 3], k: 4},
            expectedResult: 12.75
        },
        {
            params: {nums: [0, 4, 0, 3, 2], k: 1},
            expectedResult: 4
        },
        {
            params: {nums: [4, 2, 1, 3, 3], k: 2},
            expectedResult: 3
        },
    ],
    problemSetFunction: ({nums, k}: { nums: number[], k: number }) => {
        let left = 0;
        let windowSum = 0;
        for (let i = 0; i < k; i++) {
            windowSum += nums[i]
        }

        let maxAvg = windowSum / k;
        printRangeOfArray(nums, left, k - 1)

        for (let right = k; right < nums.length; right++) {
            windowSum = windowSum - nums[left++] + nums[right]
            printRangeOfArray(nums, left, right)
            maxAvg = Math.max(windowSum / k, maxAvg)
        }

        return maxAvg
    }
}

