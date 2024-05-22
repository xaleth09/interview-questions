import React, {useState} from 'react'
import {Column, Row, Spacing} from "@/app/components";
import {useMaxConsecutiveOnesIII} from "@/app/features/leetcode-playground/useMaxConsecutiveOnesIII";
import {DisplayStateType} from "@/app/features/leetcode-playground/types";
import {TestButtons} from "@/app/features/leetcode-playground/TestButtons";

export const LeetCodePlayground = ({}) => {
    const [display, setDisplay] = useState<DisplayStateType>({result: '', expectedResult: '', testName: ''})

    const {functionName, instructions, problemSetFunction, tests} = useMaxConsecutiveOnesIII()

    const {result, expectedResult, testName} = display

    return (
        <Column centerHorizontally>
            <Column center>
                <h2>{functionName}</h2>
                <span style={{marginTop: '8px', maxWidth: '400px', textAlign: 'center'}}>{instructions}</span>
            </Column>
            <Spacing height={'SM'}/>
            {testName ? (
                <Column>
                    <Row center>
                        <h3>Last test ran: {testName}</h3>
                    </Row>
                    <Spacing height={'MD'}/>
                    <Row spaceBetween>
                        <div>result: {result}</div>
                        <div>expected: {expectedResult}</div>
                    </Row>
                </Column>
            ) : (
                <Column center>
                    <h3>Press a button to run a test!</h3>
                    <Spacing height={'LG'}/>
                </Column>
            )}
            <Spacing height={'SM'}/>
            <TestButtons tests={tests} problemSetFunction={problemSetFunction} setDisplay={setDisplay}/>
        </Column>
    )
}
