import React, {useState} from 'react'
import {Card, Column, H2, H3, Row, Spacing, Span} from "@/app/components";
import {TestButtons} from "@/app/features/leetcode-playground/TestButtons";
import {DisplayStateType, ProblemSetType} from "@/app/features/leetcode-playground/types";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
`

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
            <H2 color={"chartreuse"} centered>{name}</H2>
            <span style={{marginTop: '8px', maxWidth: '400px', textAlign: 'center'}}>{instructions}</span>
            <Spacing height={'SM'}/>
            <Column>
                <H3 centered>Last test ran: {testName}</H3>
                <Spacing height={'MD'}/>
                <Span centered>testParams:</Span>
                <Spacing height={"XXS"}/>
                <Span>{testParams}</Span>
                <Spacing height={"MD"}/>
                <Row flexGrow={1} spaceBetween>
                    <Span>result:</Span>
                    <Span>{result}</Span>
                </Row>
                <Spacing height={"XS"}/>
                <Span>expected: {expectedResult}</Span>
            </Column>
            <Spacing height={'LG'}/>
            <TestButtons tests={tests} problemSetFunction={problemSetFunction} setDisplay={setDisplay}/>
        </Card>
    )
}
