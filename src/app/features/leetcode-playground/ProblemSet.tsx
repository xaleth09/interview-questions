import React, {useState} from 'react'
import {Card, Column, H3, Spacing} from "@/app/components";
import {TestButtons} from "@/app/features/leetcode-playground/TestButtons";
import {DisplayStateType, ProblemSetType} from "@/app/features/leetcode-playground/types";

type Props = {
    problemSet: ProblemSetType
}

export const ProblemSet = ({problemSet}: Props) => {
    const [display, setDisplay] = useState<DisplayStateType>({result: '', expectedResult: '', testName: ''})
    const {result, expectedResult, testName} = display

    const {
        name,
        instructions,
        tests,
        problemSetFunction,
    } = problemSet

    return (
        <Card>
            <Column centerHorizontally>
                <Column center>
                    <h2>{name}</h2>
                    <span style={{marginTop: '8px', maxWidth: '400px', textAlign: 'center'}}>{instructions}</span>
                </Column>
                <Spacing height={'SM'}/>
                {name ? (
                    <Column>
                        <H3>Last test ran: {name}</H3>
                        <Spacing height={'MD'}/>
                        <Column spaceBetween>
                            <div>result: {result}</div>
                            <Spacing height={"XS"}/>
                            <div>expected: {expectedResult}</div>
                        </Column>
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
        </Card>
    )
}
