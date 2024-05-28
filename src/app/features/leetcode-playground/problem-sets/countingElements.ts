export const countElements = {
    name: "countingElements()",
    instructions: 'Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.',
    tests: [
        {params: {nums: [1, 2, 3]}, expectedResult: 2},
        {params: {nums: [1, 1, 3, 3, 5, 5, 7, 7]}, expectedResult: 0},
    ],
    problemSetFunction: ({nums}: { nums: number[] }) => {
        const numSet = new Set(nums);
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (numSet.has(nums[i] + 1)) {
                count++;
            }
        }

        return count;
    }
}
