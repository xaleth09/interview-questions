export const useMaxConsecutiveOnesIII = () => {
    const printRangeOfArray = (array: any[], left: number, right: number) => {
        let string = '';
        for (left; left <= right; left++) {
            string += array[left] + (left !== right ? ', ' : '')
        }

        console.log(`window: [${string}]`)
    }

    let longestOnes = ({nums, k}: { nums: number[], k: number }) => {
        let left = 0;
        let currentWindowLength = 0;
        let result = 0;
        let numZeros = 0;

        for (let right = 0; right < nums.length; right++) {
            currentWindowLength = currentWindowLength + 1;
            if (nums[right] === 0) {
                numZeros++;
            }

            // condition to move left
            while (numZeros > k) {
                if (nums[left] === 0) {
                    numZeros--;
                }
                left++;
                currentWindowLength--;
            }

            result = Math.max(result, currentWindowLength)
        }

        return result;
    };

    return {
        functionName: "longestOnes()",
        instructions: 'Given a binary array nums and an integer k, return the maximum number of consecutive 1\'s in the array if you can flip at most k 0\'s',
        tests: [
            {
                params: {nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2,},
                expectedResult: 6,
            },
            {
                params: {nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3},
                expectedResult: 10,
            }
        ],
        problemSetFunction: longestOnes
    }
}
