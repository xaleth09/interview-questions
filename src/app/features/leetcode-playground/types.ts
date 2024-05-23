export type ProblemSetType = {
    name: string,
    instructions: string,
    tests: Test[],
    problemSetFunction: ProblemSetFunction,
}

export type ProblemSetFunction = (...args: any[]) => any

export type Test = {
    params: any;
    expectedResult: any;
}

export type DisplayStateType = { result: string | number, expectedResult: string | number, testName: string }
