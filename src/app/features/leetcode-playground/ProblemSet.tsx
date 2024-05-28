import React, {useState} from 'react'
import {Card, Column, H2, H3, Row, Spacing, Span} from "@/app/components";
import {TestButtons} from "@/app/features/leetcode-playground/TestButtons";
import {DisplayStateType, ProblemSetType} from "@/app/features/leetcode-playground/types";

type Props = {
    problemSet: ProblemSetType
}

export const ProblemSet = ({problemSet}: Props) => {
    const [display, setDisplay] = useState<DisplayStateType>({
        result: '',
        testParams: '',
        expectedResult: '',
        testName: ''
    })
    const {result, testParams, expectedResult, testName} = display

    const {
        name,
        instructions,
        tests,
        problemSetFunction,
    } = problemSet

    return (
        <Card>
            <Column flexGrow={1}>
                <H2>{name}</H2>
                <Spacing height={'SM'}/>
                <Span centered>{instructions}</Span>
                <Spacing height={'MD'}/>
            </Column>
            <Column flexGrow={1}>
                <H3>Last test ran: {testName}</H3>
                <Spacing height={'MD'}/>
                <Row spaceBetween wrap>
                    <Span>testParams:</Span>
                    <Span color={"green"} whiteSpace={'pre-wrap'}>{testParams}</Span>
                </Row>
                <Spacing height={"MD"}/>
                <Row spaceBetween>
                    <Span>result:</Span>
                    <Span>{result}</Span>
                </Row>
                <Spacing height={"XS"}/>
                <Row spaceBetween>
                    <Span>expected:</Span>
                    <Span>{expectedResult}</Span>
                </Row>
            </Column>
            <Spacing height={'LG'}/>
            <TestButtons tests={tests} problemSetFunction={problemSetFunction} setDisplay={setDisplay}/>
        </Card>
    )
}
