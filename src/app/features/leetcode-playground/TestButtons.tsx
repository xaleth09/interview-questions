import {DisplayStateType, ProblemSetFunction, Test} from "@/app/features/leetcode-playground/types";
import {Spacing} from "@/app/components";
import React from "react";

export const TestButtons = ({tests, problemSetFunction, setDisplay}: {
    tests: Test[],
    problemSetFunction: ProblemSetFunction,
    setDisplay: (newDisplayState: DisplayStateType) => any
}) => {
    return tests?.map((test, index) => {
        const {expectedResult, params} = test
        const testName = `test${index + 1}`
        const handleOnClick = () => {
            console.clear()
            const result = problemSetFunction(params)
            setDisplay({
                result,
                expectedResult: expectedResult.toString(),
                testName: testName
            })
        }

        return (
            <>
                <button
                    key={testName}
                    style={{width: '50%', backgroundColor: 'cornflowerblue'}}
                    onClick={handleOnClick}
                >
                    Run {testName}!
                </button>
                {index !== tests.length - 1 ? (
                    <Spacing height={"SM"}/>
                ) : null}
            </>
        )
    })
}
