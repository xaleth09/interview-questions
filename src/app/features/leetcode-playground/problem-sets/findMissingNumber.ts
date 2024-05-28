export const findMissingNumber = {
    name: "findMissingNumber()",
    instructions: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
    tests: [
        {params: {nums: [3, 0, 1]}, expectedResult: 2},
        {params: {nums: [0, 1]}, expectedResult: 2},
        {params: {nums: [9, 6, 4, 2, 3, 5, 7, 0, 1]}, expectedResult: 8},
    ],
    problemSetFunction: ({nums}: { nums: number[] }) => {
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
}

