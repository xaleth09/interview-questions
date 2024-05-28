export const printRangeOfArray = (array: any[], left: number, right: number) => {
    let string = '';
    for (left; left <= right; left++) {
        string += array[left] + (left !== right ? ', ' : '')
    }

    console.log(`window: [${string}]`)
}
