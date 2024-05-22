export const useSortedSquares = () => {
    const sortedSquares = (nums) => {
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

    const test1 = [-4, -1, 0, 3, 10]
    const test2 = [-20, -1, 0, 3, 100]
    const test3 = [-5, -4, -3, -2, -1]

    return {
        test1,
        test2,
        test3,
        sortedSquares
    }

};
