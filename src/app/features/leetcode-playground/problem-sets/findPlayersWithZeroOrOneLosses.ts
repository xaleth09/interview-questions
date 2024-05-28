export const findPlayersWithZeroOrOneLosses = {
    name: "findPlayersWithZeroOrOneLosses()",
    instructions: 'You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.\n' +
        '\n' +
        'Return a list answer of size 2 where:\n' +
        '\n' +
        'answer[0] is a list of all players that have not lost any matches.\n' +
        'answer[1] is a list of all players that have lost exactly one match.\n' +
        'The values in the two lists should be returned in increasing order.',
    tests: [
        {
            params: {matches: [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]},
            expectedResult: [[1, 2, 10], [4, 5, 7, 8]]
        },
        {params: {matches: [[2, 3], [1, 3], [5, 4], [6, 4]]}, expectedResult: [[1, 2, 5, 6], []]},
    ],
    problemSetFunction: ({matches}: { matches: [number, number][] }) => {
        let winners: number[] = [], losers: number[] = [];
        let lossesCountMap = {}
        return [winners, losers];
    }
}
