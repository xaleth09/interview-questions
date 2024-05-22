import {DisplayStateType, Test} from "@/app/features/leetcode-playground/types";
import {Spacing} from "@/app/components";
import React from "react";

export const TestButtons = ({tests, testFunction, setDisplay}: {
    tests: Test[],
    testFunction: () => any,
    setDisplay: (newDisplayState: DisplayStateType) => any
}) => {
    return tests.map((test, index) => {
        const {expectedResult, ...rest} = test
        const testName = `test${index + 1}`
        const handleOnClick = () => {
            console.clear()
            const result = testFunction(rest)
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
                    style={{width: '300px', backgroundColor: 'cornflowerblue'}}
                    onClick={handleOnClick}
                >
                    Run {testName}!
                </button>
                {index === tests.length - 1 ? (
                    <Spacing height={"SM"}/>
                ) : null}
            </>
        )
    })
}
