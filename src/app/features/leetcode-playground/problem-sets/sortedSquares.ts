export const sortedSquares = {
    name: "useSortedSquares()",
    instructions: '',
    tests: [
        {params: {nums: [-4, -1, 0, 3, 10]}, expectedResult: 'expectedResult'},
        {params: {nums: [-20, -1, 0, 3, 100]}, expectedResult: 'expectedResult'},
        {params: {nums: [-5, -4, -3, -2, -1]}, expectedResult: 'expectedResult'},
    ],
    problemSetFunction: ({nums}: { nums: number[] }) => {
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
}
