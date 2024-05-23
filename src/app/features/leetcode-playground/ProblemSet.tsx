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
            <H2 color={"chartreuse"}>{name}</H2>
            <span style={{marginTop: '8px', maxWidth: '400px'}}>{instructions}</span>
            <Spacing height={'MD'}/>
            <Column>
                <H3>Last test ran: {testName}</H3>
                <Spacing height={'MD'}/>
                <Row flexGrow={1} spaceBetween>
                    <Span>testParams:</Span>
                    <Span>{testParams}</Span>
                </Row>
                <Spacing height={"MD"}/>
                <Row flexGrow={1} spaceBetween>
                    <Span>result:</Span>
                    <Span>{result}</Span>
                </Row>
                <Spacing height={"XS"}/>
                <Row flexGrow={1} spaceBetween>
                    <Span>expected:</Span>
                    <Span>{expectedResult}</Span>
                </Row>
            </Column>
            <Spacing height={'LG'}/>
            <TestButtons tests={tests} problemSetFunction={problemSetFunction} setDisplay={setDisplay}/>
        </Card>
    )
}
