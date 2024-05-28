import {DisplayStateType, ProblemSetFunction, Test} from "@/app/features/leetcode-playground/types";
import {Button, Spacing} from "@/app/components";
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
            const prettyJSONParams = JSON.stringify(params);
            const formattedParamsString = prettyJSONParams.replace(/],/g, ',\n');
            setDisplay({
                result: JSON.stringify(result),
                testParams: prettyJSONParams,
                expectedResult: expectedResult.toString(),
                testName: testName
            })
        }

        return (
            <React.Fragment key={testName}>
                <Button onClick={handleOnClick}>
                    Run {testName}!
                </Button>
                {index !== tests.length - 1 ? (
                    <Spacing height={"SM"}/>
                ) : null}
            </React.Fragment>
        )
    })
}
